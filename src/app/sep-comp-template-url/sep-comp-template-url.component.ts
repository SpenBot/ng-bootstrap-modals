import { Component, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-sep-comp-template-url',
  templateUrl: './sep-comp-template-url.component.html',
  styleUrls: ['./sep-comp-template-url.component.css']
})



export class SepCompTemplateUrlComponent {

  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}

}
