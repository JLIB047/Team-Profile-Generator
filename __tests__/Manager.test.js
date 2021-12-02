const Manager = require('../lib/Manager');

test ('creates manager object', () => {
    const manager = new Manager('Jay', 111, 'jay@me.com', 2);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test ('gets role of employee', () => {
    const manager = new Manager('Jay', 111, 'jay@me.com', 2);

    expect(manager.getRole()).toEqual('Manager');
})