// Code your solution here
function findMatching(drivers,nameofDriver){
   return drivers.filter((driver)=>driver.toLowerCase()===nameofDriver.toLowerCase())
}

// console.log(findMatching(["Stella" ,"Margy"], "stella"))

function fuzzyMatch(drivers , characters){
    const len=characters.length;
    return drivers.filter((driver)=>driver.startsWith(characters))
}

// console.log(fuzzyMatch(["Stella", "Margy", "Oloo"], "Mar"))

function matchName(drivers , name){
    return drivers.filter((driver)=>driver.name===name)

}