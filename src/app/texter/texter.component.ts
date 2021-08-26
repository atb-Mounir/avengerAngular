import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-texter',
  templateUrl: './texter.component.html',
  styleUrls: ['./texter.component.scss']
})
export class TexterComponent {
  textValue: string="texte initiale";
  readonly TEXTEONE: string="Ceci est le premier texte";
  readonly TEXTETWO: string="Ceci est le deuxième texte";


 HandleClickChangeTexte(newValue: string){

    this.textValue = newValue;
  }

//   public ngOnInit(){
//   }
}
