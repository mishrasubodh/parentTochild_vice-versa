import { Component, Input } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-parent',
    standalone: true,
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.css',
    imports: [ChildComponent,FormsModule]
})
export class ParentComponent {
parentTOChildMsg:String=" "
parentString: any;
fromChild:any
parentToChild=()=>{
  this.parentTOChildMsg = this.parentString 
}
cleartext=()=>{
  this.parentString='';
  this.parentTOChildMsg="";
}
GetChildData=(data:any)=>{  
  this.fromChild=data;
}
}
