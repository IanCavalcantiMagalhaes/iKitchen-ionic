import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ImagemService {
  image;
  //https://ionicthemes.com/tutorials/about/ionic-firebase-image-upload

  constructor() { }
public async LoadImage(){//https://firebase.google.com/docs/storage/web/download-files
  let db = firebase.database();
  var storage = firebase.storage();
  var Reference = storage.refFromURL('gs://project-f72e3.appspot.com')

  Reference.child('image/photo.jpg')
    .getDownloadURL().then(url=> {
    // `url` is the download URL for 'images/stars.jpg'
    
    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
  
    // Or inserted into an <img> element:
    this.image = document.getElementById('myimg');
    this.image = url;return url;
  }).catch(function(error) {
    // Handle any errors
    console.log(error);
  });
  
 }
 uploadImage(imageURI){
  return new Promise<any>((resolve, reject) => {
    let storageRef = firebase.storage().ref();
    let imageRef = storageRef.child('image').child('imageName');
    this.encodeImageUri(imageURI, function(image64){
      imageRef.putString(image64, 'data_url')
      .then(snapshot => {
        resolve(snapshot.downloadURL)
      }, err => {
        reject(err);
      })
    })
  })
}
public encodeImageUri(imageUri, callback) {
  var c = document.createElement('canvas');
  var ctx = c.getContext("2d");
  var img = new Image();
  img.onload = function () {
    var aux:any = this;
    c.width = aux.width;
    c.height = aux.height;
    ctx.drawImage(img, 0, 0);
    var dataURL = c.toDataURL("image/jpeg");
    callback(dataURL);
  };
  img.src = imageUri;
}



}
