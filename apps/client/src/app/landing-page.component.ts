import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { OutsideDirective } from './outside.directive';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, OutsideDirective],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent implements OnInit {
  ngOnInit(): void {
    console.log('Landing page component initialized');
  }

  handleOutsideClick(): void {
    console.log('clicked outside');
  }

  clearInput(): void {
    console.log('clear input');
  } 
}
