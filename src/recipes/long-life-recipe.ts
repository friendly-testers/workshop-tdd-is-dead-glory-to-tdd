import { Ingredient } from "../ingredients/ingredient";
import { IRecipe } from "./recipe.interface";


export class LongLifeRecipe implements IRecipe {
    readonly necessaryIngredients: number;
    private readonly ingredientsToBeEquals = 3;

    constructor(necessaryIngredients: number) {
        this.necessaryIngredients = necessaryIngredients;
    }

    public explodingCondition(ingredients: Ingredient[]) {
        const set = new Set(ingredients);

        if (set.size === 1) {
            throw new Error('BOOM!');
        }
    }

    public successCondition(ingredients: Ingredient[]): boolean {
        const setMap = new Set(ingredients);

        if (ingredients.length === this.necessaryIngredients && setMap.size >= this.ingredientsToBeEquals) {
            return true;
        } else {
            return false;
        }
    };
}
