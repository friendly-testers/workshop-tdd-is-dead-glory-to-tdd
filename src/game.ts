import { Config } from "./config";
import { IPotionMixer } from "./mixer/potion-mixer.interface";

export class Game {
    constructor(private _potionMixer: IPotionMixer, private _config: Config) {
        this._config
        this._potionMixer
    }

    public start(): void {

    }
}
