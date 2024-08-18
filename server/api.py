from flask import Flask, request, jsonify
import subprocess
import os
from flask_cors import CORS
import requests
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)

def handle_code_request(file_name, compile_command, run_command, extra_files=[]):
    data = request.get_json()
    
    if 'data' not in data or not isinstance(data['data'], list):
        return jsonify({"error": "Invalid input data"}), 400
    
    try:
        with open(file_name, 'w') as f:
            for line in data['data']:
                f.write(line + '\n')
    except IOError as e:
        return jsonify({"error": f"File write error: {e}"}), 500

    if compile_command:
        try:
            print(f"Compiling with command: {' '.join(compile_command)}")
            result = subprocess.run(compile_command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
            if result.returncode != 0:
                print(f"Compilation error: {result.stderr}")
                return jsonify({"error": result.stderr}), 400
        except Exception as e:
            print(f"Exception during compilation: {e}")
            return jsonify({"error": str(e)}), 500

    try:
        print(f"Running with command: {' '.join(run_command)}")
        result = subprocess.run(run_command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        if result.returncode != 0:
            print(f"Execution error: {result.stderr}")
            return jsonify({"error": result.stderr}), 400
        return jsonify({"data": result.stdout})
    except Exception as e:
        print(f"Exception during execution: {e}")
        return jsonify({"error": str(e)}), 500
    finally:
        if os.path.exists(file_name):
            os.remove(file_name)
        for extra_file in extra_files:
            if os.path.exists(extra_file):
                os.remove(extra_file)

@app.route('/c', methods=['POST'])
def handle_c_request():
    return handle_code_request('temp.c', ['gcc', 'temp.c', '-o', 'temp'], ['./temp'], extra_files=['temp'])

@app.route('/python', methods=['POST'])
def handle_python_request():
    return handle_code_request('temp.py', [], ['python3', 'temp.py'])

@app.route('/javascript', methods=['POST'])
def handle_javascript_request():
    return handle_code_request('temp.js', [], ['node', 'temp.js'])

@app.route('/prompt', methods=['POST'])
def handle_prompt_request():
    data = request.get_json()
    
    if 'prompt' not in data:
        return jsonify({"error": "Invalid input data"}), 400
    
    prompt = data['prompt']
    # Load environment variables from .env file
    load_dotenv()

    app_id = os.getenv("APP_ID")
    if not app_id:
        return jsonify({"error": "Missing app ID"}), 500
    url = f"http://api.wolframalpha.com/v1/result?i={prompt}&appid={app_id}"
    
    try:
        response = requests.get(url)
        if response.status_code == 200:
            result = response.text.strip()
            return jsonify({"result": result})
        else:
            return jsonify({"error": "Failed to get result from Wolfram Alpha"}), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)