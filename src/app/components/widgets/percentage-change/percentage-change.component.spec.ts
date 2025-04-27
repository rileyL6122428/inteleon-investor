import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageChangeComponent } from './percentage-change.component';

describe('PercentageChangeComponent', () => {
  let component: PercentageChangeComponent;
  let fixture: ComponentFixture<PercentageChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercentageChangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercentageChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
