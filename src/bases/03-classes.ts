import axios from "axios";
import { Move, PokeapiResponse } from "../interface/pokeapi-response.interface";

export class Pokemon {
  get imageURL(): string {
    return `http://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public id: number,
    public name: string // public imageURL: string
  ) // TODO: inyectar dependencies
  {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const { data } = await axios.get<PokeapiResponse>(
      "https://pokeapi.co/api/v2/pokemon/4"
    );
    console.log(data.moves);
    return data.moves;
  }
}

export const charmander = new Pokemon(4, "charmander");

// console.log(charmander);

// charmander.scream();
// charmander.speak();

// console.log(charmander.getMoves());
charmander.getMoves();
