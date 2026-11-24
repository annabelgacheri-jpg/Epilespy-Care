
from flask import Flask, render_template

# Create the Flask application
app = Flask(__name__)

# Home page
@app.route("/")
def home():
    return render_template("index.html")
# Patient dashboard
@app.route("/patient")
def patient():
    return render_template("patient.html")
# Doctor dashboard
@app.route("/doctor")
def doctor():
    return render_template("doctor.html")
# Caregiver dashboard
@app.route("/caregiver")
def caregiver():
    return render_template("caregiver.html")
# System Administrator dashboard
@app.route("/admin")
def admin():
    return render_template("admin.html")
# Run the application
if __name__ == "__main__":
    app.run(debug=True)
