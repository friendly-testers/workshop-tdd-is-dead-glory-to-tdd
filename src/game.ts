import { Config } from "./config";
import { GameOverError } from "./errors/game-over.error";
import { IPotionMixer } from "./mixer/potion-mixer.interface";
import { NEW_ATTEMPT_MESSAGE } from "./utils";
import { logger } from "./utils/logger";

export class Game {
    constructor(private _potionMixer: IPotionMixer, private _config: Config) {
    }

    public start(): void {
        const { recipe, victoryMessage, criticalFailureMessage, failureMessage } = this._config;

        try {
            for (let i = 0; i < this._config.maxAttempts; i++) {
                const resultFromMix = this._potionMixer.mixRecipe(recipe);
                if (resultFromMix) {
                    logger.info(victoryMessage);
                    return;
                }
                logger.info(NEW_ATTEMPT_MESSAGE)
            }
            logger.info(failureMessage);
        } catch (error) {
            if (error instanceof GameOverError) {

                logger.info(criticalFailureMessage);
            } else {
                logger.error((error as Error).message);
            }
        }

    }
}
