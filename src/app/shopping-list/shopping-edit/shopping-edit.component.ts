import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef; //refers to the local reference in the html file
  @ViewChild('amountInput') amountInputRef: ElementRef; //refers to the local reference in the html file

  //@Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>(); //own type definition between <>
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem(){
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value); //const instead of let because it is final
    this.ingredientAdded.emit(newIngredient);

  }

}
