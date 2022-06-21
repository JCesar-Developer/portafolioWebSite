/**
 * FUNCTION: Returns the index of an "Element" inside of a list of Elements 
 * @params 
 * @params  
 */
 function getIndexById(element, nodeList){
    const idToSearch = element.id;
    const listOfElemens = Array.from( nodeList );

    return listOfElemens.findIndex(elem => elem.id == idToSearch) 

}

// JSON - JavaScript Object Notation
const openTag = (idTag) => {

    fetch('./json/soft-skills.json')
        .then(response => response.json())
        .then(data => {
            
            data.forEach(element => {
                if ( element.tag == idTag ) {
                    const softSkillTitle    = element.title;
                    const softSkillContent  = element.content
                    document.querySelector("#expectations #soft-skill-title").innerHTML = softSkillTitle;
                    document.querySelector("#expectations #soft-skill-content").innerHTML = softSkillContent;
                }
            });


        })
}