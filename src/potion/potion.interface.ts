import { Item } from "../items/item";
import { IRecipe } from "./recipe.interface";



export interface IPotion {
    recipe: IRecipe;
    items: Item[];
    craft: () => boolean | null;
}
