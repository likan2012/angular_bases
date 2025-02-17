import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})

export class AddCharacterComponent {

  @Output() // el pinche decorador hijos de su puta madre!!!! Ah!!!
  public oNewCharacter: EventEmitter<Character> = new EventEmitter();
  // <T> o <Character> es una generico para retornar un valor
  // recordemos que la T es para cualquier tipo de dato y se puede regresar uno especifico
  // ya sea un dato de Angular o una interface definida por uno "Mesmo"

  public character: Character = {
    name: '',
    power: 0
  }

  emiteCharacter(): void {
    console.log(this.character);

    if (this.character.name.length === 0) return;

    this.oNewCharacter.emit(this.character);

    this.character = {name: '', power:0}

  }

}
