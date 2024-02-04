import { Component, OnInit } from '@angular/core';

import { Recepie } from '../../../models/recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrl: './recepie-list.component.css'
})
export class RecepieListComponent implements OnInit {
  public recepies: Recepie[] = [];

  constructor(){}

  ngOnInit(){
    this.recepies = [
      new Recepie('Recepie 1', 'This is the description', '../../../../assets/img/defaultImg.jpg'),
      new Recepie('Recepie 2', 'This is the description', '../../../../assets/img/defaultImg.jpg'),
      new Recepie('Recepie 3', 'This is the description', '../../../../assets/img/defaultImg.jpg'),
    ];
  }
}
