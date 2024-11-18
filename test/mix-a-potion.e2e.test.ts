import { config as defaultConfig } from "../src/config";
import { Game } from "../src/game";
import { Ingredient } from "../src/ingredients/ingredient";
import { IngredientGenerator } from "../src/ingredients/ingredient-generator";
import { PotionMixer } from "../src/mixer/potion-mixer";
import { NEW_ATTEMPT_MESSAGE } from "../src/utils";
import { logger } from "../src/utils/logger";

const failureArray = [Ingredient.FIRE, Ingredient.FIRE, Ingredient.FIRE, Ingredient.ETHER, Ingredient.EARTH];
const successArray = [Ingredient.AIR, Ingredient.FIRE, Ingredient.WATER, Ingredient.ETHER, Ingredient.EARTH];
const criticalFailureArray = [Ingredient.FIRE, Ingredient.FIRE, Ingredient.FIRE, Ingredient.FIRE, Ingredient.FIRE];

describe('Make the game work', () => {
    it('should win a game after 3 attempts', () => {
        const arrayOfIngredients = [...successArray, ...failureArray, ...failureArray];
        jest.spyOn(IngredientGenerator, 'generate').mockImplementation(() => {
            return arrayOfIngredients.pop() as Ingredient;
        })
        jest.spyOn(logger, 'info').mockImplementation();
        
        const config = {
            ...defaultConfig,
            maxAttempts: 3
        }

        const game = new Game(new PotionMixer(), config);
        game.start();

        expect(logger.info).toHaveBeenNthCalledWith(6, NEW_ATTEMPT_MESSAGE);
        expect(logger.info).toHaveBeenNthCalledWith(12, NEW_ATTEMPT_MESSAGE);
        expect(logger.info).toHaveBeenCalledWith(config.victoryMessage);
    });
    it('should lose a game', () => {
        const arrayOfIngredients = [...failureArray, ...failureArray, ...failureArray];
        jest.spyOn(IngredientGenerator, 'generate').mockImplementation(() => {
            return arrayOfIngredients.pop() as Ingredient;
        })
        jest.spyOn(logger, 'info').mockImplementation();
        
        const config = {
            ...defaultConfig,
            maxAttempts: 3
        }

        const game = new Game(new PotionMixer(), config);
        game.start();

        expect(logger.info).toHaveBeenNthCalledWith(6, NEW_ATTEMPT_MESSAGE);
        expect(logger.info).toHaveBeenNthCalledWith(12, NEW_ATTEMPT_MESSAGE);
        expect(logger.info).toHaveBeenCalledWith(config.failureMessage);
    })
    it('should lose a game with a critical failure', () => {
        const arrayOfIngredients = [...criticalFailureArray, ...failureArray, ...failureArray];
        jest.spyOn(IngredientGenerator, 'generate').mockImplementation(() => {
            return arrayOfIngredients.pop() as Ingredient;
        })
        jest.spyOn(logger, 'info').mockImplementation();
        
        const config = {
            ...defaultConfig,
            maxAttempts: 3
        }

        const game = new Game(new PotionMixer(), config);
        game.start();

        expect(logger.info).toHaveBeenNthCalledWith(6, NEW_ATTEMPT_MESSAGE);
        expect(logger.info).toHaveBeenNthCalledWith(12, NEW_ATTEMPT_MESSAGE);
        expect(logger.info).toHaveBeenCalledWith(config.criticalFailureMessage);
    })
})