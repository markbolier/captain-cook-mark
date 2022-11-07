import { Component, OnInit } from "@angular/core";
import { PlannedService } from "src/app/shared/services/planned.service";

@Component({
  selector: "app-planner",
  templateUrl: "./planner.component.html",
  styleUrls: ["./planner.component.scss"],
})
export class PlannerComponent implements OnInit {
  recipes: any[] = [];
  addRecipe() {}
  onDelete(id: number) {}

  constructor(private plannedService: PlannedService) {}

  ngOnInit() {
    this.recipes = this.plannedService.recipes;
    this.addRecipe = this.plannedService.addRecipe;
    this.onDelete = this.plannedService.onDelete;
  }
}
