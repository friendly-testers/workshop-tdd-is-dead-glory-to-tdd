import { Ingredient } from "../ingredients/ingredient";
import { IRecipe } from "../recipes/recipe.interface";

export interface IPotion {
    recipe: IRecipe;
    ingredients: Ingredient[];
    craft: () => boolean;
}
