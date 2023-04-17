import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageBoughtComponent } from './package-bought.component';

describe('PackageBoughtComponent', () => {
  let component: PackageBoughtComponent;
  let fixture: ComponentFixture<PackageBoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageBoughtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageBoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
