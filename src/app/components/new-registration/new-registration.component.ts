import { Component, OnInit } from '@angular/core';
import { SSNRegistrationService } from "src/app/services/ssn-registration.service";
import { SsnModel } from 'src/app/models/ssnmodel';

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.css']
})
export class NewRegistrationComponent implements OnInit {

  states:any={};
  ssnModel:SsnModel;
  message:any;
  submitted:boolean=false;

  constructor(private service:SSNRegistrationService) { }

  ngOnInit(): void {
    this.ssnModel=this.service.ssnModelGetter();
    let statesRes = this.service.getStateNames();
    statesRes.subscribe(data=>{this.states=data});
  }

  public register(){
    let res = this.service.registerSSN(this.ssnModel);
    res.subscribe(data=>this.message=data);
    this.submitted=true;
  }

}
