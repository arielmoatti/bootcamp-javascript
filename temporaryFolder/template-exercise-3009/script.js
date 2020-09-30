/*
///////////////////////////
///Deconstructing Harray///
///////////////////////////

//1. exercise
function reverseArr(arg) {
    return [...arg].reverse();
}
///OR///
const reverseArr = (arg) => [...arg].reverse();


// 2. exercise

function combineArr(arg1, arg2) {
    return [...arg1, ...arg2];
}
///OR///
const combineArr = (arg1, arg2) => [...arg1, ...arg2];


//3. exercise
function logInfo(city) {
    const { name, country, population: numPeople } = city;
    console.log(`${name} is in ${country} and has ${numPeople} in it.`);
}

logInfo({
    name: "Berlin",
    country: "Germany",
    population: "about 80M people",
});

*/

//4. exercise
//the hip way:
//let getNameAndCountry = ({ name, country }) => [name, country];
//the Marty McFly way:
function getNameAndCountry(city1) {
    return [obj.name, obj.country];
}

var city1 = {
    name: "Frankfurt",
    country: "Germany"
}
var city1 = {
    name: "Berlin"    
}
//the Marty McFly way:
function getRelocatedCity(city1, city2) {
    
    
    if (!city2) {
        getNameAndCountry({ country: "Germany" })
        newCity city2[1] = ;
    }
    return {
        [city1],
        [country],
    };
}

//the hip way
let getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
    let [, country] = getNameAndCountry(city2);
    return {
        ...city1,
        country,
    };
};
