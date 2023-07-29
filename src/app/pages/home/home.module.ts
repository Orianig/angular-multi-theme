import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HomeComponent } from './home.component';
import { BadgesComponent } from './components/badges/badges.component';
import { SlideTogglesComponent } from './components/slide-toggles/slide-toggles.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BadgesComponent,
    ButtonsComponent,
    HomeComponent,
    SlideTogglesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ]
})
export class HomeModule { }
