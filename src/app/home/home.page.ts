import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { databaseService, Database} from '../services/database.service';
import { AngularFireStorage} from 'angularfire2/storage';
import { AngularFirestore} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { DetailsPage} from '../details/details.page'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  datas=[]  


    
  todos:Database[];
  prices:string;
  imgurl:Observable<string>;

  down:Observable<URL>;
  constructor(private detailPage:DetailsPage,private route:ActivatedRoute, private router: Router, private db:databaseService, private dbs: AngularFirestore,private storage:AngularFireStorage){ }
  

  ngOnInit() {    

    location.reload
    this.db.getTodos().subscribe(res => {
      this.todos = res;
    });

    this.dbs.collection("databases").get().toPromise().then((snapshot) => {
      snapshot.docs.forEach(doc=>{       

        let name=doc.data().path;
        let dataId=doc.id;
 
        this.storage.ref(name).getDownloadURL().toPromise().then((link)=>{
          this.imgurl=link;
          this.datas.push({
            name:doc.data().iname,
            prices:doc.data().iprice,
            description:doc.data().ides,
            downurl:this.imgurl,
            idPage:dataId
              
          }) 
                
        })     
      })
    
    })
  }

  pageDetail(id){
    this.router.navigate(['/details', id])
  }

  pageLogin(){    
    this.router.navigate(['sign-in',]);
  }
  pageSignup(){
    this.router.navigate(['signup']);
  }

  pageUpload(){
    this.router.navigate(['upload-page']);
  }

 }
