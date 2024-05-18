import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit  {

 @Input() control;
 @Input() label;
 @Input('type') inputType
 ngOnInit(){
  // console.log(this.control._parent);
  
 }

 showError(){
  let control = this.control;

  
 return control.errors && (control.dirty || control.touched)
 
 }

}
