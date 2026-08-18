function calculateTotal(marks) {
    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    return total;
}

function calculateAverage(total) {
    return total / 5;
}

function calculateGrade(average) {
    if (average >= 90) {
        return "A+";
    } else if (average >= 80) {
        return "A";
    } else if (average >= 70) {
        return "B";
    } else if (average >= 60) {
        return "C";
    } else if (average >= 50) {
        return "D";
    } else {
        return "F";
    }
}

function checkResult(marks) {
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < 40) {
            return "Fail";
        }
    }

    return "Pass";
}

function calculateResult() {

    let name = document.getElementById("studentName").value.trim();

    if (name === "") {
        alert("Please enter the student name.");
        return;
    }

    let marks = [
        Number(document.getElementById("subject1").value),
        Number(document.getElementById("subject2").value),
        Number(document.getElementById("subject3").value),
        Number(document.getElementById("subject4").value),
        Number(document.getElementById("subject5").value)
    ];

    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < 0 || marks[i] > 100 || isNaN(marks[i])) {
            alert("Please enter valid marks between 0 and 100.");
            return;
        }
    }

    let total = calculateTotal(marks);
    let average = calculateAverage(total);
    let grade = calculateGrade(average);
    let status = checkResult(marks);

    document.getElementById("resultName").textContent = name;
    document.getElementById("total").textContent = total;
    document.getElementById("average").textContent = average.toFixed(2);
    document.getElementById("grade").textContent = grade;
    document.getElementById("status").textContent = status;

    if (status === "Pass") {
        document.getElementById("status").style.color = "green";
    } else {
        document.getElementById("status").style.color = "red";
    }
}

function resetResult() {

    document.getElementById("studentName").value = "";

    document.getElementById("subject1").value = "";
    document.getElementById("subject2").value = "";
    document.getElementById("subject3").value = "";
    document.getElementById("subject4").value = "";
    document.getElementById("subject5").value = "";

    document.getElementById("resultName").textContent = "-";
    document.getElementById("total").textContent = "-";
    document.getElementById("average").textContent = "-";
    document.getElementById("grade").textContent = "-";
    document.getElementById("status").textContent = "-";
}