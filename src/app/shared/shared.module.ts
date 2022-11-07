import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { DropdownComponent } from "./components/dropdown/dropdown.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { AsideComponent } from "./components/aside/aside.component";

@NgModule({
  declarations: [NavigationComponent, DropdownComponent, AsideComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavigationComponent, DropdownComponent, AsideComponent],
})
export class SharedModule {}
