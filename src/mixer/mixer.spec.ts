import { Ingredient } from "../ingredients/ingredient";

describe('Mixer', () => {
    it('should call the the potion craft', () => {
        const recipe = new LongLiveRecipe(5);
        const mixer = new Mixer();

        mixer.mix(recipe);

        expect(Potion.prototype.craft).toHaveBeenCalled();
    })
})

class Mixer {
    mix(recipe: IRecipe): Potion {
}

class Potion implements IPotion {
    recipe: IRecipe;
    ingredients: Ingredient[];
    craft() {
        return true;
    }
}