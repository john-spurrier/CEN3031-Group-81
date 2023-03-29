import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermedPackageComponent } from './intermed-package.component';

describe('IntermedPackageComponent', () => {
  let component: IntermedPackageComponent;
  let fixture: ComponentFixture<IntermedPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntermedPackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntermedPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
