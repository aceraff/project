import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

 
export interface Database {
  id?:string;
  path:string;
  size:number;
  ides:string;
  iprice:number;
  iname:string;
    
 }
 
@Injectable({
  providedIn: 'root'
})
export class databaseService {
  private databaseCollection: AngularFirestoreCollection<Database>;
 
  private databases: Observable<Database[]>;

  constructor(db: AngularFirestore) {
    this.databaseCollection = db.collection<Database>('databases');
    this.databases = this.databaseCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
  
  getTodos() {
    return this.databases;
    
  }

  getTodo(id) {
    return this.databaseCollection.doc<Database>(id).valueChanges();
  }
  addUser(data:Database){
    return this.databaseCollection.add(data);
    
  } 
}