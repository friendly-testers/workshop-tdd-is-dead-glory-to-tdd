import { Config } from "./config";
import { Game } from "./game";
import { PotionMixer } from "./mixer/potion-mixer";
import { IPotionMixer } from "./mixer/potion-mixer.interface";
import { IRecipe } from "./recipes/recipe.interface";


class MockRecipe implements IRecipe{
    necessaryIngredients: number = 5;
    successCondition = jest.fn()    ;
    explodingCondition = jest.fn();
}


describe('Game', () => {

    let game: Game;
    let potionMixer: IPotionMixer;
    let config: Config;

    let recipe = jest.mocked(MockRecipe.prototype)
    beforeEach(() => {
        config = {
            recipe,
            maxAttempts: 2,
            victoryMessage: 'fake victory message',
            failureMessage: 'fake failure message',
            criticalFailureMessage: 'fake critical failure message',
        };

        potionMixer = jest.mocked(PotionMixer.prototype);

        game = new Game(potionMixer, config);
    })
    it('should define the Game', () => {
        expect(game).toBeDefined()
    })

    it.todo('should call the potion mixer mixRecipe method')
    it.todo('should print a victory message if the potion is crafted')
    it.todo('should print a failure message if the potion a GameOverError occurs')
    it.todo('should try to mix the recipe for a maxAttempts times before giving up')

    it.todo('should log error in any other Error cases')

    it.todo('should log new attempt message')
})

