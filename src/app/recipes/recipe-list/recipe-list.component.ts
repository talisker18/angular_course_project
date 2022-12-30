import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  //type script define type of array, in this case Recipe objects
  recipes: Recipe[] = [
    new Recipe('A Test Recipe #1', 'Test 1','https://i0.hippopx.com/photos/891/700/843/asparagus-italy-piemonte-piedmont-preview.jpg'),
    new Recipe('A Test Recipe #2', 'Tes 2','https://i0.hippopx.com/photos/891/700/843/asparagus-italy-piemonte-piedmont-preview.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe){ //here we need the information which recipe was selected within the loop
    //emit another event because we have to pass the information to the recipe.component
    this.recipeWasSelected.emit(recipe);
  }

}
