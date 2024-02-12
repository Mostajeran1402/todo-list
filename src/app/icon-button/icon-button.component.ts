import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [],
  template: `
   <button [type]="type" class="btn btn-{{color}} {{customClass}}" (click)="OnBtnClick()" >
   <i class="bi bi-{{icon}}"></i>{{caption}}</button>`
 
})
export class IconButtonComponent {
  @Input({required : true , alias:'label' }) caption:string=''
  @Input({required:true}) icon:string=''
  @Input() customClass:string=''
  @Input() color: string='primary'
  @Input() type:'button'|'submit' | 'menu' | 'reset' ='button'

  @Output() clicked=new EventEmitter()

  OnBtnClick(){
    this.clicked.emit()
  }
}
