import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonInvestmentsListComponent } from './pokemon-investments-list.component';

describe('PokemonInvestmentsListComponent', () => {
  let component: PokemonInvestmentsListComponent;
  let fixture: ComponentFixture<PokemonInvestmentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonInvestmentsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonInvestmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
