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
    try:
        result = subprocess.run(['./temp'], stdout=subprocess.PIPE)
    except:
        # if we get error, return that too
        if result.returncode != 0:
            return {
                "data": result.stderr.decode('utf-8')
            }

    # delete the temp.c and temp file
    import os
    os.remove('temp.c')
    os.remove('temp')

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
    try:
        result = subprocess.run(['python3', 'temp.py'], stdout=subprocess.PIPE)
    except:
        # if we get error, return that too
        if result.returncode != 0:
            return {
                "data": result.stderr.decode('utf-8')
            }

    # delete the temp.py file
    import os
    os.remove('temp.py')

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
    try:
        result = subprocess.run(['node', 'temp.js'], stdout=subprocess.PIPE)
    except:
        # if we get error, return that too
        if result.returncode != 0:
            return {
                "data": result.stderr.decode('utf-8')
            }


    # delete the temp.js file
    import os
    os.remove('temp.js')

    return {
        "data": result.stdout.decode('utf-8')
    }

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)
