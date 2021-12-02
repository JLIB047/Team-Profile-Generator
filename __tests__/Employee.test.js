const Employee = require('../lib/Employee');

//create employee object 
test('creates an employee object', () => {
    const employee = new Employee('Jay', 1234, 'jay@me.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//gets name from getName()
test('gets employee name', () => {
    const employee = new Employee('Jay', 1234, 'jay@me.com');

    expect(employee.getName()).toEqual(expect.any(String));
})

//get Id from getId(number)
test ('gets employee id number', () => {
    const employee = new Employee('Jay', 1234, 'jay@me.com');

    expect(employee.getId()).toEqual(expect.any(Number));
})


//get email from getEmail()
test ('gets employee email', () => {
    const employee = new Employee('Jay', 1234, 'jay@me.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})


//get role from getRole()
test ('gets employee role', () => {
    const employee = new Employee('Jay', 1234, 'jay@me.com');

    expect(employee.getRole()).toEqual("Employee")
})