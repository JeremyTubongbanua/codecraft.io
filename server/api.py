from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/c', methods=['POST'])
def handle_c_request():
    data = request.get_json()
    # we're going to receive a json body like this
    # {
    #     "data": [
    #         "hi",
    #         "123"
    #     ]
    # }
    # put it into a temp.c file

    with open('temp.c', 'w') as f:
        for line in data['data']:
            f.write(line + '\n')

    # compile the file
    import subprocess
    subprocess.run(['gcc', 'temp.c', '-o', 'temp'])

    # run the file
    result = subprocess.run(['./temp'], stdout=subprocess.PIPE)

    # return json response like this:
    # {
    #    "data": "hi\n123\n"
    # }
    return {
        "data": result.stdout.decode('utf-8')
    }


@app.route('/python', methods=['POST'])
def handle_python_request():
    data = request.get_json()

    with open('temp.py', 'w') as f:
        for line in data['data']:
            f.write(line + '\n')

    import subprocess
    result = subprocess.run(['python3', 'temp.py'], stdout=subprocess.PIPE)

    return {
        "data": result.stdout.decode('utf-8')
    }

@app.route('/javascript', methods=['POST'])
def handle_javascript_request():
    data = request.get_json()

    with open('temp.js', 'w') as f:
        for line in data['data']:
            f.write(line + '\n')

    import subprocess
    result = subprocess.run(['node', 'temp.js'], stdout=subprocess.PIPE)

    return {
        "data": result.stdout.decode('utf-8')
    }

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)
