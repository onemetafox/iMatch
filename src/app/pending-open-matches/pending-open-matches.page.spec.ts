import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PendingOpenMatchesPage } from './pending-open-matches.page';

describe('PendingOpenMatchesPage', () => {
  let component: PendingOpenMatchesPage;
  let fixture: ComponentFixture<PendingOpenMatchesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PendingOpenMatchesPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PendingOpenMatchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
