var form = document.getElementById("calculator");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

var submit = document.getElementById("submit");

submit.addEventListener("click", function () {
    //get form values
    var assignments = document.getElementById("assignments").value;
    var groupProject = document.getElementById("groupproject").value;
    var quizzes = document.getElementById("quizzes").value;
    var exams = document.getElementById("exams").value;
    var intex = document.getElementById("intex").value;

    //form calculations and define output variables
    var gradePercent = (assignments * .5) + (groupProject * .1) + (quizzes * .1) + (exams * .2) + (intex * .1);

    //determine letter grade
    var gradeOutputLetter = "E";

    if (gradePercent >= 94) {
        gradeOutputLetter = "A";
    } else if (gradePercent >= 90) {
        gradeOutputLetter = "A-";
    } else if (gradePercent >= 87) {
        gradeOutputLetter = "B+";
    } else if (gradePercent >= 84) {
        gradeOutputLetter = "B";
    } else if (gradePercent >= 80) {
        gradeOutputLetter = "B-";
    } else if (gradePercent >= 77) {
        gradeOutputLetter = "C+";
    } else if (gradePercent >= 74) {
        gradeOutputLetter = "C";
    } else if (gradePercent >= 70) {
        gradeOutputLetter = "C-";
    } else if (gradePercent >= 67) {
        gradeOutputLetter = "D+";
    } else if (gradePercent >= 64) {
        gradeOutputLetter = "D";
    } else if (gradePercent >= 60) {
        gradeOutputLetter = "D-";
    } else {
        gradeOutputLetter = "E";
    }

    //format outputNum for string
    var gradeOutputNum = String(gradePercent) + "%";

    //put together output variables
    var gradeOutput = "Your final grade is an " + gradeOutputLetter + " with a of " + gradeOutputNum + ".";

    document.getElementById("gradeoutput").innerHTML = gradeOutput;
})