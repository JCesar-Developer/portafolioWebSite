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

window.addEventListener('load', (event) =>{

    const isSuccessfull = document.URL.includes('msg200');

    if ( isSuccessfull ){
        alert("The email successfully sent");
    }

});