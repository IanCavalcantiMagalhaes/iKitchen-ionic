import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ImagemService {
  image;
  //https://ionicthemes.com/tutorials/about/ionic-firebase-image-upload

  constructor(private imagePicker:ImageP) { }
public async LoadImage(){
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



}
