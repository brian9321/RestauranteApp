import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaisaddPage } from './paisadd.page';

describe('PaisaddPage', () => {
  let component: PaisaddPage;
  let fixture: ComponentFixture<PaisaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisaddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaisaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
