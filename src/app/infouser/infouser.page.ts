import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { Users, UsersService } from './../services/users.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import {FirebaseApp} from 'angularfire2';


export interface MyData {
  name: string;
  filepath: string;
  size: number;
  idpicture : string;
}

@Component({
  selector: 'app-infouser',
  templateUrl: './infouser.page.html',
  styleUrls: ['./infouser.page.scss'],
})



export class InfouserPage {
  dataUser = {
    email: '',
    password: ''
 };

 user: Users = {
    id: '',
    nom: '',
    prenom: '', 
    role: ''
  };
  push() {
   // const rootDbRef = FirebaseApp.database().ref();
  this.usersService.addTodo(this.user);
  this.afAuth.auth.createUserWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
  this.dataUser = {
    email: '',
    password: ''
  };
  this.router.navigateByUrl('/tabs/annonces');

  }


  // Upload Task
  task: AngularFireUploadTask;

  // Progress in percentage
  percentage: Observable<number>;

  // Snapshot of uploading file
  snapshot: Observable<any>;

  // Uploaded File URL
  UploadedFileURL: Observable<string>;

  //Uploaded Image List
  images: Observable<MyData[]>;

  //File details
  fileName:string;
  fileSize:number;

  //Status check
  isUploading:boolean;
  isUploaded:boolean;

  private imageCollection: AngularFirestoreCollection<MyData>;
  constructor(private storage: AngularFireStorage, private database: AngularFirestore,  public afAuth: AngularFireAuth,
    private router: Router,
    private usersService: UsersService) {
    {
      this.afAuth.authState.subscribe(auth => {
        if (!auth) {

        } else {
          this.user.id = auth.uid;
          //this.userid = auth.uid;
        }
      });
    }

    this.isUploading = false;
    this.isUploaded = false;
    //Set collection where our documents/ images info will save
    this.imageCollection = database.collection<MyData>('freakyImages');
    this.images = this.imageCollection.valueChanges();
  }

    signUp() {
      this.afAuth.auth.createUserWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
      this.dataUser = {
        email: '',
        password: ''
      };
      this.router.navigateByUrl('/tabs/annonces');
  }
  uploadFile(event: FileList) {


    // The File object
    const file = event.item(0)

    // Validation for Images Only
    if (file.type.split('/')[0] !== 'image') {
     console.error('unsupported file type :( ')
     return;
    }

    this.isUploading = true;
    this.isUploaded = false;


    this.fileName = file.name;

    // The storage path
    const path = `freakyStorage/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: 'Freaky Image Upload Demo' };

    //File reference
    const fileRef = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });

    // Get file progress percentage
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(

      finalize(() => {
        // Get uploaded file storage path
        this.UploadedFileURL = fileRef.getDownloadURL();

        this.UploadedFileURL.subscribe(resp=>{
          this.addImagetoDB({
            name: file.name,
            filepath: resp,
            size: this.fileSize,
            idpicture: this.user.id
          });
          this.isUploading = false;
          this.isUploaded = true;
        },error=>{
          console.error(error);
        })
      }),
      tap(snap => {
          this.fileSize = snap.totalBytes;
      })
    )
  }

  addImagetoDB(image: MyData) {
    //Create an ID for document
    const id = this.database.createId();

    //Set document id with value in database
    this.imageCollection.doc(id).set(image).then(resp => {
      console.log(resp);
    }).catch(error => {
      console.log("error " + error);
    });
  }


}
