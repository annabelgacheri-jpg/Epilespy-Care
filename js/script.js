// ======================================
// EPILEPSY CARE SYSTEM
// Main JavaScript File
// ======================================
console.log("Epilepsy Care JavaScript is connected successfully!");

// CAREGIVER LOGIN FORM VALIDATION

const caregiverLoginForm = document.getElementById("caregiverLoginForm");

if (caregiverLoginForm) {

    caregiverLoginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Please fill in all the required fields.");
            return;
        }

        if (!caregiverLoginForm.checkValidity()) {
            caregiverLoginForm.reportValidity();
            return;
        }

       window.location.href = "caregiver.html";

    });

}

// PATIENT LOGIN FORM VALIDATION

const patientLoginForm = document.getElementById("patientLoginForm");

if (patientLoginForm) {

    patientLoginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Please fill in all the required fields.");
            return;
        }

        if (!patientLoginForm.checkValidity()) {
            patientLoginForm.reportValidity();
            return;
        }

       window.location.href = "patient.html";
    });

}


// DOCTOR LOGIN FORM VALIDATION

const doctorLoginForm = document.getElementById("doctorLoginForm");

if (doctorLoginForm) {

    doctorLoginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Please fill in all the required fields.");
            return;
        }

        if (!doctorLoginForm.checkValidity()) {
            doctorLoginForm.reportValidity();
            return;
        }

         window.location.href = "doctor.html";

    });

}

// ======================================
// ADMINISTRATOR LOGIN FORM VALIDATION
// ======================================

const adminLoginForm = document.getElementById("adminLoginForm");

if (adminLoginForm) {

    adminLoginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Please fill in all the required fields.");
            return;
        }

        if (!adminLoginForm.checkValidity()) {
            adminLoginForm.reportValidity();
            return;
        }

        window.location.href = "admin.html";
    });

}
