import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UchangeComponent } from './uchange.component';

describe('UchangeComponent', () => {
  let component: UchangeComponent;
  let fixture: ComponentFixture<UchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UchangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
