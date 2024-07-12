# challange1
#SOLUTION1

This program contains a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.


The 'calculateGrades' function is designed to compute the average grade for  students based on their scores.The function calculates the average score for each student and returns their average score.Non-numeric scores are ignored.

#SOLUTION2
Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

The 'calculateSpeed' function evaluates the speed of a car and calculates demerit points based on the excess speed over a designated limit. If the speed is within the limit (70 km/h), it prints "Ok". Otherwise, for every 5 km/h above the limit, the function assigns one demerit point and outputs the total demerit points.

speed: A number representing the speed of the car in kilometers per hour (km/h).
If the speed is less than or equal to 70 km/h, it prints "Ok".
If the speed exceeds 70 km/h, it calculates the demerit points based on the excess speed and prints the total demerit points.
The function assumes a speed limit of 70 km/h and assigns one demerit point for every 5 km/h above this limit.
Edge cases, such as negative speeds or non-numeric inputs, are not handled in this simplified implementation.

$SOLUTION3
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

This program calculates an individual's net salary based on their basic salary and benefits. It computes various deductions such as PAYE (tax), NHIF, and NSSF, and then calculates the gross salary and net salary accordingly.
basicSalary: A number representing the individual's basic salary.
benefits: A number representing any additional benefits or allowances received by the individual.

function netSalary()
function calculatePayeeMonthlyTwoThree(salary)
function calculatePayeeYearlyTwoOne(salary) 
function calculatePayeeYearlyTwoOne(salary)
function calculateNhifDeduction(benefits)
function nssfDeduction(salary)