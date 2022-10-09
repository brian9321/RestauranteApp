import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestauranteslistPage } from './restauranteslist.page';

describe('RestauranteslistPage', () => {
  let component: RestauranteslistPage;
  let fixture: ComponentFixture<RestauranteslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranteslistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestauranteslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
