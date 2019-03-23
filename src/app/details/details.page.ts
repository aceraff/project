import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {databaseService,Database} from '../services/database.service'
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  data:Database={
    path:null,
    size:null,
    ides:null,
    iprice:null,
    iname:null
  }


  constructor(private route:ActivatedRoute, private databases:databaseService,private loadingController:LoadingController) { }


  ngOnInit() {
    let id=this.route.snapshot.paramMap.get('id');
    console.log(id)
    if(id)
      this.loadData(id)

  
}

  async loadData(id){
    const loading = await this.loadingController.create({
      message: 'Loading Todo..'
    });
    await loading.present();

    this.databases.getTodo(id).subscribe(res=>{
      loading.dismiss();
      this.data=res;
      console.log(this.data.iname)
    })
    
  }

 

}
