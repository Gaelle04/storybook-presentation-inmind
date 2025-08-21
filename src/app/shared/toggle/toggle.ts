import { Component , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-toggle',
  imports: [],
  templateUrl: './toggle.html',
  styleUrl: './toggle.css'
})

export class Toggle {
  @Input() checked = false;
  @Input() onLabel = 'On';
  @Input() offLabel = 'Off';
  @Output() checkedChange = new EventEmitter<boolean>();

  onToggle(event: Event) {
    const input = event.target as HTMLInputElement;
    this.checked = input.checked;          
    this.checkedChange.emit(this.checked); 
  }

}
