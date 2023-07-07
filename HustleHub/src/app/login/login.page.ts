import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})  
export class LoginPage implements OnInit {

  
  constructor(private router: Router, private SharedService: SharedService) {}


  public form = {
    email_address: "",
    password: "",
  }

  ngOnInit() {
  }

  backToHome(): void {
    this.router.navigate(['/home']);
  }


  checkLogin() {
    const isValid =this.validateAccount();
    
    if(isValid){
      
      this.router.navigateByUrl('/main');
    }else{
      alert("Incorrect username or password, Please try again. ");
      this.router.navigateByUrl('/login');
     
    }
    
  }
  private validateAccount(): boolean{
    
    const index  = this.SharedService.globalUsername.findIndex((user: string) => user === this.form.email_address);

    return index !== -1 && this.SharedService.globalPassword[index] === this.form.password;
  }
}
