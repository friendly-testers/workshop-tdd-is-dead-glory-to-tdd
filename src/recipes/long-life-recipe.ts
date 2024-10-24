import { Item } from "../items/item";
import { IRecipe } from "./recipe.interface";


export class LongLifeRecipe implements IRecipe {
    readonly necessaryItems: number;
    private readonly itemsToBeEquals = 3;

    constructor(necessaryItems: number) {
        this.necessaryItems = necessaryItems;
    }

    public explodingCondition(items: Item[]) {
        const set = new Set(items);

        if (set.size === 1) {
            throw new Error('BOOM!');
        }
    }

    public successCondition(items: Item[]): boolean {
        const setMap = new Set(items);

        if (items.length === this.necessaryItems && setMap.size >= this.itemsToBeEquals) {
            return true;
        } else {
            return false;
        }
    };
}
