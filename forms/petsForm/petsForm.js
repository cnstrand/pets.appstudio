
let petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"];
let withMarmaduke = petNames.push("Marmaduke")
console.log(petNames.length)

// remove Vinny from the array
let pos = 5
let removeVinny = petNames.splice(pos, 1)
console.log("The action taken was: remove Vinny.")
console.log("The udpated array is: " + petNames)

// remove Marty from the array
let pos2 = 3
let removeMarty = petNames.splice(pos2, 1)
console.log("The action taken was: remove Marty.")
console.log("The udpated array is: " + petNames)

// add Nancy to the beginning of an array
let addNancy = petNames.unshift('Nancy') 
console.log("The action taken was: add Nancy.")
console.log("The udpated array is: " + petNames)

// add user name to the end of the array
let userName = prompt ("Enter your name.")
let addUserName = petNames.push(userName)
console.log("The action taken was: add " + userName + ".")
console.log("The udpated array is: " + petNames)

// tell the user index of "Riley"
let pos3 = petNames.indexOf('Riley')
console.log("The action taken was: get index of 'Riley'.")
console.log("The index of 'Riley' is: " + pos3)

//tell the index of "Cindy"
let pos4 = petNames.indexOf('Cindy')
console.log("The action taken was: get index of 'Cindy'.")
console.log("The index of 'Cindy' is: " + pos4)

console.log("The 'withMarmaduke' array data is:" + petNames)

// scenario AB 

// use the .shift() array method and output the results
let shift = petNames.shift() 
console.log("The action taken was: remove the first item of the array")
console.log("The udpated array is: " + petNames)

// use the unshift() to add Barney to the petNames array
let unshift = petNames.unshift('Barney') 
console.log("The action taken was: add Barney to the front of the array")
console.log("The udpated array is: " + petNames)

//add the pet names to the end of of petNames array and call it a new array allPets. 
let allPets = petNames.push(["Ted", "Fred", "Ned", "Ed", "Zed"])
console.log("The action taken was: add 'Ted', 'Fred', 'Ned', 'Ed', 'Zed'")
console.log("The udpated array is: " + petNames)

//create stringPets to hold pet names separated by commas
let stringPets = petNames.join(",")
console.log("The action taken was: join petNames using a comma")
console.log("The udpated array is: " + petNames)

//use unshift to add Agnes to petNames
let unshift2 = petNames.unshift('Agnes') 
console.log("The action taken was: add Agnes to the front of the array")
console.log("The udpated array is: " + petNames)






