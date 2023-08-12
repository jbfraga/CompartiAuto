from flask import Flask, render_template

app = Flask(__name__,template_folder="frontend")
app.secret_key = "asbdiusban"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/login")
def login():
    return render_template("login.html")


@app.route("/tela1")
def tela1():
    return render_template("tela1.html")

app.run(debug=True, host="0.0.0.0", port=80)
