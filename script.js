```javascript
const daysGrid = document.getElementById("daysGrid");

// =========================================
// LOAD SAVED DAYS
// =========================================

let completedDays = JSON.parse(
    localStorage.getItem("90DayChallengeCompleted")
) || [];


// =========================================
// CREATE 90 DAY BOXES
// =========================================

for (let day = 1; day <= 90; day++) {

    const dayBox = document.createElement("div");

    dayBox.className = "day";

    dayBox.dataset.day = day;


    // DAY NUMBER
    const dayNumber = document.createElement("span");

    dayNumber.className = "day-number";

    dayNumber.textContent = day;

    dayBox.appendChild(dayNumber);


    // CHECK SAVED COMPLETED DAYS
    if (completedDays.includes(day)) {

        dayBox.classList.add("completed");

    }


    // CLICK EVENT
    dayBox.addEventListener("click", function () {

        toggleDay(day, dayBox);

    });


    daysGrid.appendChild(dayBox);
}


// =========================================
// TOGGLE DAY
// =========================================

function toggleDay(day, element) {

    const index = completedDays.indexOf(day);


    // =====================================
    // ALREADY COMPLETED → UNCHECK
    // =====================================

    if (index !== -1) {

        completedDays.splice(index, 1);

        element.classList.remove("completed");

    }


    // =====================================
    // NOT COMPLETED → CHECK
    // =====================================

    else {

        completedDays.push(day);

        completedDays.sort(function (a, b) {

            return a - b;

        });

        element.classList.add("completed");

    }


    // =====================================
    // SAVE TO LOCAL STORAGE
    // =====================================

    localStorage.setItem(
        "90DayChallengeCompleted",
        JSON.stringify(completedDays)
    );


    // =====================================
    // ALL 90 DAYS COMPLETED
    // =====================================

    if (completedDays.length === 90) {

        setTimeout(function () {

            alert(
                "🎉 Congratulations! You completed all 90 days!"
            );

        }, 150);

    }

}

