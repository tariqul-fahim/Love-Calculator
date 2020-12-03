import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'love-calculator';
  loveForm: FormGroup;
  personList = [
    {
      firstName: 'lubna',
      secondName: 'fahim',
      percent: 99
    },
    {
      firstName: 'lubna',
      secondName: 'tariqul',
      percent: 99
    },
    {
      firstName: 'lubna afroj',
      secondName: 'tariqul fahim',
      percent: 99
    }
  ];
  firstPerson = '';
  secondPerson = '';
  percent: number;
  isShow = false;

  constructor(private fb: FormBuilder) {
    // @ts-ignore
    this.loveForm = this.fb.group({
      firstPerson: ['', Validators.required],
      secondPerson: ['', Validators.required],
    });
  }
  // firstPerson = '';
  // secondPerson = '';
  // percent: number;
  //
  // profileForm = new FormGroup({
  //   firstPerson: new FormControl(''),
  //   secondPerson: new FormControl(''),
  // });
  //
  // tslint:disable-next-line:typedef
  onSubmit(){
    this.isShow = true;
    // console.log(this.firstPerson);
    this.firstPerson = this.loveForm.value.firstPerson;
    this.secondPerson = this.loveForm.value.secondPerson;
    // console.log(this.secondPerson);
    if ( this.firstPerson !== '' && this.secondPerson !== '') {
      for (const person of this.personList){
        if (person.firstName === this.firstPerson && person.secondName === this.secondPerson){
          this.percent = person.percent;
          // console.log(this.percent);
          break;
        }
        else {
          this.percent = Math.floor ((Math.random() * 101) + 1);
          // console.log('random hit');
        }
      }
      this.loveForm.value.firstPerson = '';
      this.loveForm.value.secondPerson = '';
    }
    else {
      this.isShow = false;
    }
    // console.log(this.secondPerson);
  }
}
