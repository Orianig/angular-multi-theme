import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-multi-theme';
  isDarkMode = false;
  lightIcon = 'wb_sunny';
  darkIcon = 'nights_stay';
  

  toggleTheme() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-theme'); // Agregar la clase global para dark mode
    } else {
      document.body.classList.remove('dark-theme'); // Quitar la clase global para dark mode
    }
  }
}
