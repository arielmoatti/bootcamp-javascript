Handlebars.templates = Handlebars.templates || {};

var templates = document.querySelectorAll(
    'script[type="text/x-handlebars-template"]'
);

Array.prototype.slice.call(templates).forEach(function (script) {
    Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
});

/////////////////////////////

var authorData = {
    authors: [
        {
            name: "Kahlil Gibran",
            born: 1883,
            died: 1931,
            selectedWritings: [
                "The Prophet",
                "Sand and Foam",
                "The Earth Gods",
            ],
            quote:
                "We live only to discover beauty. All else is a form of waiting.",
            photo:
                "https://upload.wikimedia.org/wikipedia/commons/3/34/Kahlil_Gibran_1913.jpg",
        },
        {
            name: "Oscar Wilde",
            born: 1854,
            died: 1900,
            selectedWritings: [
                "The Picture of Dorian Gray",
                "The Importance of Being Earnest",
                "De Profundis",
            ],
            quote:
                "The bureaucracy is expanding to meet the needs of the expanding bureaucracy.",
            photo:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Oscar_Wilde_Sarony.jpg/800px-Oscar_Wilde_Sarony.jpg",
        },
        {
            name: "Maya Angelou",
            born: 1928,
            died: 2014,
            selectedWritings: [
                "I Know Why the Caged Bird Sings",
                "Gather Together in My Name",
                "The Heart of a Woman",
            ],
            quote:
                "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
            photo:
                "https://upload.wikimedia.org/wikipedia/commons/b/b4/Angelou_at_Clinton_inauguration.jpg",
        },
    ],
};

var pokemonObj = {
    name: "bulbasaur",
    image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    abilities: ["chlorophyll", "overgrow"],
    weight: 69,
    types: ["poison", "grass"],
};

var pokemonData = {
    pokemon: [
        {
            name: "bulbasaur",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            abilities: ["chlorophyll", "overgrow"],
            weight: 69,
            types: ["poison", "grass"],
        },
        {
            name: "caterpie",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
            abilities: ["run-away", "shield-dust"],
            weight: 29,
            types: ["bug"],
        },
        {
            name: "metapod",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
            abilities: ["shed-skin"],
            weight: 99,
            types: ["bug"],
        },
        {
            name: "venusaur",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
            abilities: ["chlorophyll", "overgrow"],
            weight: 1000,
            types: ["poison", "grass"],
        },
        {
            name: "charmeleon",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
            abilities: ["solar-power", "blaze"],
            weight: 190,
            types: ["fire"],
        },
        {
            name: "wartortle",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
            abilities: ["rain-dish", "torrent"],
            weight: 225,
            types: ["water"],
        },
        {
            name: "ivysaur",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
            abilities: ["chlorophyll", "overgrow"],
            weight: 130,
            types: ["poison", "grass"],
        },
        {
            name: "butterfree",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
            abilities: ["tinted-lens", "compound-eyes"],
            weight: 320,
            types: ["flying", "bug"],
        },
        {
            name: "blastoise",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
            abilities: ["rain-dish", "torrent"],
            weight: 855,
            types: ["water"],
        },
        {
            name: "squirtle",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
            abilities: ["rain-dish", "torrent"],
            weight: 90,
            types: ["water"],
        },
        {
            name: "charmander",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
            abilities: ["solar-power", "blaze"],
            weight: 85,
            types: ["fire"],
        },
        {
            name: "charizard",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
            abilities: ["solar-power", "blaze"],
            weight: 905,
            types: ["flying", "fire"],
        },
    ],
};

var myComplied = Handlebars.templates.pokemon(pokemonData);

$(".container").html(myComplied);
