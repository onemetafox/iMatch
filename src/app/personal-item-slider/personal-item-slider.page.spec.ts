import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalItemSlider } from './personal-item-slider.page';

describe('PersonalMatchPage', () => {
  let component: PersonalItemSlider;
  let fixture: ComponentFixture<PersonalItemSlider>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalItemSlider ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalItemSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
