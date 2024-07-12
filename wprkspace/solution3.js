function netSalary() {
    // Prompt the user for input
    let salary = parseInt(prompt("Enter salary"));
    let benefits = parseInt(prompt("Enter benefits"));
    let yearOfTaxation = parseInt(prompt("Enter year of taxation"));

    // Check if entered values are valid and in the correct format
    if (isNaN(salary) || isNaN(benefits) || isNaN(yearOfTaxation) ||
        salary <= 0 || benefits <= 0 || yearOfTaxation <= 0) {
        alert("Please enter valid numeric values greater than zero.");
        return;
    }

    // Check if year of taxation is 2023 or later
    if (yearOfTaxation >= 2023) {
        let typeOfTax = prompt("Monthly or yearly").toLowerCase();

        if (typeOfTax === "monthly") {
            calculatePayeeMonthlyTwoThree(salary);
            calculateNhifDeduction(benefits);
            nssfDeduction(salary)
        } else if (typeOfTax === "yearly") {
            calculatePayeeYearlyTwoThree(salary);
            calculateNhifDeduction(benefits);
            nssfDeduction(salary)
        } else {
            alert("Invalid input for tax type.");
            return;
        }
    } else if (yearOfTaxation < 2023 && yearOfTaxation > 2021) {
        let typeOfTax = prompt("Monthly or yearly").toLowerCase();

        if (typeOfTax === "monthly") {
            calculatePayeeMonthlyTwoOne(salary);
            calculateNhifDeduction(benefits);
            nssfDeduction(salary)
        } else if (typeOfTax === "yearly") {
            calculatePayeeYearlyTwoOne(salary);
            calculateNhifDeduction(benefits);
            nssfDeduction(salary);
        } else {
            alert("Invalid input for tax type.");
            return;
        }
    } else {
        alert("Invalid year of taxation.");
        return;
    }
}

// Function to calculate monthly PAYE for taxation years >= 2023
function calculatePayeeMonthlyTwoThree(salary) {
    let payee = 0;

    if (salary <= 24000) {
        payee = salary * 0.1;
    } else if (salary <= 32333) {
        payee = salary * 0.25;
    } else if (salary <= 500000) {
        payee = salary * 0.03;
    } else if (salary <= 800000) {
        payee = salary * 0.325;
    } else {
        payee = salary * 0.35;
    }

    console.log(`Monthly PAYE (Tax): ${payee}`);
}

// Function to calculate yearly PAYE for taxation years >= 2023
function calculatePayeeYearlyTwoThree(salary) {
    let payee = 0;

    if (salary <= 288000) {
        payee = salary * 0.1;
    } else if (salary <= 388000) {
        payee = salary * 0.25;
    } else if (salary <= 6000000) {
        payee = salary * 0.03;
    } else if (salary <= 9600000) {
        payee = salary * 0.325;
    } else {
        payee = salary * 0.35;
    }

    console.log(`Yearly PAYE (Tax): ${payee}`);
}

// Function to calculate monthly PAYE for taxation years < 2023
function calculatePayeeMonthlyTwoOne(salary) {
    let tax = 0;

    if (salary <= 24000) {
        tax = salary * 0.1;
    } else if (salary <= 32333) {
        tax = (salary * 0.25);
    } else {
        tax = (salary * 0.3);
    }

    console.log(`Monthly PAYE (Tax): ${tax}`);
    return tax;
}

// Function to calculate yearly PAYE for taxation years < 2023
function calculatePayeeYearlyTwoOne(salary) {
    let tax = 0;

    if (salary <= 288000) {
        tax = salary * 0.1;
    } else if (salary <= 388000) {
        tax = (salary * 0.25);
    } else {
        tax = (salary * 0.3);
    }

    console.log(`Yearly PAYE (Tax): ${tax}`);
    return tax;
}

// Function to calculate NHIF deduction based on benefits
function calculateNhifDeduction(benefits) {
    let deduction = 0;

    if (benefits <= 5999) {
        deduction = 150;
    } else if (benefits <= 7999) {
        deduction = 300;
    } else if (benefits <= 11999) {
        deduction = 400;
    } else if (benefits <= 14999) {
        deduction = 500;
    } else if (benefits <= 19999) {
        deduction = 600;
    } else if (benefits <= 24999) {
        deduction = 750;
    } else if (benefits <= 29999) {
        deduction = 850;
    } else if (benefits <= 34999) {
        deduction = 900;
    } else if (benefits <= 39999) {
        deduction = 950;
    } else if (benefits <= 44999) {
        deduction = 1000;
    } else if (benefits <= 49999) {
        deduction = 1100;
    } else if (benefits <= 59999) {
        deduction = 1200;
    } else if (benefits <= 69999) {
        deduction = 1300;
    } else if (benefits <= 79999) {
        deduction = 1400;
    } else if (benefits <= 89999) {
        deduction = 1500;
    } else if (benefits <= 99999) {
        deduction = 1600;
    } else {
        deduction = 1700;
    }

    console.log(`NHIF deduction: ${deduction}`);
    return deduction;
}

function nssfDeduction(salary) {
    
    let deduction=0;
    if (salary <=7000) {
        deduction =  salary * 0.06;
        console.log( `NSSF deduction: ${deduction}`); return;
    } else if (salary> 7000 && salary <= 36000) {
        deduction = salary * 0.06;
        console.log( `NSSF deduction: ${deduction}`); return;
    } else if (salary <=6000){
        deduction = salary* 0.06;
        console.log( `NSSF deduction: ${deduction}`); return;
    }else if (salary > 6000 && salary < 18000 ){
        deduction = salary * 0.06;
        console.log( `NSSF deduction: ${deduction}`); return;
    }else {
        console.log("NSSF deduction: 0");
        return;
    }
}