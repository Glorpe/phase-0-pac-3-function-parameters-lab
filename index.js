function introduction(value1) {
   return(`Hi, my name is ${value1}.`);
}

function introductionWithLanguage(value1, value2) {
    return(`Hi, my name is ${value1} and I am learning to program in ${value2}.`);

}

function introductionWithLanguageOptional(value1, value2){
    return(`Hi, my name is ${value1} and I am learning to program in JavaScript.`);
    
    
}

function introductionWithLanguageOptional(value1, value2 = "JavaScript") {
    return(`Hi, my name is ${value1} and I am learning to program in ${value2}.`);

}