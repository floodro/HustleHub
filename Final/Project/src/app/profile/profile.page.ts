import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  userData: any = {
    name: '',
    email: '',
    contact_number: '',
    address: '',
    profilePicture: null,
    resume: null,
  };

  isEditing: boolean = false;

  constructor() {
    // Retrieve user data from localStorage if available
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      this.userData = JSON.parse(storedUserData);
    }
  }

  editProfile() {
    this.isEditing = true;
  }

  saveUserData() {
    this.isEditing = false;

    // Save user data to localStorage
    localStorage.setItem('userData', JSON.stringify(this.userData));
  }

  onPictureUpload(event: any) {
    const file = event.target.files[0];
    // Perform any picture upload logic here
    // For simplicity, we'll just set the profilePicture directly
    this.userData.profilePicture = URL.createObjectURL(file);
  }

  clearProfilePicture() {
    this.userData.profilePicture = null;
  }

  onResumeUpload(event: any) {
    const file = event.target.files[0];
    // Perform any resume upload logic here
    // For simplicity, we'll just set the resume file URL directly
    this.userData.resume = URL.createObjectURL(file);
  }

  clearResume() {
    // Clear the resume file
    this.userData.resume = null;
  }

  viewResume() {
    // You can implement logic to open the resume in a new tab or display it in a modal
    // For simplicity, we'll just open it in a new tab
    window.open(this.userData.resume, '_blank');
  }

  encryptEmail(email: string): string {
    // Add your email encryption logic here if needed
    return email;
  }
}
