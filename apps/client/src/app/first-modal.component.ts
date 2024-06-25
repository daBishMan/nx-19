import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-modal.component.html',
  styleUrl: './first-modal.component.scss',
})
export class FirstModalComponent {}
