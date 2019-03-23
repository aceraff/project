import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Database, databaseService} from '../services/database.service'


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {


  constructor(private router:Router, private afAuth: AngularFireAuth, private alert:AlertController, private db:databaseService, private loadingController:LoadingController) { }
  
  ngOnInit() {
  }
  


}
