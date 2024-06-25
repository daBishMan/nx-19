import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import type { InstanceOptions, ModalInterface, ModalOptions } from 'flowbite';
import { Modal } from 'flowbite';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent implements OnInit {
  $modalElement: HTMLElement | null = null;

  modal: ModalInterface | null = null;

  ngOnInit(): void {
    this.$modalElement = document.querySelector('#modalEl');
    this.modal = new Modal(
      this.$modalElement,
      { placement: 'top-center' } as ModalOptions,
      {
        id: 'modalEl',
        override: true,
      } as InstanceOptions
    );
  }

  showModal(): void {
    console.log('toggle modal method');
    this.modal?.show();
  }

  hideModal(): void {
    console.log('hide modal method');
    this.modal?.hide();
  }
}
