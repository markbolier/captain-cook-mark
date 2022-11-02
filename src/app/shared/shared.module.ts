import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    NavigationComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class SharedModule { }
