import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SViewProfileComponent } from './sview-profile.component';

describe('SViewProfileComponent', () => {
  let component: SViewProfileComponent;
  let fixture: ComponentFixture<SViewProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SViewProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
