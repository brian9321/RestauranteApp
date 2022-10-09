import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstadoaddPage } from './estadoadd.page';

describe('EstadoaddPage', () => {
  let component: EstadoaddPage;
  let fixture: ComponentFixture<EstadoaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoaddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstadoaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
