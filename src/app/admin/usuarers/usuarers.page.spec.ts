import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsuarersPage } from './usuarers.page';

describe('UsuarersPage', () => {
  let component: UsuarersPage;
  let fixture: ComponentFixture<UsuarersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
