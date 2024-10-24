import { Item } from "../items/item";
import { LongLifeRecipe } from "./long-life-recipe";

describe(LongLifeRecipe.name, () => {
    let recipe: LongLifeRecipe;

    beforeEach(() => {
        const expectedNumberNecessaryItems = 5;
        recipe = new LongLifeRecipe(expectedNumberNecessaryItems);
    })

    it('should set the necessaryItems on constructor', () => {
        const expectedNumberNecessaryItems = 5;
        recipe = new LongLifeRecipe(expectedNumberNecessaryItems);

        expect(recipe.necessaryItems).toBe(expectedNumberNecessaryItems)
    })

    describe('successCondition', () => {
        it.each<{items: Item[]}>([
            {items: [Item.AIR, Item.FIRE, Item.WATER, Item.WATER, Item.WATER]},
            {items: [Item.FIRE, Item.FIRE, Item.WATER, Item.FIRE, Item.ETHER]}
        ])('should return true if the number of items is equal to necessary items and there are at least 3 different items', ({items}) => {
            const result = recipe.successCondition(items);
    
            expect(result).toBe(true)
        })
        it.each([
            { items: [Item.AIR, Item.FIRE, Item.WATER, Item.WATER] },
            { items: [Item.FIRE, Item.FIRE, Item.WATER, Item.FIRE, Item.ETHER, Item.ETHER] }
        ])("should return false if the number of items is not equal to necessary items", ({ items }) => {
            const result = recipe.successCondition(items);
    
            expect(result).toBe(false)
        })
        it.each([
            { items: [Item.AIR, Item.AIR, Item.WATER, Item.WATER, Item.WATER] },
            { items: [Item.EARTH, Item.FIRE, Item.FIRE, Item.FIRE, Item.FIRE] }
        ])("should return false if less than 3 different items are present", ({ items }) => {
            const result = recipe.successCondition(items);
    
            expect(result).toBe(false)
        })
    })

    describe('explodingCondition', () => {
        it.each(
            [
                { items: [Item.AIR, Item.AIR, Item.AIR, Item.AIR, Item.AIR] },
                { items: [Item.FIRE, Item.FIRE, Item.FIRE, Item.FIRE, Item.FIRE] },
                { items: [Item.WATER, Item.WATER, Item.WATER, Item.WATER, Item.WATER] },
                { items: [Item.EARTH, Item.EARTH, Item.EARTH, Item.EARTH, Item.EARTH] },
                { items: [Item.ETHER, Item.ETHER, Item.ETHER, Item.ETHER, Item.ETHER] }
            ]
        )("should throw an error if all the items are the same", ({items}) => {

            expect(() => recipe.explodingCondition(items)).toThrowWithMessage(Error, "BOOM!");
        })
     })

})


export interface IPotionMixer {

}
