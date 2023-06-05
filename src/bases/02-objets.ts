export const ids = [1, 2, 3, 4, 6, 7];

export const pokemons: Pokemon = {
  id: 2,
  name: "bulbasur",
};

interface Pokemon {
  id: number;
  name: string;
}

console.log(pokemons);
