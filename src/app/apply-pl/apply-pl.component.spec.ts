import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyPlComponent } from './apply-pl.component';

describe('ApplyPlComponent', () => {
  let component: ApplyPlComponent;
  let fixture: ComponentFixture<ApplyPlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyPlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyPlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
