const Intern = require('../lib/Intern');

test ('creates an intern object', () => {
    const intern = new Intern('Harry', 1092, 'harry@me.com', 'SHU');

    expect(intern.school).toEqual(expect.any(String));
});

test ('creates a school value', () => {
    const intern = new Intern('Harry', 1092, 'harry@me.com', 'SHU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test ('gets employee role', () => {
    const intern = new Intern('Harry', 1092, 'harry@me.com', 'SHU');

    expect(intern.getRole()).toEqual("Intern");
});