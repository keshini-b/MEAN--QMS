import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchangeComponent } from './achange.component';

describe('AchangeComponent', () => {
  let component: AchangeComponent;
  let fixture: ComponentFixture<AchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
