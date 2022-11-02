import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {

recipes = [
    { id: 1, name: 'Caponata', size: '2p', img: 'https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/280_1_1438788317.jpg?tr=w-650,h-866' },
    { id: 2, name: 'Hamburger', size: '2p', img: 'https://assets.biggreenegg.eu/app/uploads/2019/03/28145521/topimage-classic-hamburger-2019m04-800x534-600x401.jpg' },
    { id: 3, name: 'Pizza', size: '2p', img: 'https://realfood.tesco.com/media/images/1400x919-MargaritaPizza-555a4065-2573-4b41-bcf3-7193cd095d8f-0-1400x919.jpg' },
    { id: 4, name: 'Omelet', size: '2p', img: 'https://static.ah.nl/static/recepten/img_103723_1024x748_JPG.jpg' },
    { id: 5, name: 'Sushi', size: '2p', img: 'https://ohmyfoodness.nl/wp-content/uploads/2022/06/krokant_gefrituurde-sushi-feat.jpg' },
];
  
  addRecipe() {
    this.recipes.push({id: 6, name: 'New recipe', size: '2p', img: 'none'});
  }

  onDelete(id: number) {
    const deletedRecipe = this.recipes.findIndex((recipe) => recipe.id === id);
    this.recipes.splice(deletedRecipe, 1);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
