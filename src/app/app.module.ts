import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ModalBuiltInComponent } from './modal-built-in/modal-built-in.component';
import { NgbdModalContent } from './modal-built-in/modal-built-in.component';

import { SepCompTemplateComponent } from './sep-comp-template/sep-comp-template.component';
import { SepCompTemplateUrlComponent } from './sep-comp-template-url/sep-comp-template-url.component';

import { ProxyModalComponent } from './proxy-modal/proxy-modal.component';
import { NestedCompComponent } from './nested-comp/nested-comp.component';




@NgModule({
  declarations: [
    AppComponent,
    ModalBuiltInComponent,
    NgbdModalContent,
    SepCompTemplateComponent,
    SepCompTemplateUrlComponent,
    ProxyModalComponent,
    NestedCompComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    NgbdModalContent,
    SepCompTemplateComponent,
    SepCompTemplateUrlComponent,
    ProxyModalComponent
  ]
})
export class AppModule { }
