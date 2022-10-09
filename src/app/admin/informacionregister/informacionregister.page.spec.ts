import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformacionregisterPage } from './informacionregister.page';

describe('InformacionregisterPage', () => {
  let component: InformacionregisterPage;
  let fixture: ComponentFixture<InformacionregisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionregisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformacionregisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
