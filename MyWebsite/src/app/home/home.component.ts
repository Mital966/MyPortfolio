import { Component, OnInit } from '@angular/core';
import { Environment } from '../environment';
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  imagePath: any = Environment.serviceUrl;
  date: any;
  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor() {


  }


  ngOnInit(): void {
    this.date = new Date().getFullYear();

  }


  scrollPage() {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  }

  sendEmail(event: Event) {
    debugger
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values from template reference variables
    const formData = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      message: (document.getElementById('message') as HTMLTextAreaElement).value
    };

    const templateParams = {
      to_name: "Gyana",
      from_name: formData.name,
      message: formData.message,
      reply_to: formData.email,
    };


    console.log('Form data:', formData); // You can log the form data for debugging

    // EmailJS service call
    emailjs.send('portfolioService', 'template_kj4rv2u', templateParams, 'qbJ09Tf8AWxWHdd4R')
      .then((result: any) => {
        console.log('Success:', result.text);
        alert('Your message has been sent successfully!');
      }, (error: any) => {
        console.log('Error:', error.text);
        alert('Oops! Something went wrong.');
      });
  }

  scrollToNextSection(): void {
    const nextSection = document.getElementById('contactDiv');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
