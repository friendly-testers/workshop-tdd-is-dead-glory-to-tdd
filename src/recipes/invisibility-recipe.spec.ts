import { InvisibilityRecipe } from './invisibility-recipe';

describe(InvisibilityRecipe.name, () => {
    let recipe: InvisibilityRecipe;

    beforeEach(() => {
        const expectedNumberNecessaryIngredients = 4;
        recipe = new InvisibilityRecipe(expectedNumberNecessaryIngredients);
    });

    it('should set the necessaryIngredients on constructor', () => {
        const expectedNumberNecessaryIngredients = 4;
        recipe = new InvisibilityRecipe(expectedNumberNecessaryIngredients);

        expect(recipe.necessaryIngredients).toBe(expectedNumberNecessaryIngredients);
    });
});
