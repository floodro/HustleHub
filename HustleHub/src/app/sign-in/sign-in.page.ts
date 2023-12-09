import { Component, OnInit } from '@angular/core';
import { SharedService } from 'shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SigninPage implements OnInit {
  
  constructor(private SharedService: SharedService, private router: Router) {}


  public form = {
    email_address: "",
    password: "",
    confirm: ""
  }

  ngOnInit() {
  }

  backToHome(): void {
      this.router.navigate(['/home']);
  }

  add_accounts() {
    if (this.SharedService.globalUsername.length <= 0 || this.SharedService.globalUsername <= this.SharedService.globalUsername){
      if (this.form.password == this.form.confirm) {
        this.SharedService.globalUsername.push(this.form.email_address);
        this.SharedService.globalPassword.push(this.form.password);

        alert("Accounts added!")
        console.log(this.SharedService.globalUsername);
        console.log(this.SharedService.globalPassword);
      }

      else {
        alert("Passwords do not match!");
      }
    }
  }
}