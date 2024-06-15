import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page.component';

@Component({
  standalone: true,
  imports: [LandingPageComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';
}
