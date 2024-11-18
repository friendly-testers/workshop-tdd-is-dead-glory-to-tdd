import { IngredientGenerator } from "../ingredients/ingredient-generator";
import { Potion } from "../potion/potion";
import { IRecipe } from "../recipes/recipe.interface";
import { logger } from "../utils/logger";
import { IPotionMixer } from "./potion-mixer.interface";

export class PotionMixer implements IPotionMixer {
    mixRecipe(recipe: IRecipe): boolean {
        const potion = new Potion(recipe);

        for (let i = 0; i < recipe.necessaryIngredients; i++) {
            const ingredient = IngredientGenerator.generate();
            logger.info(`Mixing ingredient: ${ingredient}`);
            potion.ingredients.push(ingredient);
        }

        return potion.craft();
    }
}

