import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent{
  public taskNameField;
  public taskTypeField;
  public taskDescriptionField;

  constructor() { }

  public submitForm(){

  }
}
