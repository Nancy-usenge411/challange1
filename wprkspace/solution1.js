function calculateGrades(){
    // prompt students for marks
    const marks = prompt("enter student\'s marks")
    const studentsMarks = parseInt(marks)
    if (studentsMarks===null || ""){
        alert("please enter a value")
        // check if marks are between 0-100
    }else if(studentsMarks < 0 || studentsMarks >100){
        alert("please enter a value less than 100")
        // check in for grade
    }else if (studentsMarks >79){
        console.log ("A")
    }else if (studentsMarks >=60 || studentsMarks <=79){
        console.log ("B")
    }else if (studentsMarks >49 || studentsMarks<=59){
        console.log ("c")
    }else if (studentsMarks >=40 || studentsMarks<=49){
        console.log ("D")
    }else {
        console.log ("E")
    }
}