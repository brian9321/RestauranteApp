import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategorialistPage } from './categorialist.page';

describe('CategorialistPage', () => {
  let component: CategorialistPage;
  let fixture: ComponentFixture<CategorialistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorialistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategorialistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
