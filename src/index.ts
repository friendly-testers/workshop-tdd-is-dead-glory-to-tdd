import { config } from './config';
import { Game } from './game';
import { PotionMixer } from './mixer/potion-mixer';
import { logger } from './utils/logger';



logger.info(`Welcome to the workshop: TDD is dead ...glory to TDD!`)


const game = new Game(new PotionMixer(), config);
game.start();
