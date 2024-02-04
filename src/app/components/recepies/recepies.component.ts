import { Component } from '@angular/core';
import { Recepie } from '../../models/recepie.model';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrl: './recepies.component.css'
})
export class RecepiesComponent {
  public selectedRecepie!: Recepie;
}
