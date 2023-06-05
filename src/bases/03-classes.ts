export class Pokemon {
  get imageURL(): string {
    return `http://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public id: number,
    public name: string // public imageURL: string
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  getMoves() {
    return 10;
  }
}

export const charmander = new Pokemon(4, "charmander");

console.log(charmander);

// charmander.scream();
// charmander.speak();

console.log(charmander.getMoves());
