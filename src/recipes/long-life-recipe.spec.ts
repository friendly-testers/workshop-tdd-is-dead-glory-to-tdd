import { LongLifeRecipe } from './long-life-recipe';

describe(LongLifeRecipe.name, () => {
    let recipe: LongLifeRecipe;

    beforeEach(() => {
        const expectedNumberNecessaryIngredients = 5;
        recipe = new LongLifeRecipe(expectedNumberNecessaryIngredients);
    });

    it('should set the necessaryIngredients on constructor', () => {
        const expectedNumberNecessaryIngredients = 5;
        recipe = new LongLifeRecipe(expectedNumberNecessaryIngredients);

        expect(recipe.necessaryIngredients).toBe(expectedNumberNecessaryIngredients);
    });
});
