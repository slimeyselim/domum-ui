export interface IPerson {
  Id : number;
  Name : string;
  Pets : IAnimal[];
}

export interface IAnimal {
  Name : string;
  Animal : string;
  Rating: number;
}
