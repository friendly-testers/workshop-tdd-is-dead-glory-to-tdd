import { Item } from "../items/item";
import { IRecipe } from "../recipes/recipe.interface";

export interface IPotion {
    recipe: IRecipe;
    items: Item[];
    craft: () => boolean | null;
}
