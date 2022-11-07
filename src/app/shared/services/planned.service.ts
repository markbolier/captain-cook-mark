import { Injectable } from "@angular/core";
import { provideProtractorTestingSupport } from "@angular/platform-browser";
const { of } = require("rxjs");

@Injectable({
  providedIn: "root",
})
export class PlannedService {
  plannedMeals = [
    {
      id: 1,
      name: "Caponata",
      size: "2p",
      img: "https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/280_1_1438788317.jpg?tr=w-650,h-866",
      ingredients: [
        { amount: "1", name: "Ingredient 1" },
        { amount: "1", name: "Ingredient 2" },
        { amount: "1", name: "Ingredient 3" },
        { amount: "1", name: "Ingredient 4" },
        { amount: "1", name: "Ingredient 5" },
      ],
    },
    {
      id: 2,
      name: "Hamburger",
      size: "2p",
      img: "https://assets.biggreenegg.eu/app/uploads/2019/03/28145521/topimage-classic-hamburger-2019m04-800x534-600x401.jpg",
      ingredients: [
        { amount: "1", name: "Ingredient 1" },
        { amount: "1", name: "Ingredient 2" },
        { amount: "1", name: "Ingredient 3" },
        { amount: "1", name: "Ingredient 4" },
        { amount: "1", name: "Ingredient 5" },
      ],
    },
    {
      id: 3,
      name: "Pizza",
      size: "2p",
      img: "https://realfood.tesco.com/media/images/1400x919-MargaritaPizza-555a4065-2573-4b41-bcf3-7193cd095d8f-0-1400x919.jpg",
      ingredients: [
        { amount: "1", name: "Ingredient 1" },
        { amount: "1", name: "Ingredient 2" },
        { amount: "1", name: "Ingredient 3" },
        { amount: "1", name: "Ingredient 4" },
        { amount: "1", name: "Ingredient 5" },
      ],
    },
  ];

  groceryList = [...this.plannedMeals.map((meal) => meal.ingredients).flat()];

  $plannedMealsChanges = of(this.plannedMeals);

  $groceryListChanges = of(this.groceryList);

  addMeal() {
    this.plannedMeals.push({ id: Math.random(), name: "", size: "", img: "", ingredients: [] });
  }

  onDelete(id: number) {
    const deletedMeal = this.plannedMeals.findIndex((meal) => meal.id === id);
    this.plannedMeals.splice(deletedMeal, 1);
  }

  constructor() {}
}
