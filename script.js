```javascript
const daysGrid = document.getElementById("daysGrid");


// =========================================
// LOAD SAVED DAYS
// =========================================

let completedDays = JSON.parse(
    localStorage.getItem("90DayChallengeCompleted")
) || [];



// =========================================
// CREATE 90 BOXES
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



    // ALREADY COMPLETED
    if (completedDays.includes(day)) {

        dayBox.classList.add("completed");

    }



    // CLICK TO CHECK / UNCHECK
    dayBox.addEventListener(
        "click",
        function () {

            toggleDay(day, dayBox);

        }
    );



    daysGrid.appendChild(dayBox);

}



// =========================================
// TOGGLE DAY
// =========================================

function toggleDay(day, element) {

    const index = completedDays.indexOf(day);


    // =====================================
    // IF ALREADY COMPLETED → UNCHECK
    // =====================================

    if (index !== -1) {

        completedDays.splice(index, 1);

        element.classList.remove("completed");

    }


    // =====================================
    // IF NOT COMPLETED → CHECK
    // =====================================

    else {

        completeDay(day, element);

        return;

    }


    // =====================================
    // SAVE AFTER UNCHECK
    // =====================================

    localStorage.setItem(
        "90DayChallengeCompleted",
        JSON.stringify(completedDays)
    );

}



// =========================================
// COMPLETE DAY
// =========================================

function completeDay(day, element) {

    // Add day
    completedDays.push(day);


    // Keep days in order
    completedDays.sort(
        (a, b) => a - b
    );


    // Add completed style
    element.classList.add("completed");


    // SAVE
    localStorage.setItem(
        "90DayChallengeCompleted",
        JSON.stringify(completedDays)
    );



    // ALL 90 COMPLETED
    if (completedDays.length === 90) {

        setTimeout(
            function () {

                alert(
                    "🎉 Congratulations! You completed all 90 days!"
                );

            },
            150
        );

    }

}
```
