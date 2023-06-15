import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recipes';

  // Array of objects of type Recipe
  recipes: Recipe[] = [{ name: 'a', ingredients: 'b', description: 'c' }];

  // Object of type recipe
  recipe: Recipe = {
    name: '',
    ingredients: '',
    description: '',
  };

  addRecipe(): void {
    this.recipes.push(this.recipe);
    this.recipe = { name: '', ingredients: '', description: '' };
  }
}
