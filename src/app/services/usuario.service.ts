import { Injectable } from '@angular/core';
import { BancoService } from './banco.service';
import { SQLite } from '@ionic-native/sqlite';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BancoService{

  protected tabela:string = 'usuarios';
  private bancoService:BancoService
  async cadastrar(emailVal:string,senhaVal:string,cpfVal:string) {
    this.insert({
      email: emailVal,
      senha: senhaVal,
      cpf: cpfVal
    });
  }
  async CadastrarDadosBasicosDeUsuario(email,senha,cpf){
    //console.log(cpf);
    this.getDB().then((db:SQLiteObject) => {
      db.executeSql("INSERT INTO usuarios (email,senha,cpf) VALUES(?,?,?)", [email,senha,cpf]);
    },(error) => {//https://stackoverflow.com/questions/41347793/ionic-2-unable-to-create-table-typeerror-cannot-read-property-apply-of-undef
      console.error("Unable to open database", error);
    });
  }
  UltimoIdInserido(){
    return this.getDB().then((db:SQLiteObject) => {
      return db.executeSql("SELECT id FROM usuarios WHERE id = (SELECT MAX( id ) FROM usuarios);", []).then(resultado => {
        if (resultado.rows.length > 0)
          return resultado.rows.item(0);
        return null;
      })
    });
  }


  async logar(email: string, senha:string): Promise<any> {
    return this.getDB().then((db:SQLiteObject) => {
      return db.executeSql("SELECT email FROM usuarios WHERE email = ? AND senha = ?", [email, senha]).then(resultado => {
        return (resultado.rows.length > 0);
      });
    });
  }
  public getUserId(Email:String){
    
    return this.getIdByEmail(Email);
  }
  
  public getUserById(id){
    
    return this.getByID(id);
  }
  public listar(){
    return this.getAll();
  }
  public updateUser(id,email,cpf){
    
    //this.bancoService.toastBanco("email");
    this.update({
      email: email,
      cpf:cpf
    },id);
  }

  public delete(Email){
    this.deleteByEmail(Email);
  }
}
