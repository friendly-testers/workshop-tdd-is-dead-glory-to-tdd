import { LongLifeRecipe } from "./recipes/long-life-recipe";
import { IRecipe } from "./recipes/recipe.interface";

export type Config = {
    maxAttempts: number,
    victoryMessage: string,
    failureMessage: string, 
    criticalFailureMessage: string,
    recipe: IRecipe
};


const recipe = new LongLifeRecipe(5);

export const config: Config = {
    recipe,
    maxAttempts: 3,
    victoryMessage: 'You have crafted the potion!',
    failureMessage: 'Game Over! You have failed to craft the potion.',
    criticalFailureMessage: 'Game Over! You exploded!',
};

