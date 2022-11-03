import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    NavigationComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigationComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
