import { Component, OnInit } from '@angular/core';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';


const DATABASE_FILE_NAME: string = 'data.db';

@Component({
  selector: 'app-sqlite',
  templateUrl: './sqlite.page.html',
  styleUrls: ['./sqlite.page.scss'],
})
export class SqlitePage implements OnInit {

  private db: SQLiteObject;

  constructor(
    private sqlite: SQLite
    ) {

  }

  private createDatabaseFile(): void {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
    .then((db: SQLiteObject) => {

      db.executeSql('create table danceMoves(name VARCHAR(32))')
      .then(() => console.log('Executed SQL'))
      .catch(e => console.log(e));
    })
    .catch(e => console.log(e));

  }
  ngOnInit() {
  }

}
