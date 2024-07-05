import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InstanceOptions, Modal, ModalInterface, ModalOptions } from 'flowbite';

@Component({
  selector: 'app-first-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-modal.component.html',
  styleUrl: './first-modal.component.scss',
})
export class FirstModalComponent implements OnInit {
  $modalElement: HTMLElement | null = null;

  modal: ModalInterface | null = null;

  ngOnInit(): void {
    this.$modalElement = document.querySelector('#modalEl');
    this.modal = new Modal(
      this.$modalElement,
      {
        placement: 'top-center',
        backdrop: 'static',
        closable: false,
      } as ModalOptions,
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
