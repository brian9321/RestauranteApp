import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CiudadlistPage } from './ciudadlist.page';

describe('CiudadlistPage', () => {
  let component: CiudadlistPage;
  let fixture: ComponentFixture<CiudadlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiudadlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CiudadlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
