import { Component, Input } from '@angular/core';

import { Recepie } from '../../../../models/recepie.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrl: './recepie-item.component.css'
})
export class RecepieItemComponent {
  @Input() recipe!: Recepie;
  @Input() index!: number;

  constructor(){}
  
}
