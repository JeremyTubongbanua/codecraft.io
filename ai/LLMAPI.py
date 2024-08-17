import requests

def query_wolfram_alpha(prompt):
    app_id = "DEMO"
    url = f"http://api.wolframalpha.com/v1/result?i={prompt}&appid={app_id}"

    response = requests.get(url)

    if response.status_code == 200:
        return response.text
    else:
        return "Error: Unable to fetch data from Wolfram Alpha"

prompt = input("Enter prompt: ")
result = query_wolfram_alpha(prompt)
print("Answer:", result)