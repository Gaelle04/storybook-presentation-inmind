import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [NgIf,NgClass],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class CardComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() image = '';
  @Input() content = '';
  @Input() buttonLabel?: string;
  @Input() buttonUrl?: string; 
  @Input() darkMode: boolean = false; 
  @Input() listStyle: boolean = false;

  @Output() buttonClick = new EventEmitter<void>();

  onButtonClick() {
    this.buttonClick.emit();
    if (this.buttonUrl) {
      window.open(this.buttonUrl, '_blank'); 
    }
  }
}
