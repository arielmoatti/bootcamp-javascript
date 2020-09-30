var ff = {
    name: "Frankfurt",
};

var ber = {
    name: "Berlin",
};

// function getNameAndCountry(city1) {
//     return [city1.name, city1.country];
// }
let getNameAndCountry = ({ name, country }) => [name, country];

// console.log(getNameAndCountry(ber));

let getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
    let [, country] = getNameAndCountry(city2);
    return {
        ...city1,
        country,
    };
};
console.log(getRelocatedCity(ber));
