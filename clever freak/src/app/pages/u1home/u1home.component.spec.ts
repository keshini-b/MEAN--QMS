import { ComponentFixture, TestBed } from '@angular/core/testing';

import { U1homeComponent } from './u1home.component';

describe('U1homeComponent', () => {
  let component: U1homeComponent;
  let fixture: ComponentFixture<U1homeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ U1homeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(U1homeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
