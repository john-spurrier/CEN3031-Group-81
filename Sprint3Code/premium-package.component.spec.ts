import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumPackageComponent } from './premium-package.component';

describe('PremiumPackageComponent', () => {
  let component: PremiumPackageComponent;
  let fixture: ComponentFixture<PremiumPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiumPackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiumPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
