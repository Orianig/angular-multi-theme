import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-slide-toggles',
  templateUrl: './slide-toggles.component.html',
  styleUrls: ['./slide-toggles.component.scss']
})
export class SlideTogglesComponent {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  userName = '';
}
