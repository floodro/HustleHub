// main.page.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss'],
})
export class MainPage {

  jobPostings = [
    {
      title: 'Software Developer',
      companyName: 'Amazon',
      companyLogo: 'logo-amazon',
    },
    {
      title: 'Network Administrator',
      companyName: 'Facebook',
      companyLogo: 'logo-facebook',
    },
    {
      title: 'Front-end Engineer',
      companyName: 'Apple',
      companyLogo: 'logo-apple',
    },
    {
      title: 'Back-end Engineer',
      companyName: 'Twitter',
      companyLogo: 'logo-twitter',
    },
    {
      title: 'Data Analyst',
      companyName: 'Facebook',
      companyLogo: 'logo-facebook',
    },
    {
      title: 'Full-stack Developer',
      companyName: 'Google',
      companyLogo: 'logo-google',
    },
    {
      title: 'Game Designer',
      companyName: 'Twitter',
      companyLogo: 'logo-twitter',
    },
    {
      title: 'Database Administrator',
      companyName: 'Discord',
      companyLogo: 'logo-discord',
    },
    {
      title: 'Cloud Engineer',
      companyName: 'Google',
      companyLogo: 'logo-google',
    },
    {
      title: 'UX Designer',
      companyName: 'Amazon',
      companyLogo: 'logo-amazon',
    },
  ];

  constructor() {}

}
