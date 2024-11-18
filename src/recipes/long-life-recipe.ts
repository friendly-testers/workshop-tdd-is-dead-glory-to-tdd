import { ExplosionError } from '../errors/explosion.error';
import { Ingredient } from '../ingredients/ingredient';
import { IRecipe } from './recipe.interface';

/**
 * Long life recipe conditions:
 *
 * Success condition:
 * - must have number of ingredients equals to necessaryIngredients
 * - must have at least 4 different ingredients
 *
 * Exploding condition:
 * - all ingredients are equals
 */
export class LongLifeRecipe implements IRecipe {
    readonly necessaryIngredients: number;
    private readonly ingredientsToBeEquals = 4;

    constructor(necessaryIngredients: number) {
        this.necessaryIngredients = necessaryIngredients;
    }

    public explodingCondition(ingredients: Ingredient[]) {
        const set = new Set(ingredients);

        if (set.size === 1) {
            throw new ExplosionError();
        }
    }

    public successCondition(ingredients: Ingredient[]): boolean {
        const setMap = new Set(ingredients);

        if (ingredients.length === this.necessaryIngredients && setMap.size >= this.ingredientsToBeEquals) {
            return true;
        } else {
            return false;
        }
    }
}
