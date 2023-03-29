import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { LoginComponent } from './login.component';

@Component({
  template: `
    <form (submit)="onSubmit()">
      <input type="text" [(ngModel)]="input1" name="input1" />
      <input type="text" [(ngModel)]="input2" name="input2" />
      <button type="submit">Submit</button>
    </form>
  `,
})
class TestComponent {
  input1?: string;
  input2?: string;
  onSubmit() {
    console.log(this.input1, this.input2);
  }
}

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should log input values to console when submit button is clicked', () => {
    spyOn(console, 'log');
    const button = fixture.nativeElement.querySelector('button');
    component.input1 = 'Hello';
    component.input2 = 'World';
    button.click();
    fixture.detectChanges();
    expect(console.log).toHaveBeenCalledWith('Hello', 'World');
  });
});
