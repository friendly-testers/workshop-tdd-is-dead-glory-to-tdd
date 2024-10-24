import { Ingredient } from "../ingredients/ingredient";



export interface IRecipe {
    readonly necessaryIngredients: number;
    successCondition(ingredients: Ingredient[]): boolean;
    explodingCondition: (ingredients: Ingredient[]) => void;
}
