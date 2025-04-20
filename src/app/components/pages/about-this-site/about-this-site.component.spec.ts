import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutThisSiteComponent } from './about-this-site.component';

describe('AboutThisSiteComponent', () => {
  let component: AboutThisSiteComponent;
  let fixture: ComponentFixture<AboutThisSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutThisSiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutThisSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
