import requests


headers = {'Authorization': 'Bearer cf66b4d6b146cc5818bc165e61214e8faed6e8d2'}

endpoint = "http://localhost:8000/api/products/"

data = {
    "title": "This field exists",
    "price": 32.99
}

get_response = requests.post(endpoint, json=data, headers=headers)
print(get_response.json())