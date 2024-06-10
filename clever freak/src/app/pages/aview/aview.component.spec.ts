import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviewComponent } from './aview.component';

describe('AviewComponent', () => {
  let component: AviewComponent;
  let fixture: ComponentFixture<AviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
