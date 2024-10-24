import { LongLifeRecipe } from "./recipes/long-life-recipe"
import { IPotionMixer } from "./recipes/long-life-recipe.spec"

describe('Game', () => {
    it.todo('should call the potion mixer mixRecipe method')
    it.todo('should print a victory message if the potion is crafted')
    it.todo('should print a failure message if the potion a GameOverError occurs')
    it.todo('should try to mix the recipe for a maxAttempts times before giving up')
})

const config = {
    maxAttempts: 3,
    victoryMessage: 'You have crafted the potion!',
    failureMessage: 'Game Over! You have failed to craft the potion.',
    criticalFailureMessage: 'Game Over! You exploded!',
    Recipe: LongLifeRecipe
}

type Config = typeof config;

class Game {
    constructor(private _potionMixer: IPotionMixer, private _config: Config) {}
}