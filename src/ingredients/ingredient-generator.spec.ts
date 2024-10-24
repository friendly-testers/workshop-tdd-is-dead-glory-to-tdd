import crypto from 'crypto';
import { Ingredient } from './ingredient';
import { IngredientGenerator } from './ingredient-generator';


jest.mock('crypto')

describe('Ingredient Generator', () => {

    it('should return an element', () => {
        jest.spyOn(crypto, 'randomInt').mockImplementation(() => 4);
        const result = IngredientGenerator.generate()

        expect(result).toBe(Ingredient.ETHER);
    })

})

