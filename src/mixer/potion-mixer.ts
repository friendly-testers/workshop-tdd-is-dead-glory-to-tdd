import { Potion } from "../potion/potion";
import { IRecipe } from "../recipes/recipe.interface";
import { IPotionMixer } from "./potion-mixer.interface";

export class PotionMixer implements IPotionMixer {
    mixRecipe(recipe: IRecipe): boolean {
        new Potion(recipe);

        return true;
    }
}

