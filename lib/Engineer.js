const Employee = require('../lib/Employee');

class Engineer extends Employee{
    constructor(name, id, email, username){
        super (name, id, email)

        this.username = username;
    }

    getGithub(){
        return this.username;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer 