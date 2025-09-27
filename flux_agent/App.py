from flask import Flask, request, jsonify
from flux_agent.core import FX1Flux

app = Flask(__name__)
flux = FX1Flux()

@app.route("/ask", methods=["POST"])
def ask():
    data = request.json
    prompt = data.get("prompt", "")
    response = flux.ask(prompt)
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)
