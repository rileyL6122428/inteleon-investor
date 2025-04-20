import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteleonIconComponent } from './inteleon-icon.component';

describe('InteleonIconComponent', () => {
  let component: InteleonIconComponent;
  let fixture: ComponentFixture<InteleonIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteleonIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteleonIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
