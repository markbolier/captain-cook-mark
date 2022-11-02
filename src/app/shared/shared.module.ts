import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    NavigationComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
