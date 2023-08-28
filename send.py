import requests
import random
import string

url = "http://172.18.0.170:10362/create_file"

def generate_random_string(length):
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(length))

file_path = generate_random_string(16) + ".html"
file_content = """
<!DOCTYPE html>
<html>
<head>
    <title>Generated Page</title>
</head>
<body>
    <h1>Welcome to the Generated Page!</h1>
</body>
</html>
"""

data = {
    "file_path": file_path,
    "file_content": file_content
}

response = requests.post(url, json=data)

print(response.json())
