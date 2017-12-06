import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewConponentComponent } from './my-new-conponent.component';

describe('MyNewConponentComponent', () => {
  let component: MyNewConponentComponent;
  let fixture: ComponentFixture<MyNewConponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewConponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewConponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
