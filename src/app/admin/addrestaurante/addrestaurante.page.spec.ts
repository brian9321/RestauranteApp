import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddrestaurantePage } from './addrestaurante.page';

describe('AddrestaurantePage', () => {
  let component: AddrestaurantePage;
  let fixture: ComponentFixture<AddrestaurantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrestaurantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddrestaurantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
