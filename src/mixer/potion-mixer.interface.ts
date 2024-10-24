import { IRecipe } from "../recipes/recipe.interface";

export interface IPotionMixer {
    mixRecipe(recipe: IRecipe): boolean;
}
