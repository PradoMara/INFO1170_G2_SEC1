from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "¡Hola, Flask!"

if __name__ == '__main__':
    app.run(debug=True)
