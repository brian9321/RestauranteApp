import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddupdaterestaurantePage } from './addupdaterestaurante.page';

describe('AddupdaterestaurantePage', () => {
  let component: AddupdaterestaurantePage;
  let fixture: ComponentFixture<AddupdaterestaurantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddupdaterestaurantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddupdaterestaurantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
