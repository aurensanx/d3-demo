import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicGeoComponent } from './basic-geo.component';

describe('BasicGeoComponent', () => {
  let component: BasicGeoComponent;
  let fixture: ComponentFixture<BasicGeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicGeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicGeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
