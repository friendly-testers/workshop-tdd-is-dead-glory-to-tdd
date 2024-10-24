import { Item } from "../items/item";



export interface IRecipe {
    readonly necessaryItems: number;
    successCondition(items: Item[]): boolean;
    explodingCondition: (items: Item[]) => void;
}
