import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocutionComponent } from './locution.component';

describe('LocutionComponent', () => {
  let component: LocutionComponent;
  let fixture: ComponentFixture<LocutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
