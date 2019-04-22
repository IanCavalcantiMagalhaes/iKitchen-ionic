import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { UsuarioService } from './usuario.service';
import { TarefaService } from './tarefa.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[UsuarioService, SQLite, TarefaService]

})
export class ServicesModule { }
