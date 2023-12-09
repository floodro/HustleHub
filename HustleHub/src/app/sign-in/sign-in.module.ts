import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninPageRoutingModule } from './sign-in-routing.module';

import { SigninPage } from './sign-in.page';

@NgModule({
imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninPageRoutingModule
],
declarations: [SigninPage]
})
export class SigninPageModule {}
