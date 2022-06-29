/**
 * Returns the index of an "Element" inside of a list of Elements 
 * @params 
 * @params  
 */
 const getIndexById = (element, nodeList) => {
    const idToSearch = element.id;
    const listOfElemens = Array.from( nodeList );

    return listOfElemens.findIndex(elem => elem.id == idToSearch) 

}

/**
 * Shows a modal message that says (UNDER CONSTRUCTION) and a close button. 
 */
 const showDisabledMsg = (event) => {
    alert("Sorry! This link is not available at this time.");
}

/**
 * 
 * @param {*} idTag 
 */
const openTag = (idTag) => {

    fetch('./json/soft-skills.json')
        .then(response => response.json())
        .then(data => {
            
            data.forEach(element => {
                if ( element.id == idTag ) {
                    const softSkillTitle    = element.title;
                    const softSkillContent  = element.content

                    document.querySelector("#expectations #soft-skill-title").innerHTML = softSkillTitle;
                    document.querySelector("#expectations #soft-skill-content").innerHTML = softSkillContent;
                }
            });

        })
}

console.log(document.URL);
// function onHandle(){
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value; 
//     const agreement = document.getElementById("agreement").value;
//     const role = document.getElementById("role").value;
//     const details = document.getElementById("details").value;

//     console.log(
//         name, '\n',
//         email, '\n',
//         agreement, '\n',
//         role, '\n',
//         details, '\n',
//     )

// }

/** Send a email message with the next form:  
    SUBJETC: acuerdo - tipo de contrato
    FROM: nombre
    EMAIL: email
    ACUERDO: acuerdo
    ROL: rol
    DETAILS OF THE OFFER:
*/
// function sendEmail(){
//     Email.send({
//         SecureToken : "979cfd88-dd1f-4732-9873-55cb924dfe9f",
//         // Host : "smtp.gmail.com",
//         // Username : "julioasto.92@gmail.com",
//         // Password : "JuLi0.CeSaR",
//         To : "julioasto.92@gmail.com",
//         From : "you@isp.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then((success) => {
//         alert("The email successfully sent")
//     }).catch((error) => {
//         alert(error);
//     });
// }