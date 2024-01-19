import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  @Input() childInputValue: string='';
  @Output() childInputValueChange = new EventEmitter<string>();

}
