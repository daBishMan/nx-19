import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-first-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-modal.component.html',
  styleUrl: './first-modal.component.scss',
})
export class FirstModalComponent {
  private readonly modalService = inject(ModalService);

  hide() {
    this.modalService.dismiss();
  }
}
