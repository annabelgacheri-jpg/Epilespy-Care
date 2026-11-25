
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
# Login page
@app.route("/login")
def login():
    return render_template("login.html")
# Patient Login page
@app.route("/patient-login")
def patient_login():
    return render_template("patient-login.html")
# Doctor Login page
@app.route("/doctor-login")
def doctor_login():
    return render_template("doctor-login.html")
# Caregiver Login page
@app.route("/caregiver-login")
def caregiver_login():
    return render_template("caregiver-login.html")
# System Administrator Login page
@app.route("/admin-login")
def admin_login():
    return render_template("admin-login.html")
# Patient History page
@app.route("/history")
def history():
    return render_template("history.html")
# Health Records page
@app.route("/health-records")
def health_records():
    return render_template("health-records.html")
# Medication Management page
@app.route("/medication")
def medication():
    return render_template("medication.html")
# Dose Status page
@app.route("/dose-status")
def dose_status():
    return render_template("dose-status.html")
# Side Effects page
@app.route("/side-effects")
def side_effects():
    return render_template("side-effects.html")
# My Data page
@app.route("/my-data")
def my_data():
    return render_template("my-data.html")
# Shared Summaries page
@app.route("/shared-summaries")
def shared_summaries():
    return render_template("shared-summaries.html")
# Reference Data page
@app.route("/reference-data")
def reference_data():
    return render_template("reference-data.html")
# Manage Accounts page
@app.route("/manage-accounts")
def manage_accounts():
    return render_template("manage-accounts.html")
# Help page
@app.route("/help")
def help_page():
    return render_template("help.html")
# Help Request page
@app.route("/help-requests")
def help_request():
    return render_template("help-requests.html")
# Errors and Usage page
@app.route("/errors-usage")
def errors_usage():
    return render_template("errors-usage.html")
# Doctor Applications page
@app.route("/doctor-applications")
def doctor_applications():
    return render_template("doctor-applications.html")
# Consultation Summaries page
@app.route("/consultation-summaries")
def consultation_summaries():
    return render_template("consultation-summaries.html")
# Consultation page
@app.route("/consultation")
def consultation():
    return render_template("consultation.html")
# Accept Invitation page
@app.route("/accept-invitation")
def accept_invitation():
    return render_template("accept-invitation.html")


# Run the application
if __name__ == "__main__":
    app.run(debug=True)
    