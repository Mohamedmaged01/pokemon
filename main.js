async function fetchData() {
  try {
    const pokename = document.getElementById("pokeName").value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokename}`
    );
    if (!response.ok) {
      throw new error("could't fetch poke");
    }
    const data = await response.json();
    const pokesprite = data.sprites.front_default;
    const img = document.getElementById("pokemonsprite");
    const info = document.getElementById("info");
    const info2 = data.id;
    console.log(info2);
    img.src = pokesprite;
    img.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
