import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterPackageComponent } from './starter-package.component';

describe('StarterPackageComponent', () => {
  let component: StarterPackageComponent;
  let fixture: ComponentFixture<StarterPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarterPackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarterPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
