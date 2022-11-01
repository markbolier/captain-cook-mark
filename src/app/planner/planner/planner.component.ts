import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {

meals = [
    { id: 1, name: 'Incredible Sicilian aubergine stew (Caponata)', size: '2p', img: 'https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/280_1_1438788317.jpg?tr=w-650,h-866' },
    { id: 2, name: 'Incredible Sicilian aubergine stew (Caponata)', size: '2p', img: 'https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/280_1_1438788317.jpg?tr=w-650,h-866' },
    { id: 3, name: 'Incredible Sicilian aubergine stew (Caponata)', size: '2p', img: 'https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/280_1_1438788317.jpg?tr=w-650,h-866' },
    { id: 4, name: 'Incredible Sicilian aubergine stew (Caponata)', size: '2p', img: 'https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/280_1_1438788317.jpg?tr=w-650,h-866' },
    { id: 5, name: 'Incredible Sicilian aubergine stew (Caponata)', size: '2p', img: 'https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/280_1_1438788317.jpg?tr=w-650,h-866' },
];
  
  constructor() { }

  ngOnInit(): void {
  }

}
