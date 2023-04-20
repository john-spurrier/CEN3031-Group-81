import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  template: `
    <form (submit)="onSubmit()">
      <input type="text" [(ngModel)]="input1" name="input1" />
      <input type="text" [(ngModel)]="input2" name="input2" />
      <input type="text" [(ngModel)]="input3" name="input3" />
      <input type="text" [(ngModel)]="input4" name="input4" />
      <button type="submit">Submit</button>
    </form>
  `,
})
class TestComponent {
  input1?: string;
  input2?: string;
  input3?: string;
  input4?: string;
  
  onSubmit() {
    console.log(this.input1, this.input2, this.input3, this.input4);
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

  it('should log 4 values to the console with the third value being a select box with 12 options', () => {
    spyOn(console, 'log');
    const button = fixture.nativeElement.querySelector('button');
    component.input1 = 'Hello';
    component.input2 = 'World';
    component.input3 = '12345';
    component.input4 = '12345';
    button.click();
    fixture.detectChanges();
    expect(console.log).toHaveBeenCalledWith('Hello', 'World', '12345', '12345');
  });
});
