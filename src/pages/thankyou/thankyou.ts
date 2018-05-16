import { Component } from '@angular/core';
import { MyFormService } from '../../services/myform';

@Component({
  selector: 'page-thankyou',
  templateUrl: 'thankyou.html'
})
export class ThankyouPage {

  constructor(private formData: MyFormService) {
    this.formData = formData;
  }

}
