// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  let employees = [];
  let continueAddingEmployees = true;
//Loop For Adding More Employees
  while (continueAddingEmployees) {
    let firstName = window.prompt('Enter First Name:');
    let lastName = window.prompt('Enter Last Name:');
    let salary = parseInt(window.prompt('Enter Salary:'));
      
  
//Sends the First Name, Last Name, And Salary to the employee functiom
    let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };
//Pushing to the empoloyee Array
    employees.push(employee);
//Asks if they want to continue the loop of adding employees
    let continueInput = window.confirm('Do you want to add another employee');
    
//If False we stop the loop and return the loop objects to the array    
    if (!continueInput) {
      continueAddingEmployees = false;
    }
  }
  return employees;
 
};

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let total = 0;

  for (let i = 0; i < employeesArray.length; i++) {
    total += employeesArray[i].salary;
  }

  const average = total / employeesArray.length;
  console.log(`Average Salary: ${average.toFixed(2)}`);
};

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomEmployee = employeesArray [(Math.random () * employeesArray.length).toFixed(0)]

  console.log (`Random Emloyee: ${randomEmployee.firstName} `);
};



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort((a,b) => {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

