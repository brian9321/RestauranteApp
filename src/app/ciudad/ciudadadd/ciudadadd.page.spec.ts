import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CiudadaddPage } from './ciudadadd.page';

describe('CiudadaddPage', () => {
  let component: CiudadaddPage;
  let fixture: ComponentFixture<CiudadaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiudadaddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CiudadaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
