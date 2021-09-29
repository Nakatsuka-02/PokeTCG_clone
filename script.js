async function sortearCarta() {
    var listaPokemons = [];
    for (var i = 1; i < 152; i++) {
      resposta = await fetch("https://pokeapi.co/api/v2/pokemon/" + i);
      respostaJson = await resposta.json();
      listaPokemons.push(respostaJson);
      console.log(resposta);
    //   window.debugadora = resposta;
    }
    console.log(listaPokemons);
  }