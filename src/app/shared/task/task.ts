import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../interfaces/task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class TaskComponent {
  @Input() task?: ITask;

  @Output() onPinTask = new EventEmitter<string>();    
  @Output() onArchiveTask = new EventEmitter<string>(); 

  onPin(id: string | undefined) {
    if (id) this.onPinTask.emit(id);
  }

  onArchive(id: string | undefined) {
    if (id) this.onArchiveTask.emit(id);
  }
}
