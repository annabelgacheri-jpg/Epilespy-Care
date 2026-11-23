// ======================================
// EPILEPSY CARE SYSTEM
// Main JavaScript File
// ======================================
console.log("Epilepsy Care JavaScript is connected successfully!");

 
// ======================================
// MEDICATION MANAGEMENT
// ======================================

const medicationForm = document.getElementById("medicationForm");

const medicationStorageKey = "epilepsyCareMedications";

// Get saved medication records
function getMedications() {

    try {
        return JSON.parse(
            localStorage.getItem(medicationStorageKey) || "[]"
        );
    } catch (error) {
        return [];
    }

}

// Display medication records in the table

// ======================================
// COMMON LOGIN FORM VALIDATION
// ======================================

const mainLoginForm = document.getElementById("mainLoginForm");

if (mainLoginForm) {

    mainLoginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Please enter your email address and password.");
            return;
        }

        if (!mainLoginForm.checkValidity()) {
            mainLoginForm.reportValidity();
            return;
        }

        alert("Your details have been entered. Login authentication will be connected to the database.");

    });

}


function displayMedications() {

    const medications = getMedications();

    const medicationTableBody =
        document.getElementById("medicationTableBody");

    if (medicationTableBody) {

        medicationTableBody.innerHTML = "";

        if (medications.length === 0) {

            medicationTableBody.innerHTML = `
                <tr>
                    <td colspan="6" class="empty-message">
                        No medication has been added yet.
                    </td>
                </tr>
            `;

        } else {

            medications.forEach(function(medication, index) {

                const row = document.createElement("tr");

                const details = [
                    medication.name,
                    medication.dosage,
                    medication.frequency,
                    medication.time,
                    "Scheduled"
                ];

                details.forEach(function(detail) {

                    const cell = document.createElement("td");
                    cell.textContent = detail;
                    row.appendChild(cell);

                });

                const actionCell = document.createElement("td");

                const deleteButton = document.createElement("button");

                deleteButton.textContent = "Delete";
                deleteButton.type = "button";
                deleteButton.className = "delete-medication-btn";
                deleteButton.dataset.index = index;

                actionCell.appendChild(deleteButton);
                row.appendChild(actionCell);

                medicationTableBody.appendChild(row);

            });

        }

        // DELETE MEDICATION
        medicationTableBody.onclick = function(event) {

            const button = event.target.closest(
                ".delete-medication-btn"
            );

            if (!button) {
                return;
            }

            const index = Number(button.dataset.index);

            if (confirm("Are you sure you want to delete this medication?")) {

                const updatedMedications = getMedications();

                updatedMedications.splice(index, 1);

                localStorage.setItem(
                    medicationStorageKey,
                    JSON.stringify(updatedMedications)
                );

                displayMedications();

                alert("Medication deleted successfully!");

            }

        };

    }

}

       


// Save a new medication
if (medicationForm) {

    medicationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const medication = {

            name: document.getElementById("medication-name").value.trim(),

            dosage: document.getElementById("dosage").value.trim(),

            frequency: document.getElementById("frequency").value,

            time: document.getElementById("time").value,

            startDate: document.getElementById("start-date").value,

            notes: document.getElementById("notes").value.trim()

        };

        const medications = getMedications();

        medications.push(medication);

        localStorage.setItem(
            medicationStorageKey,
            JSON.stringify(medications)
        );

        alert("Medication added successfully!");

        medicationForm.reset();

        displayMedications();

    });

}

// Display saved medication when the page opens
displayMedications();

 // ======================================
 // PATIENT DASHBOARD MEDICATION DISPLAY
 // ======================================

const dashboardMedicationBody =
    document.getElementById("dashboardMedicationBody");

if (dashboardMedicationBody) {

    const medications = getMedications();

    dashboardMedicationBody.innerHTML = "";

    if (medications.length === 0) {

        dashboardMedicationBody.innerHTML = `
            <tr>
                <td colspan="3" class="empty-message">
                    No medication schedule has been added yet.
                </td>
            </tr>
        `;

    } else {

        medications.forEach(function(medication) {

            const row = document.createElement("tr");

            const nameCell = document.createElement("td");
            nameCell.textContent = medication.name;

            const timeCell = document.createElement("td");
            timeCell.textContent = medication.time;

            const statusCell = document.createElement("td");
            statusCell.textContent = "Scheduled";

            row.appendChild(nameCell);
            row.appendChild(timeCell);
            row.appendChild(statusCell);

            dashboardMedicationBody.appendChild(row);

        });

    }

}
