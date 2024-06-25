import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { LandingPageComponent } from './landing-page.component';

@Component({
  standalone: true,
  imports: [LandingPageComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'client';
  ngOnInit(): void {
    initFlowbite();
  }
}
