import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  protected tabela:string;

  constructor(private sqlite: SQLite) { 
    //this.createDB();
  }

  async createDB() {
    this.getDB().then((db:SQLiteObject) => {
      //Criando Tabela Usuários
      db.executeSql("CREATE TABLE IF NOT EXISTS usuarios(\
        id INTEGER PRIMARY KEY AUTOINCREMENT,\
        email TEXT,\
        cpf TEXT,\
        senha TEXT\
        )", []);
      db.executeSql("CREATE TABLE IF NOT EXISTS localDeEntrega(\
        id INTEGER PRIMARY KEY AUTOINCREMENT,\
        residencia TEXT,\
        cep TEXT,\
        usuario_id INTEGER\
        )", []);

      //Criando tarefas 
      /*db.executeSql("CREATE TABLE IF NOT EXISTS tarefas(\
        id INTEGER PRIMARY KEY AUTOINCREMENT,\
        descricao TEXT,\
        data TEXT,\
        imagem DATE\
        )", []);*/
    },(error) => {//https://stackoverflow.com/questions/41347793/ionic-2-unable-to-create-table-typeerror-cannot-read-property-apply-of-undef
      console.error("Unable to open database", error);
    });
    
  }

 
  /** Recupera o banco de dados  */
  protected getDB() {
    return this.sqlite.create({
      name: 'data1.db',
      location: 'default'
    });
  }

  /** Método generico para inserir dados */
  public insert(obj: Object) {

    let key = Object.keys(obj);
    let values = Object.values(obj);
    let interrogacoes = new Array(key.length).fill('?');

    this.getDB().then((db:SQLiteObject) => {
      db.executeSql("INSERT INTO " + this.tabela + " (" + key.join(', ') + ") VALUES(" + interrogacoes.join(', ') + ")", values);
    });
  }

  /** Método generico para atualizar dados */
  public update(obj: Object, id:any) {
    var success=false;
    let key = Object.keys(obj);
    let values = Object.values(obj);
    let campos:string[] = [];
    key.forEach((k, i) => {
      campos.push(k + ' = ?');
    }) 
    values.push(id);
    
    this.getDB().then((db:SQLiteObject) => {
      db.executeSql("UPDATE " + this.tabela + " SET " + campos.join(', ') + " WHERE id = ?", values);
    });
    success=true;
    //return success;
  }

  /** Método generico para atualizar dados */
  public delete(id:any) {
    this.getDB().then((db:SQLiteObject) => {
      db.executeSql("DELETE FROM " + this.tabela + " WHERE id = ?", [id]);
    });
  }

  public getAll(): Promise<any> {
    return this.getDB().then((db:SQLiteObject) => {
      return db.executeSql("SELECT * FROM " + this.tabela, []).then(resultado => {
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

  public getByID(id:any): Promise<any> {
    return this.getDB().then((db:SQLiteObject) => {
      return db.executeSql("SELECT * FROM " + this.tabela + " WHERE id = ?", [id]).then(resultado => {
        if (resultado.rows.length > 0)
          return resultado.rows.item(0);
        return null;
      })
    });
  }
  public getIdByEmail(Email:String): Promise<any>{
    return this.getDB().then((db:SQLiteObject) => {
      return db.executeSql("SELECT id FROM " + this.tabela + " WHERE email = ?", [Email]).then(resultado => {
        if (resultado.rows.length > 0)
          return resultado.rows.item(0);
        return null;
      })
    });
  }
  public deleteByEmail(Email:String){
    this.getDB().then((db:SQLiteObject) => {
      db.executeSql("DELETE FROM " + this.tabela + " WHERE id = ?", [Email]);
    });
  }
}