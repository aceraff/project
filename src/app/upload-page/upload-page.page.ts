import { Component, Injectable, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask} from 'angularfire2/storage'
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators'
import {databaseService, Database} from '../services/database.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.page.html',
  styleUrls: ['./upload-page.page.scss'],
})
export class UploadPagePage implements OnInit {
  

  productName:string;
  productPrice:number;
  productDes:string;

   ngOnInit() {
     location.reload
  }
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  constructor(private storage: AngularFireStorage, private db:databaseService, private router:Router) { }

  selectFile:FileList;
  

  detectFile(event){
    this.selectFile=event.target.files;
  }
  

  toggleHover(event: boolean) {
    this.isHovering = event;
  }


  startUpload() {
    // The File object
    let iname=this.productName;
    let iprice=this.productPrice;
    let ides=this.productDes;
    let file = this.selectFile.item(0)

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') { 
      console.error('unsupported file type :( ')
      return;
    }

    const path = `databases/${new Date().getTime()}_${file.name}`;
    // Progress monitoring
   
    this.task = this.storage.upload(path, file);

    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges();
    
        

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(snap => {
        if (snap.bytesTransferred === snap.totalBytes) {
          // Update firestore on completion
          this.db.addUser( {path, size: snap.totalBytes , iprice, ides, iname}).then(()=>{          
          
            this.router.navigate(['home'])
            
          })
          
        }
      })
    )    
  } 

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }
}
