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



    // CLICK ONLY IF NOT ALREADY COMPLETED
    dayBox.addEventListener(
        "click",
        function () {

            // Once completed, it cannot be unchecked
            if (completedDays.includes(day)) {

                return;

            }


            completeDay(day, dayBox);

        }
    );



    daysGrid.appendChild(dayBox);

}



// =========================================
// COMPLETE DAY
// =========================================

function completeDay(day, element) {

    // Add day permanently
    completedDays.push(day);


    // Keep days in order
    completedDays.sort(
        (a, b) => a - b
    );


    // Add completed style
    element.classList.add("completed");


    // SAVE PERMANENTLY
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