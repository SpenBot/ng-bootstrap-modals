import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SepCompTemplateComponent } from './sep-comp-template.component';

describe('SepCompTemplateComponent', () => {
  let component: SepCompTemplateComponent;
  let fixture: ComponentFixture<SepCompTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SepCompTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SepCompTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
