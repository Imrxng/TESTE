let pokemon = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
    "Raticate",
    "Spearow",
];


let parent; 
let addElement;
let text;

for(i = 0; i < pokemon.length; i++){

    parent = document.getElementsByTagName('ol')[0];
    addElement = document.createElement("li");
    text = document.createTextNode(pokemon[i]);
    addElement.appendChild(text);
    parent.appendChild(addElement);
    
}
let numberOfPokemon;  
let pokeTeam = [];

do{
    numberOfPokemon = prompt(`Welke Pokémon wil je in je team? [1-21] (typ "stop" om te eindigen`);
    
    if(numberOfPokemon != "stop"){
        numberOfPokemon = parseInt(numberOfPokemon);    
        if(typeof numberOfPokemon == "number" && !isNaN(numberOfPokemon)){

            numberOfPokemon -= 1;
            if(numberOfPokemon < 21){

                if(pokeTeam.includes(pokemon[numberOfPokemon])){
                alert("Deze pokemon zit al in je team");
                }



                else{
                parent = document.getElementsByTagName('ul')[0];
                addElement = document.createElement("li");
                text = document.createTextNode(pokemon[numberOfPokemon]);
                pokeTeam.push(pokemon[numberOfPokemon]);
                addElement.appendChild(text);
                parent.appendChild(addElement);
                }
           }

           else{
            alert("Deze pokemon ken ik niet");
           }

         
        }
    }
   

}while(numberOfPokemon != 'stop')