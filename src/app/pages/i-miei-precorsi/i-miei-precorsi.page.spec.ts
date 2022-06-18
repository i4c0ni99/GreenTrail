import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IMieiPrecorsiPage } from './i-miei-precorsi.page';

describe('IMieiPrecorsiPage', () => {
  let component: IMieiPrecorsiPage;
  let fixture: ComponentFixture<IMieiPrecorsiPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IMieiPrecorsiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IMieiPrecorsiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
