import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFacturesComponent } from './detail-factures.component';

describe('DetailFacturesComponent', () => {
  let component: DetailFacturesComponent;
  let fixture: ComponentFixture<DetailFacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFacturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
