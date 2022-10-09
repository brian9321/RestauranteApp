import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstadolistPage } from './estadolist.page';

describe('EstadolistPage', () => {
  let component: EstadolistPage;
  let fixture: ComponentFixture<EstadolistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadolistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstadolistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
