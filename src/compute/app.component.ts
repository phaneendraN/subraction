import { Component } from '@angular/core';

@Component({
selector: 'my-app',
templateUrl:'./app.component.html',
styleUrls: ['./app.component.css']
})

export class ComputeComponent implements Component{
public num1:number=0;
public num2:number=0;
public result:number;
operator:boolean=true;
operatorName:string="Subtraction";

addition() {
this.operator?this.operatorName="Addition":this.operatorName="Subtraction";
  this.operator=!this.operator;
  this.result = this.num1 + this.num2;
} 
minus() {
  this.result = this.num1 - this.num2;
}
}