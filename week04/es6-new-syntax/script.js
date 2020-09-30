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

//4. exercise
//the hip way:
let getNameAndCountry = ({ name, country }) => [name, country];
//the Marty McFly way:
function getNameAndCountry(city) {
    return [city.name, city.country];
}

//the hip way
let getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
    let [, country] = getNameAndCountry(city2);
    return {
        ...city1,
        country,
    };
};

//the Marty McFly way:
function getRelocatedCity(city1, city2) {
    if (!city2) {
        city1.country = "Germany";
    } else {
        city1.country = getNameAndCountry(city2)[1];
    }
    return city1;
}
