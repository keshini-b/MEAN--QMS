import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UviewComponent } from './uview.component';

describe('UviewComponent', () => {
  let component: UviewComponent;
  let fixture: ComponentFixture<UviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
