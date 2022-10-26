// console.log('the script tag works');

// let fullName = "Aditi Pandey";
// console.log(`The variable is fullName ${fullName}`);
// console.log(typeof fullName);

// let space = fullName.indexOf(' '); //position number starts from 0
// console.log(space);

// let firstName = fullName.substring(0, space);
// console.log(firstName);

// let lastName = fullName.substring(space + 1);
// console.log(lastName);

function parseAndDisplayName(name) {
    let space = name.indexOf(' ');
    let firstName = name.substring(0, space);
    let lastName = name.substring(space + 1);
    console.log(firstName, lastName, name );
    
}
parseAndDisplayName('Kinshuk Tiwari');









// function parseAndDisplayName() {
//     let fullName = "Aditi Pandey";
//     let space = fullName.indexOf(' ');
//     let firstName = fullName.substring(0, space);
//     let lastName = fullName.substring(space + 1);
// }
// parseAndDisplayName();


