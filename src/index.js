
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element

function capitalize(text) {
    return text[0].toUpperCase() + text.slice(1,)
}

function renderCard(card_data) {
    // card_data = data[0];
    // card element
    card = document.createElement("li");
    card.setAttribute("class", "card");

    // card title
    let pokemon_name = capitalize(card_data.name)
    console.log(pokemon_name)
    title = document.createElement("h2");
    title.innerHTML = pokemon_name
    title.setAttribute("class", "card--title");
    card.appendChild(title);
    // title.classList.add("card--title");

    // card img
    img = document.createElement("img");
    img.setAttribute("width", "256");
    img.setAttribute("class", "card--img");
    img.setAttribute("src", card_data['sprites']['other']['official-artwork']['front_default']);

    console.log(card_data['sprites']['other']['official-artwork']['front_default']);
    card.appendChild(img);

    // card text
    text = document.createElement("ul");
    text.setAttribute("class", "card--text");

    card_data.stats.forEach((s) => {
        stat = document.createElement("li");
        stat.innerHTML = `${s.stat.name.toUpperCase()}: ${s.base_stat}`;
        text.appendChild(stat);
    });

    card.appendChild(text);

    // games
    game_header = document.createElement("p")
    game_header.innerHTML = "Games:";

    game_text = document.createElement("p")
    games = "";
    
    card_data.game_indices.forEach((g) => {
        games += `${capitalize(g.version.name)}, `;
    });


    game_text.innerHTML = games;

    game_header.appendChild(game_text);
    card.appendChild(game_header)

    

    console.log(card)
    cards = document.getElementsByClassName("cards").item(0).appendChild(card);
}



console.log(data[0]);

for (i = 0; i < data.length; i++) {
    renderCard(data[i])
}