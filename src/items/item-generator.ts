import crypto from 'crypto';
import { Item } from './item';


export class ItemGenerator {

    private static readonly _maxIndex =  Object.keys(Item).length;

    /**
     * Extract an item from a pool of them
     */
    static generate(): Item {
        const item = crypto.randomInt(this._maxIndex);
        const key = Object.keys(Item)[item] as keyof typeof Item;
        return Item[key];
    } 
}
