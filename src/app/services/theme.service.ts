import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private overlayContainer: OverlayContainer) {
  }

  setTheme(theme: string) {
    // Todo: Cambiar tema de color y guardar color en local storage
  }
}
