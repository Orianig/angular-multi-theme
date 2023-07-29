import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent {

  constructor(private themeService: ThemeService) {}

  changeTheme(themeName: string) {
    this.themeService.setTheme(themeName);
  }
}
