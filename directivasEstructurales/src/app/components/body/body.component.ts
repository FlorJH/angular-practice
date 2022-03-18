import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  mostrar = true;
  personajes: string[] =['Spederman', 'Iron-man', 'Hulk'];
  frase: any = {
    mensaje: 'Un  gran poder requiere una gran responsabilidad',
    autor: 'Ben Parker',
  };

}
