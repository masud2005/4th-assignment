
// Problem-4 Solution


function calculateFinalScore(obj) {
    if(typeof obj !== "object" || Array.isArray(obj)){
        return "Invalid Input";
    }

    let totalScore = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily){
        totalScore += 20;
    }
    const finalResult = totalScore >= 80;
    return finalResult;
}
console.log(calculateFinalScore({name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true}));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }));
console.log(calculateFinalScore("hello" ));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }));
console.log(calculateFinalScore([1,23,5,6,4,5]));