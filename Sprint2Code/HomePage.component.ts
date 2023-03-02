import {Component, Inject, Injectable} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './HomePage.component.html',
  styleUrls: ['./HomePage.component.css']
})

export class HomePageComponent {
    constructor() {
      const element = document.getElementById("contact");
      element?.addEventListener("submit", this.listenerFunction);
    }

    async listenerFunction(this: HTMLElement, ev: Event) {
      ev.preventDefault();
      const form = ev.target as HTMLFormElement;
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
          window.location.href="/thanks";
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
