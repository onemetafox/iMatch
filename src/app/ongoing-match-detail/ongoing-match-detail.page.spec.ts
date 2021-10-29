import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnGoingMatchDetailPage } from './ongoing-match-detail.page';

describe('PersonalMatchPage', () => {
  let component: OnGoingMatchDetailPage;
  let fixture: ComponentFixture<OnGoingMatchDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnGoingMatchDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnGoingMatchDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
