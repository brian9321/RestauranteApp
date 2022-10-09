import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddplatilloPage } from './addplatillo.page';

describe('AddplatilloPage', () => {
  let component: AddplatilloPage;
  let fixture: ComponentFixture<AddplatilloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddplatilloPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddplatilloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
