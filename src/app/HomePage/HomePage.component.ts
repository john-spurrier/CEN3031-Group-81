import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './HomePage.component.html',
  styleUrls: ['./HomePage.component.css']
})

export class HomePageComponent {
    //constructor(private formId : string) {
      //const form = document.getElementById(formId) as HTMLFormElement;
      //form.addEventListener("submit", this.submitForm.bind(this));
    //}

    private async submitForm(event: Event) {
      event.preventDefault();

      const form = event.target as HTMLFormElement;
      const name = form.elements.namedItem("name") as HTMLInputElement;
      const email = form.elements.namedItem("email") as HTMLInputElement;
      const message = form.elements.namedItem("message") as HTMLTextAreaElement;

      if (!name.value || !email.value || !message.value) {
        alert("Please fill out all fields.");
        return;
      }

      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: name.value,
            email: email.value,
            message: message.value
          })
        });

        if (response.ok) {
          form.reset();
          alert("Form submitted successfully!");
        } else {
          throw new Error("Failed to submit form.");
        }
      } catch (error) {
        console.error(error);
        alert("Failed to submit form. Please try again later.");
      }
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const form = new HomePageComponent();
  });