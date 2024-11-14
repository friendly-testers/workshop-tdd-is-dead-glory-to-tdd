import { Ingredient } from '../ingredients/ingredient';
import { IRecipe } from './recipe.interface';

/**
 * Invisibility recipe conditions:
 *
 * Success condition:
 * - must have number of ingredients equals to necessaryIngredients
 * - must have at least one AIR and one WATER ingredient
 *
 * Exploding condition:
 * - all ingredients are different
 */
export class InvisibilityRecipe implements IRecipe {
    readonly necessaryIngredients: number;

    constructor(necessaryIngredients: number) {
        this.necessaryIngredients = necessaryIngredients;
    }

    successCondition(ingredients: Ingredient[]): boolean {
        throw new Error('Method not implemented.');
    }
    explodingCondition(ingredients: Ingredient[]): void {
        throw new Error('Method not implemented.');
    }
}
