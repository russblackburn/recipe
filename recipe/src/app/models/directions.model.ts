export class Directions {
  constructor(
    public icon: string,
    public direction: string,
    public ingredientPosition: number,
    public ingredientAmount: string,
    public clicked: boolean
  ) {}
}
