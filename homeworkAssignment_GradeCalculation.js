// Assignment Details:
// Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement
// to assess score ranges.

// Assignment Requirements:
// 1. Create a function that takes a student's score as a parameter.
// 2. Declare and initialize the variable.
// 3. Use `switch` statement inside the function.
// 4. Return the corresponding grade.
// 5. Call the function and print the result

function studentGrade (studentScore){
        switch (true) {
        case (studentScore<=59):
            console.log("Grade F");
            break;
        case ((studentScore>=60)&&(studentScore<=69)):
            console.log("Grade D");
            break;
        case ((studentScore>=70)&&(studentScore<=79)):
            console.log("Grade C");
            break;
        case ((studentScore>=80)&&(studentScore<=89)):
            console.log("Grade B");
            break;
        default:
            console.log("Grade A")
            break;
    }
}
studentGrade(90);