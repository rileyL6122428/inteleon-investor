import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestInPokemonComponent } from './invest-in-pokemon.component';

describe('InvestInPokemonComponent', () => {
  let component: InvestInPokemonComponent;
  let fixture: ComponentFixture<InvestInPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestInPokemonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestInPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
