import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'shared.service';
import { AlertController } from '@ionic/angular';  

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})  
export class LoginPage implements OnInit {

  
  constructor(private router: Router, private SharedService: SharedService, public alertCtrl: AlertController) {}


  public form = {
    email_address: "",
    password: "",
  }

  async showAlert() {  
    const alert = await this.alertCtrl.create({  
      header: 'Alert',  
      subHeader: 'SubTitle',  
      message: 'This is an alert message',  
      buttons: ['OK']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);  
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
      this.showAlert();
      this.router.navigateByUrl('/login');
     
    }
    
  }
  private validateAccount(): boolean{
    
    const index  = this.SharedService.globalUsername.findIndex((user: string) => user === this.form.email_address);

    return index !== -1 && this.SharedService.globalPassword[index] === this.form.password;
  }
}
