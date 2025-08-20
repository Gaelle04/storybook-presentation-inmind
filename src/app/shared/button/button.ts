import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  @Input() label = 'Click me';
  @Input() variant: 'primary' | 'outline' = 'primary';
  @Input() disabled = false;            
  @Output() clicked = new EventEmitter<void>();
  onClick() {
    if (!this.disabled) this.clicked.emit();
  }
  
}
