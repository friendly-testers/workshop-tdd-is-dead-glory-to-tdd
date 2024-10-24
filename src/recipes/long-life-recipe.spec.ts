import { ExplosionError } from "../errors/explosion.error";
import { Ingredient } from "../ingredients/ingredient";
import { LongLifeRecipe } from "./long-life-recipe";

describe(LongLifeRecipe.name, () => {
    let recipe: LongLifeRecipe;

    beforeEach(() => {
        const expectedNumberNecessaryIngredients = 5;
        recipe = new LongLifeRecipe(expectedNumberNecessaryIngredients);
    })

    it('should set the necessaryIngredients on constructor', () => {
        const expectedNumberNecessaryIngredients = 5;
        recipe = new LongLifeRecipe(expectedNumberNecessaryIngredients);

        expect(recipe.necessaryIngredients).toBe(expectedNumberNecessaryIngredients)
    })

    describe('successCondition', () => {
        it.each<{ingredients: Ingredient[]}>([
            {ingredients: [Ingredient.AIR, Ingredient.FIRE, Ingredient.WATER, Ingredient.WATER, Ingredient.WATER]},
            {ingredients: [Ingredient.FIRE, Ingredient.FIRE, Ingredient.WATER, Ingredient.FIRE, Ingredient.ETHER]}
        ])('should return true if the number of ingredients is equal to necessary ingredients and there are at least 3 different ingredients', ({ingredients}) => {
            const result = recipe.successCondition(ingredients);
    
            expect(result).toBe(true)
        })
        it.each([
            { ingredients: [Ingredient.AIR, Ingredient.FIRE, Ingredient.WATER, Ingredient.WATER] },
            { ingredients: [Ingredient.FIRE, Ingredient.FIRE, Ingredient.WATER, Ingredient.FIRE, Ingredient.ETHER, Ingredient.ETHER] }
        ])("should return false if the number of ingredients is not equal to necessary ingredients", ({ ingredients }) => {
            const result = recipe.successCondition(ingredients);
    
            expect(result).toBe(false)
        })
        it.each([
            { ingredients: [Ingredient.AIR, Ingredient.AIR, Ingredient.WATER, Ingredient.WATER, Ingredient.WATER] },
            { ingredients: [Ingredient.EARTH, Ingredient.FIRE, Ingredient.FIRE, Ingredient.FIRE, Ingredient.FIRE] }
        ])("should return false if less than 3 different ingredients are present", ({ ingredients }) => {
            const result = recipe.successCondition(ingredients);
    
            expect(result).toBe(false)
        })
    })

    describe('explodingCondition', () => {
        it.each(
            [
                { ingredients: [Ingredient.AIR, Ingredient.AIR, Ingredient.AIR, Ingredient.AIR, Ingredient.AIR] },
                { ingredients: [Ingredient.FIRE, Ingredient.FIRE, Ingredient.FIRE, Ingredient.FIRE, Ingredient.FIRE] },
                { ingredients: [Ingredient.WATER, Ingredient.WATER, Ingredient.WATER, Ingredient.WATER, Ingredient.WATER] },
                { ingredients: [Ingredient.EARTH, Ingredient.EARTH, Ingredient.EARTH, Ingredient.EARTH, Ingredient.EARTH] },
                { ingredients: [Ingredient.ETHER, Ingredient.ETHER, Ingredient.ETHER, Ingredient.ETHER, Ingredient.ETHER] }
            ]
        )("should throw an error if all the ingredients are the same", ({ingredients}) => {

            expect(() => recipe.explodingCondition(ingredients)).toThrow(ExplosionError);
        })
     })

})


export interface IPotionMixer {

}

