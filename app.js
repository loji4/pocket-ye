document.querySelector('.click-me').addEventListener('click',btn)

function btn (e) {
    // I want 'click for quote to show first'
    fetch ('https://api.kanye.rest')
    .then(response => response.json())
    .then(newjson => {
        // converts Javascript object into a string 
        const dataString = JSON.stringify(newjson)
        const newDataString = dataString.replace('quote',"")
        // USE A FUNCTION TO REMOVE
        document.querySelector('.click-me').innerHTML=newDataString
    })
}
btn ()
// turn the string into an array , remove elements 0-3 and the last array  
// remove indeces
// turn back into a string with join 

//stringify the data? save the data in a variable and stringify the result 
// can i use async await with an event listener function
// async function inside event listener

//tasks: 
// * remove 'quote' word 
// * remove curly braces 
// * make button bigger 
// * change font 
