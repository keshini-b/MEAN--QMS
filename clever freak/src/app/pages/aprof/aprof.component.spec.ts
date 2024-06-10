import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprofComponent } from './aprof.component';

describe('AprofComponent', () => {
  let component: AprofComponent;
  let fixture: ComponentFixture<AprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprofComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
