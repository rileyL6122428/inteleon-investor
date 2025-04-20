import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentLeaderboardComponent } from './current-leaderboard.component';

describe('CurrentLeaderboardComponent', () => {
  let component: CurrentLeaderboardComponent;
  let fixture: ComponentFixture<CurrentLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentLeaderboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
