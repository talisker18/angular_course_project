import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

//in v1, recipes are managed by recipe-list.component

//service is declared in: recipes.component.ts and used in the childs of recipes.component.ts
@Injectable() //because we inject shopping list service here
export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe(
          'Schnitzel',
          'tasty schnitzel',
          'https://www.gutekueche.ch/upload/rezept/170/wiener-schnitzel.jpg',
          [new Ingredient('Meat',1), new Ingredient('french fries',10)]),
        new Recipe(
          'Burger',
          'tasty burger',
          'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg',
          [new Ingredient('Bread',1), new Ingredient('Meat',1)])
      ];

      public recipeSelected = new EventEmitter<Recipe>();

      constructor(private shoppingListService: ShoppingListService){}

      getRecipes(): Recipe[]{
        return this.recipes.slice(); //return an exact copy
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }
}