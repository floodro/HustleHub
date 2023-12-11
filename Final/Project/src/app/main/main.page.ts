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
      companyName: 'Tech Co.',
      companyLogo: 'logo-github-large',
    },
    {
      title: 'Marketing Specialist',
      companyName: 'Marketing Pro',
      companyLogo: 'logo-twitter-large',
    },
    // Add more job postings as needed
  ];

  constructor() {}

}
