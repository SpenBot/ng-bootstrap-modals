import { Component, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { NestedCompComponent } from '../nested-comp/nested-comp.component';


@Component({
  selector: 'app-proxy-modal',
  template: `

  <div class="modal-header">
    <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>

  <app-nested-comp [name]="name"></app-nested-comp>

  <div class="modal-footer">
    <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
  </div>

  `
})
export class ProxyModalComponent {

  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}

}
