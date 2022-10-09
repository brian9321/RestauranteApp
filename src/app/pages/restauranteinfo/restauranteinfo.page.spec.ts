import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestauranteinfoPage } from './restauranteinfo.page';

describe('RestauranteinfoPage', () => {
  let component: RestauranteinfoPage;
  let fixture: ComponentFixture<RestauranteinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranteinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestauranteinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
