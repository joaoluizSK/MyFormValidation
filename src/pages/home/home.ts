import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyFormService } from '../../services/myform';
import { ThankyouPage } from '../thankyou/thankyou';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private data: any;
  private isSubmitted: Boolean = false;

  constructor(public navCtrl: NavController,
              private formService: MyFormService) {
    this.navCtrl = navCtrl;
    this.formService = formService;
    this.data = {
      name: '',
      phone: '',
      comment: '',
      tos: false
    }
  }

  onSubmit(myForm){
    this.isSubmitted = true;
    console.log('onSubmit');
    console.log(myForm);
    if((myForm.valid) && (myForm.value.tos)){
      this.formService.name = this.data.name;
      this.formService.phone = this.data.phone;
      this.formService.comment = this.data.comment;
      this.navCtrl.push(ThankyouPage);
    }
  }

  noSubmit(e){
    e.preventDefault();
  }

}
