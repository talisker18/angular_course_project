import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  //type script define type of array, in this case Recipe objects
  //in v1, recipes are managed by recipe-list.component. In new version, the array is managed by the recipe.service
  recipes: Recipe[];

  constructor(private recipeService: RecipeService){}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes(); //get COPY
  }

}
