import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private overlayContainer: OverlayContainer) {
  }

  setTheme(theme: string) {
    this.overlayContainer.getContainerElement().classList.forEach((cls) => {
      if (cls.startsWith('theme-')) {
        this.overlayContainer.getContainerElement().classList.remove(cls);
      }
    });
    this.overlayContainer.getContainerElement().classList.add(theme);
  }
}
