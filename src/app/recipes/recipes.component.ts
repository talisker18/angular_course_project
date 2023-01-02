import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService] //service is used in the childs of RecipesComponent
})
export class RecipesComponent implements OnInit{
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService){}

  ngOnInit(): void {
    //setup the listener for the recipeSelected event defined in the recipeService
    this.recipeService.recipeSelected.subscribe( //the event is published by recipe-item
      (recipe: Recipe) => { //must match the type of the event -> public recipeSelected = new EventEmitter<Recipe>();
        this.selectedRecipe = recipe; //this selected recispe = recipe from the event
      }
    );
  }

}
