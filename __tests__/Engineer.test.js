const Engineer = require('../lib/Engineer');

test ('creates an Engineer object', () => {
    const engineer = new Engineer('Tony', 1423, 'tony@gmail.com', 'Tony123');

    expect(engineer.username).toEqual(expect.any(String));
});

test ('gets engineer github value', () => {
    const engineer = new Engineer('Tony', 1423, 'tony@gmail.com', 'Tony123');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test ('gets employee role', () => {
    const engineer = new Engineer('Tony', 1423, 'tony@gmail.com', 'Tony123');

    expect(engineer.getRole()).toEqual("Engineer");

})