import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-multi-theme';
  isDarkMode = true;
  isMobile: Boolean = false;

  constructor() {
    this.toggleTheme();
    this.verifyWindowResize();
  }

  verifyWindowResize() {
    this.isMobile = window.innerWidth <= 980;
  }

  // Esto solo a modo de desarrollo, en otras condiciones debería ser un método que se ejecuta 1 sola vez en el constructor
  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //   this.isMobile = window.innerWidth <= 980;
  // }

  toggleTheme() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-theme'); // Agregar la clase global para dark mode
    } else {
      document.body.classList.remove('dark-theme'); // Quitar la clase global para dark mode
    }
  }
}
