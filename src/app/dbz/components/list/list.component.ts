import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from './../../services/dbz.service';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})


export class ListComponent {

  constructor ( public dbzservice: DbzService) {}

  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id:string|undefined):void{
    //TO-DO Emitir el ,ID del personale
    this.onDelete.emit(id);
  }
 }
