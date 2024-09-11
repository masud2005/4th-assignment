
// Problem-3 solution

function checkDigitsInName(name) {
    if(typeof name !== "string"){
        return "Invalid Input";
    }

    const perCharacter = name.split("");
    for(let i = 0; i <= perCharacter.length; i++){
        if(isNaN(perCharacter[i]) === false){
            return true;
        }
    }
    return false;
}

console.log(checkDigitsInName("Raj123"));
console.log(checkDigitsInName("n9ayeem"));
console.log(checkDigitsInName("e1mu3"));
console.log(checkDigitsInName("Suman"));
console.log(checkDigitsInName("Name2024"));
console.log(checkDigitsInName("!@#"));
console.log(checkDigitsInName(["Raj"]));
