import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-application',
  templateUrl: './application.page.html',
  styleUrls: ['./application.page.scss'],
})
export class ApplicationPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  
  applicant: any ={};

  submitForm() {
    // Handle form submission, e.g., send data to a server
    console.log('Submitted data:', this.applicant);
    // Additional logic, such as displaying a success message or navigating to another page
  }
  cancelForm() {
    // Handle form cancellation, e.g., clear the form and navigate back
    this.applicant = ""; // Clear form data
    this.navCtrl.back(); // Navigate back to the previous page
  }



  ngOnInit() {
  }

}
