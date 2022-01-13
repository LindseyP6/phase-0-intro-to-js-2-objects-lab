// Write your solution in this file!
let employee = {
    name: 'Lindsey',
    streetAddress: '1609 8th Street'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}
    newEmployee[key] = value;

    return newEmployee;
}

//mutate the original array to update key/value
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}

//non destructively delete key/value
function deleteFromEmployeeByKey(employee, key) {
    const newObj = { ...employee }
    delete newObj[key];
    return newObj;
}

//destructively delete 
function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key];

    return employee
}