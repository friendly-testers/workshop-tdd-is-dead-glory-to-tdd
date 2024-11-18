import { Config } from "./config";
import { GameOverError } from "./errors/game-over.error";
import { Game } from "./game";
import { PotionMixer } from "./mixer/potion-mixer";
import { IPotionMixer } from "./mixer/potion-mixer.interface";
import { IRecipe } from "./recipes/recipe.interface";
import { NEW_ATTEMPT_MESSAGE } from "./utils";
import { logger } from "./utils/logger";


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
        
        jest.spyOn(logger, 'info').mockImplementation();
    })

    it('should call the potion mixer mixRecipe method', () => {

        jest.spyOn(potionMixer, 'mixRecipe').mockImplementation();

        game.start();

        expect(potionMixer.mixRecipe).toHaveBeenCalledWith(recipe);
    })
    it('should print a victory message if the potion is crafted', () => {
        jest.spyOn(potionMixer, 'mixRecipe').mockReturnValue(true);

        game.start();

        expect(logger.info).toHaveBeenCalledWith(config.victoryMessage);
    })
    it('should print a failure message if the potion a GameOverError occurs', () => {
        jest.spyOn(potionMixer, 'mixRecipe').mockImplementation(() => { throw new GameOverError() })

        game.start();

        expect(logger.info).toHaveBeenCalledWith(config.criticalFailureMessage);
    })
    it('should try to mix the recipe for a maxAttempts times before giving up', () => {
        jest.spyOn(potionMixer, 'mixRecipe').mockReturnValue(false);

        game.start()

        expect(potionMixer.mixRecipe).toHaveBeenCalledTimes(config.maxAttempts);
        expect(logger.info).toHaveBeenCalledWith(config.failureMessage);
    })

    it('should log error in any other Error cases', () => {
        const error = new Error('fake error');
        jest.spyOn(potionMixer, 'mixRecipe').mockImplementation(() => { throw error })
        jest.spyOn(logger, 'error').mockImplementation();

        game.start()

        expect(logger.error).toHaveBeenCalledWith(error.message);
    })

    it('should log new attempt message', () => {
        jest.spyOn(potionMixer, 'mixRecipe').mockReturnValue(false);

        game.start()

        expect(logger.info).toHaveBeenCalledWith(NEW_ATTEMPT_MESSAGE)
    })
})

