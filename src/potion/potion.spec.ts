import { ExplosionError } from "../errors/explosion.error";
import { GameOverError } from "../errors/game-over.error";
import { Ingredient } from "../ingredients/ingredient";
import { IRecipe } from "../recipes/recipe.interface";
import { Potion } from "./potion";

describe('Potion', () => {
    let potion: Potion;
    const fakeRecipe: IRecipe = {
        necessaryIngredients: 5,
        successCondition: jest.fn(),
        explodingCondition: jest.fn()
    }

    beforeEach(() => {
        potion = new Potion(fakeRecipe);
    })

    describe('craft', () => {
        it('should call the success condition', () => {
            potion.ingredients = [{} as Ingredient];
            jest.spyOn(fakeRecipe, 'successCondition');

            potion.craft();

            expect(fakeRecipe.successCondition).toHaveBeenCalledWith(potion.ingredients);
        })
        it('should return true if the recipe is successful', () => {
            jest.spyOn(fakeRecipe, 'successCondition').mockReturnValue(true);

            const result = potion.craft();

            expect(result).toBe(true);
        })
        describe('when the recipe is a failure', () => {
            it('should call the exploding condition', () => {
                potion.ingredients = [{} as Ingredient];
                jest.spyOn(fakeRecipe, 'successCondition').mockReturnValue(false);

                potion.craft();

                expect(fakeRecipe.explodingCondition).toHaveBeenCalledWith(potion.ingredients);
            })
            it('should return false when the exploding condition is executed without throwing', () => {
                jest.spyOn(fakeRecipe, 'successCondition').mockReturnValue(false);

                const result = potion.craft();

                expect(result).toBe(false);
            })
            it('should throw a game over error when the ExplosionError is thrown by the exploding condition', () => {
                jest.spyOn(fakeRecipe, 'successCondition').mockReturnValue(false);

                jest.spyOn(fakeRecipe, 'explodingCondition').mockImplementation(() => {
                    throw new ExplosionError();
                });

                const exec = () => potion.craft();

                expect(exec).toThrow(GameOverError);
            })
            it('should throw the same error thrown by the exploding condition when it is not an ExplosionError', () => {
                jest.spyOn(fakeRecipe, 'successCondition').mockReturnValue(false);

                const error = new Error('fake error');
                jest.spyOn(fakeRecipe, 'explodingCondition').mockImplementation(() => {
                    throw error;
                });

                const exec = () => potion.craft();

                expect(exec).toThrow(error);
            })
        })
    })
})


