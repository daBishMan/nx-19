import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { FirstModalComponent } from './first-modal.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent {
  private readonly modalService = inject(ModalService);

  showModal(): void {
    this.modalService
      .create({
        component: FirstModalComponent,
      })
      .show();
  }

  hideModal(): void {
    this.modalService.dismiss();
  }
}
