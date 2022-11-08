import { Component, OnInit } from "@angular/core";
import { PlannedService } from "src/app/shared/services/planned.service";

@Component({
  selector: "app-planner",
  templateUrl: "./planner.component.html",
  styleUrls: ["./planner.component.scss"],
})
export class PlannerComponent implements OnInit {
  plannedMeals: any[] = [];
  addMeal() {
    this.plannedService.addMeal();
  }
  onDelete(id: number) {
    this.plannedService.onDelete(id);
  }

  constructor(private plannedService: PlannedService) {}

  ngOnInit() {
    this.plannedMeals = this.plannedService.plannedMeals;

    this.plannedService.$plannedMealsChanges.subscribe((newMealsArray: any[]) => {
      this.plannedMeals = newMealsArray;
    });
  }
}
