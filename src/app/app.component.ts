import { Component } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SepCompTemplateComponent } from './sep-comp-template/sep-comp-template.component';
import { SepCompTemplateUrlComponent } from './sep-comp-template-url/sep-comp-template-url.component';

import { ProxyModalComponent } from './proxy-modal/proxy-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  constructor(private modalService: NgbModal) {}

  openTemplate() {
    const modalRef = this.modalService.open(SepCompTemplateComponent);
    modalRef.componentInstance.name = 'Spen2';
  }

  openTemplateUrl() {
    const modalRef = this.modalService.open(SepCompTemplateUrlComponent);
    modalRef.componentInstance.name = 'Spen3';
  }

  openNestedComp() {
    const modalRef = this.modalService.open(ProxyModalComponent, { size: 'lg' });
    modalRef.componentInstance.name = 'Spen4';
  }

}
