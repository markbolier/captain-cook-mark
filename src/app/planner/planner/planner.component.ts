import { Component, OnInit } from "@angular/core";
import { PlannedService } from "src/app/shared/services/planned.service";

@Component({
  selector: "app-planner",
  templateUrl: "./planner.component.html",
  styleUrls: ["./planner.component.scss"],
})
export class PlannerComponent implements OnInit {
  plannedMeals: any[] = [];
  addMeal() {}
  onDelete(id: number) {}

  constructor(private plannedService: PlannedService) {}

  ngOnInit() {
    this.plannedMeals = this.plannedService.plannedMeals;
    this.addMeal = this.plannedService.addMeal;
    this.onDelete = this.plannedService.onDelete;
  }
}
