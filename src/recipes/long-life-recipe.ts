import { Ingredient } from "../ingredients/ingredient";
import { IRecipe } from "./recipe.interface";


export class LongLifeRecipe implements IRecipe {
    readonly necessaryIngredients: number;
    private readonly ingredientsToBeEquals = 4;

    constructor(necessaryIngredients: number) {
        this.necessaryIngredients = necessaryIngredients;
    }
    successCondition(ingredients: Ingredient[]): boolean {
        throw new Error("Method not implemented.");
    }
    explodingCondition(ingredients: Ingredient[]): void {
        throw new Error("Method not implemented.");
    }

}
