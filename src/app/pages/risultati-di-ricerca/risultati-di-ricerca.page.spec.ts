import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RisultatiDiRicercaPage } from './risultati-di-ricerca.page';

describe('RisultatiDiRicercaPage', () => {
  let component: RisultatiDiRicercaPage;
  let fixture: ComponentFixture<RisultatiDiRicercaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RisultatiDiRicercaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RisultatiDiRicercaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
