import { Component } from '@angular/core';
import { MainComponent } from './layout/main/main.component';

@Component({
  selector: 'app-root',
  imports: [MainComponent],
  template: `<app-main></app-main>`,
})
export class AppComponent {
  title = 'desafio-angular';
}
