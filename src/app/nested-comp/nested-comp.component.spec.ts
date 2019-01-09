import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedCompComponent } from './nested-comp.component';

describe('NestedCompComponent', () => {
  let component: NestedCompComponent;
  let fixture: ComponentFixture<NestedCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
