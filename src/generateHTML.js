//create Manager card 
const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div> 
            <div class="card-body">
                <p class="id"> ID: ${manager.id}</p>
                <p class="email"> Email: <a href="mailto:${manager.email}">${manager.email}</p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>

        </div>
    </div>
    `;
}
//create engineer card
const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div> 
            <div class="card-body">
                <p class="id"> ID: ${engineer.id}</p>
                <p class="email"> Email: <a href="mailto:${engineer.email}">${engineer.email}</p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}>${engineer.github}</p>
            </div>

        </div>
    </div>
    `;
}
//create Intern card 
const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div> 
            <div class="card-body">
                <p class="id"> ID: ${intern.id}</p>
                <p class="email"> Email: <a href="mailto:${intern.email}">${intern.email}</p>
                <p class="school">School: ${intern.school}</p>
            </div>

        </div>
    </div>
    `
};

//push array html page 
generateHTML = (data) => {

    //array for cards 
    pageArray = [];

    for (let i = 0; i < data.length; i ++){
        const employee = data[i];
        const role = employee.getRole();

        //call manager ()
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }
        //call engineer ()
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }
        //call intern ()
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
    }

    const employeeCards = pageArray.join('')

    const generateTeam = generateTeamProfile(employeeCards);
    return generateTeam;

}

// const generateHTML();
// push in to HTML page 
// create an array 
// create HTML template 