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
  public async updateUser(id,email,cpf,senha){
    this.getDB().then((db:SQLiteObject) => {
      db.executeSql("UPDATE usuarios SET email=?,cpf=?,senha=? WHERE id = ?", [email,cpf,senha,id]);
    });
    
  }

  UpdateCEP(localId,userId,cep,residencia){
    this.tabela="localDeEntrega";
    this.update({
      usuario_id:userId,
      cep:cep,
      residencia:residencia
    },localId)

  }
  DadosDeEntrega(idCep){
    this.tabela="localDeEntrega";
    return this.getDB().then((db:SQLiteObject) => {
      return db.executeSql("SELECT * FROM localDeEntrega WHERE id=?", [idCep]).then(resultado => {
        let retornar = [];
        if (resultado.rows.length > 0) {
          for(let i = 0; i < resultado.rows.length; i++) {
            retornar.push(resultado.rows.item(i));
          }
        }
        return retornar;
      })
    });
    
  }
  QuantidadeDeCepsCadastrados(userId){
    return this.getDB().then((db:SQLiteObject) => {
      return db.executeSql("SELECT * FROM localDeEntrega WHERE usuario_id=?", [userId]).then(resultado => {
        return resultado.rows.length;
      });
    });

  }
  LocalizacaoAindaNaoExistente(cep,residencia){
    return this.getDB().then((db:SQLiteObject) => {
      return db.executeSql("SELECT * FROM localDeEntrega WHERE cep = ? AND residencia = ?", [cep, residencia]).then(resultado => {
        return true;//nao ter=true
      });
    });
    return false;
  }
  public async AddCepOfUser(id,cep,residencia){
    this.getDB().then((db:SQLiteObject) => {
      db.executeSql("INSERT INTO localDeEntrega(usuario_id,cep,residencia) VALUES(?,?,?)", [1,"111111","222"]);
    },(error) => {//https://stackoverflow.com/questions/41347793/ionic-2-unable-to-create-table-typeerror-cannot-read-property-apply-of-undef
      console.error("Unable to open database", error);
    });
  }
  public getCEPByUserId(id){
    
    return this.getDB().then((db:SQLiteObject) => {
      return db.executeSql("SELECT * FROM localDeEntrega WHERE usuario_id=?", [id]).then(resultado => {
        let retornar = [];
        if (resultado.rows.length > 0) {
          for(let i = 0; i < resultado.rows.length; i++) {
            retornar.push(resultado.rows.item(i));
          }
        }
        
        return retornar;
      })
    });
  }


  public delete(Email){
    this.deleteByEmail(Email);
  }
}
