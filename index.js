function introduction(name){
    return name;
}
console.log(`Hi my name is ${name}.`);
function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);
  }

  function introductionWithLanguage(name, language) {
    console.log(`Hi my name is ${name} and i am learning to program n ${language}.`);
  }


  function introductionWithLanguageOptional(name, language = "Javascript") {
    console.log(`Hi my name is ${name} and i am learning to program n ${language}.`);
  }