import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() parentTOchild: any;
  @Output() childToParent: EventEmitter<string> = new EventEmitter();
  fromChild: string = 'this is coming from child page'
  childString: string = ''
  ngOnInit(): void {

  }
  childToparent = () => {
    this.fromChild = this.childString
    this.childToParent.emit(this.fromChild)
  }
  
  cleartext = () => {
    this.childString = '';
    this.childToParent.emit('');
  }
}
