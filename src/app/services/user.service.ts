import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { auth } from 'firebase/app';

export interface myData{
  name:string;
  price:number;
  description:string;
  imgStr:string;
}

@Injectable()
export class UserService {

}