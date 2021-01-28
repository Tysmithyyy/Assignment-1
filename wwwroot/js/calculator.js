



var form = $("calculator");
function handleForm(event) { event.preventDefault(); }
$('#submit').click ( function () {
    //get form values
    var assignments = $("#assignments").val();
    if (assignments < 100 || assignments > 0) {
        var groupProject = $("#groupproject").val();
        if (groupProject < 100 || groupProject > 0) {
            var quizzes = $("#quizzes").val();
            if (quizzes < 100 || quizzes > 0) {
                var exams = $("#exams").val();
                if (exams < 100 || exams > 0) {
                    var intex = $("#intex").val();
                    if (intex < 100 || intex > 0) {
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

                        $("#gradeoutput").html(gradeOutput);
                    elif
})