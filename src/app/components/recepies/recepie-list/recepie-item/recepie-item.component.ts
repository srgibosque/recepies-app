import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recepie } from '../../../../models/recepie.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrl: './recepie-item.component.css'
})
export class RecepieItemComponent {
  @Input() recepie!: Recepie;
  @Output() recepieSelected = new EventEmitter<void>();


  onSelected(){
    this.recepieSelected.emit();
  }
}
