import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallErrorComponent } from './small-error.component';

describe('SmallErrorComponent', () => {
  let component: SmallErrorComponent;
  let fixture: ComponentFixture<SmallErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
