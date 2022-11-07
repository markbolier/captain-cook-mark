import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PlannedService {
  recipes = [
    {
      id: 1,
      name: "Caponata",
      size: "2p",
      img: "https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/280_1_1438788317.jpg?tr=w-650,h-866",
      ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3", "Ingredient 4", "Ingredient 5"],
    },
    {
      id: 2,
      name: "Hamburger",
      size: "2p",
      img: "https://assets.biggreenegg.eu/app/uploads/2019/03/28145521/topimage-classic-hamburger-2019m04-800x534-600x401.jpg",
      ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3", "Ingredient 4", "Ingredient 5"],
    },
    {
      id: 3,
      name: "Pizza",
      size: "2p",
      img: "https://realfood.tesco.com/media/images/1400x919-MargaritaPizza-555a4065-2573-4b41-bcf3-7193cd095d8f-0-1400x919.jpg",
      ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3", "Ingredient 4", "Ingredient 5"],
    },
    {
      id: 4,
      name: "Omelet",
      size: "2p",
      img: "https://static.ah.nl/static/recepten/img_103723_1024x748_JPG.jpg",
      ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3", "Ingredient 4", "Ingredient 5"],
    },
    {
      id: 5,
      name: "Sushi",
      size: "2p",
      img: "https://ohmyfoodness.nl/wp-content/uploads/2022/06/krokant_gefrituurde-sushi-feat.jpg",
      ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3", "Ingredient 4", "Ingredient 5"],
    },
  ];

  addRecipe() {
    this.recipes.push({ id: Math.random(), name: "", size: "", img: "", ingredients: [] });
  }

  onDelete(id: number) {
    const deletedRecipe = this.recipes.findIndex((recipe) => recipe.id === id);
    this.recipes.splice(deletedRecipe, 1);
  }

  constructor() {}
}
