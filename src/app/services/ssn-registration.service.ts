import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SsnModel } from '../models/ssnmodel'

@Injectable({
  providedIn: 'root'
})
export class SSNRegistrationService {

  constructor(private http:HttpClient) { }

  currentModel:SsnModel = new SsnModel(null,"","","",null,"");

  public registerSSN(modelSsn){
    return this.http.post("http://localhost:2143/ssn-register",modelSsn,{responseType:'text' as 'json'});
  }

  public ssnModelSetter(model:SsnModel){
    this.currentModel=model;
 }
 
 public ssnModelGetter(){
   return this.currentModel;
 }

}
