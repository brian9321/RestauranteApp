import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaislistPage } from './paislist.page';

describe('PaislistPage', () => {
  let component: PaislistPage;
  let fixture: ComponentFixture<PaislistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaislistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaislistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
