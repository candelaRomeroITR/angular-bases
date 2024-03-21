import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService ) {}

  get character(): Character[] {
    return [...this.dbzService.characters]; //crea una copia, si se modifica no cambia la data del servicio
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id)
  }

  onNewCharacter(character: Character){
    this.dbzService.addCharacter(character)
  }

}
