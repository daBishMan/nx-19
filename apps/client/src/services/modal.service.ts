import {
  ApplicationRef,
  Component,
  ComponentRef,
  createComponent,
  effect,
  inject,
  Injectable,
  Injector,
  signal,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private readonly modalVisibleStatus = signal<'open' | 'closed'>('closed');
  private readonly modalVisibleStatusChanged = effect(() => {
    const visible = this.modalVisibleStatus();
    switch (visible) {
      case 'open':
        console.log('Modal is now open');
        break;
      case 'closed':
        console.log('Modal is now closed');
        break;
    }
  });
  private readonly appRef = inject(ApplicationRef);
  private readonly componentRef = signal<ComponentRef<any> | undefined>(
    undefined
  );

  create(options: ModalOptions) {
    const element = document.createElement('div');
    element.setAttribute('id', 'app-modal');
    element.setAttribute('role', 'dialog');
    element.setAttribute('aria-label', 'modal');
    element.setAttribute('aria-hidden', 'true');
    const body = document.querySelector('body');
    if (body) {
      body.append(element);
    }
    this.componentRef.set(
      createComponent(options.component, {
        hostElement: document.getElementById('app-modal') ?? undefined,
        environmentInjector: this.appRef.injector,
      })
    );

    return {
      show: () => {
        this.appRef.attachView(this.componentRef()!.hostView);
        this.modalVisibleStatus.set('open');
      },
      hide: () => {
        this.componentRef()!.destroy();
        this.modalVisibleStatus.set('closed');
      },
      status: this.modalVisibleStatus,
    };
  }

  dismiss() {
    if (this.componentRef()) {
      this.componentRef()!.destroy();
      this.componentRef.set(undefined);
      this.modalVisibleStatus.set('closed');
    }
  }
}

export interface ModalOptions {
  component: any; // TODO: check the right type
}
