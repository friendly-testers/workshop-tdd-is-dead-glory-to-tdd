import crypto from 'crypto';
import { Ingredient } from './ingredient';


export class IngredientGenerator {

    private static readonly _maxIndex =  Object.keys(Ingredient).length;

    /**
     * Extract an ingredient from a pool of them
     */
    static generate(): Ingredient {
        const ingredient = crypto.randomInt(this._maxIndex);
        const key = Object.keys(Ingredient)[ingredient] as keyof typeof Ingredient;
        return Ingredient[key];
    } 
}
