import { IRecipe } from "../recipes/recipe.interface";
import * as PotionModule from "../potion/potion";
import { PotionMixer } from "./potion-mixer";
import { IPotion } from "../potion/potion.interface";
import { logger } from "../utils/logger";

describe('Mixer', () => {
    let potionMixer: PotionMixer;
    let fakeRecipe: IRecipe
    let fakePotion: IPotion

    beforeEach(() => {
        potionMixer = new PotionMixer();

        fakeRecipe = {
            necessaryIngredients: 5,
            successCondition: jest.fn(),
            explodingCondition: jest.fn()
        }

        fakePotion = {
            recipe: fakeRecipe,
            ingredients: [],
            craft: jest.fn()
        }

        jest.spyOn(PotionModule, 'Potion').mockReturnValue(fakePotion);
        jest.spyOn(logger, 'info').mockImplementation();
    });
       
    it('should create a potion', () => {
        potionMixer.mixRecipe(fakeRecipe);
        
        expect(PotionModule.Potion).toHaveBeenCalledWith(fakeRecipe);
    })
    it('should return the result of the potion craft method', () => {
        jest.spyOn(fakePotion, 'craft').mockReturnValue(true);
        
        const result = potionMixer.mixRecipe(fakeRecipe);
        
        expect(result).toBe(true);
    })
    it.todo('should call the ingredient generator same times as necessary ingredients');
    it.todo('should call the the potion craft method')
    it.todo('should fill the potion ingredients with ingredients')
    it.todo('should log the potion ingredients')
})




