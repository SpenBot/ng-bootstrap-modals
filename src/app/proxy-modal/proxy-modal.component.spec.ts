import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxyModalComponent } from './proxy-modal.component';

describe('ProxyModalComponent', () => {
  let component: ProxyModalComponent;
  let fixture: ComponentFixture<ProxyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProxyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProxyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
