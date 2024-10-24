import { ExplosionError } from "../errors/explosion.error";
import { GameOverError } from "../errors/game-over.error";
import { Ingredient } from "../ingredients/ingredient";
import { IRecipe } from "../recipes/recipe.interface";
import { IPotion } from "./potion.interface";

export class Potion implements IPotion {
    public recipe: IRecipe;
    public ingredients: Ingredient[] = [];

    constructor(recipe: IRecipe) {
        this.recipe = recipe;
    }

    public craft() {
        const { ingredients } = this;

        if (this.recipe.successCondition(ingredients)) {
            return true;
        }

        try {
            this.recipe.explodingCondition(ingredients);
        } catch (error) {
            if (error instanceof ExplosionError) {
                throw new GameOverError();
            }

            throw error;
        }

        return false;
    };
}
