import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzService {
  public characters: Character[] =
    [
      {
        id: uuid(),
        name: 'Krilin',
        power: 500
      },
      {
        id: uuid(),
        name: 'Goku',
        power: 50000
      },
      {
        id: uuid(),
        name: 'Vegeta',
        power: 10000
      }
    ];

  addCharacter(character: Character): void {

    // ... es el spread para que tome toda las propiedades como en python
    const newCharacter: Character = {id:uuid(), ...character}

    // push para agregar al final
    // unshift para agregar al final
    this.characters.push(newCharacter);
  }

  //onDeleteCharacter(idx: number): void {
  //  this.characters.splice(idx, 1);
  deleteCharacterById(id:string){
    this.characters = this.characters.filter( characters => characters.id !== id );

  }
}
