import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlogComponent } from './alog.component';

describe('AlogComponent', () => {
  let component: AlogComponent;
  let fixture: ComponentFixture<AlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
