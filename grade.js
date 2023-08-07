function calculateGrade(mark) {
    if (mark >= 91 && mark <= 100) {
        return "A+";
    } else if (mark >= 81 && mark <= 90) {
        return "A";
    } else if (mark >= 71 && mark <= 80) {
        return "B";
    } else if (mark >= 61 && mark <= 70) {
        return "C";
    } else if (mark >= 50 && mark <= 60) {
        return "D";
    } else {
        return "F";
    }
}

function calculatePassFail(mark) {
    return mark >= 50 ? "Pass" : "Fail";
}

function showWelcomeMessage() {
    let name = prompt("Enter your name:");
    if (name === null) {
        return; 
    }

    let markInput = prompt("Welcome, " + name + "! Please enter your mark:");
    if (markInput === null) {
        return; 
    }

    let mark = parseInt(markInput);
    if (isNaN(mark)) {
        mark = Math.floor(parseFloat(markInput));
    }

    let grade = calculateGrade(mark);
    let result = calculatePassFail(mark);

    alert("Result for " + name + ": " + grade + " (" + result + ")");
}


showWelcomeMessage();
