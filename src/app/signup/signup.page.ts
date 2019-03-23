import { Database, databaseService} from '../services/database.service'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { saveConfig } from '@ionic/core';
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class signUpDetailsPage{
 
 
  confirmPassword=null;
 
  constructor(private alert:AlertController,private route: ActivatedRoute, private router:Router, private dbs: databaseService, private loadingController: LoadingController) { }
 
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';


 
 
  
}