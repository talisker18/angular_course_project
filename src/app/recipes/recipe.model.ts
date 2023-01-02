//recipe model
import { Ingredient } from "../shared/ingredient.model";

export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[]; //so we can display the ingredients of this recipe and add it to shopping list

    constructor(name: string, desc: string, imgPath: string, ingredients: Ingredient[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imgPath;
        this.ingredients = ingredients;
    }
}