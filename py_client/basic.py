import requests

endpoint = "http://localhost:8000/api/"

get_response = requests.post(endpoint, json={"title": "abc", "content": "Hello World",
"price": "abc1234"})
print(get_response.json())