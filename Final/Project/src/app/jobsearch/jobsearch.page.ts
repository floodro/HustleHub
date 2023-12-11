import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobsearch',
  templateUrl: './jobsearch.page.html',
  styleUrls: ['./jobsearch.page.scss'],
})
export class JobsearchPage implements OnInit {
  selectedJobType: string;

  jobTypes = [
    { label: 'Administrative Work', value: 'admin' },
    { label: 'Hospitality', value: 'hospitality' },
    { label: 'Food and Beverage', value: 'f&b'},
    { label: 'Retail', value: 'retail'},
    { label: 'Services', value: 'services'},
    { label: 'Transportation', value: 'transportation'},
    { label: 'Sales', value: 'sales'},
    { label: 'Information Technology', value: 'infotech'},
    { label: 'Events', value: 'events'},
    { label: 'Insurance', value: 'insurance'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
