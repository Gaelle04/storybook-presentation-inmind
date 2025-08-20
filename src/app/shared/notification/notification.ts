import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
   templateUrl: './notification.html',
  styleUrl: './notification.css'
})
export class NotificationComponent {
  @Input() type: 'success' | 'error' | 'warning' | 'info' = 'info';
  @Input() message: string = 'This is a notification';
  @Input() visible: boolean = true;

  @Output() closed = new EventEmitter<void>();

  close() {
    this.visible = false;
    this.closed.emit();
  }
}
