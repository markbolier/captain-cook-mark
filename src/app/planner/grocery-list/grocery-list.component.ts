import { Component, OnInit } from "@angular/core";
import { PlannedService } from "src/app/shared/services/planned.service";

@Component({
  selector: "app-grocery-list",
  templateUrl: "./grocery-list.component.html",
  styleUrls: ["./grocery-list.component.scss"],
})
export class GroceryListComponent implements OnInit {
  groceryList: any[] = [];

  constructor(private plannedService: PlannedService) {}

  ngOnInit() {
    this.groceryList = this.plannedService.groceryList;
    console.log(this.groceryList);

    this.plannedService.$groceryListChanges.subscribe((newGroceriesArray: any[]) => {
      this.groceryList = newGroceriesArray;
    });
  }
}
