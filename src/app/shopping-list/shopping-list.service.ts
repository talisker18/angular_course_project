import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

//service is declared in app.module because we need this service also in other services
export class ShoppingListService{
    private ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatos',10)
      ];

      ingredientsChanged = new EventEmitter<Ingredient[]>(); //event to notify that the Ingredient array should be loaded again because it has changes. Event is published here in the addIngredient method
      //event is consumed in shopping-list.component

      getIngredients(): Ingredient[]{
        return this.ingredients.slice(); //return a COPY
      }

      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]): void{
        //disadvantage of the loop: we emit a lot of events, can lead to performance issues
        /*for(let currentIngredient of ingredients){
          this.addIngredient(currentIngredient);
        }*/

        //better approach
        this.ingredients.push(...ingredients); //turn an array of elements into a list of elements with the 'spread operator' (...)
        this.ingredientsChanged.emit(this.ingredients.slice()); //pass a COPY
      }
}