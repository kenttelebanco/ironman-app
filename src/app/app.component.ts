import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  marvel: any[];

  constructor(db: AngularFireDatabase) {
      db.list('/marvel')
        .subscribe(marvel => {
          this.marvel = marvel;
          console.log(this.marvel);.valueChanges();
        });
  }
}
