import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WealthDistPieComponent } from './wealth-dist-pie.component';

describe('WealthDistPieComponent', () => {
  let component: WealthDistPieComponent;
  let fixture: ComponentFixture<WealthDistPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WealthDistPieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WealthDistPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
