import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ToastService } from '../../toast.service';
import { fileURLToPath } from 'url';
import { puts } from 'util';
import { CameraOptions, Camera } from '@ionic-native/camera/ngx';
import { platform } from 'os';
import { Platform, AlertController, ToastController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { Crop } from '@ionic-native/crop/ngx';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { Alert } from 'selenium-webdriver';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
//import { PhotoLibrary } from 'ionic-native';
@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.page.html',
  styleUrls: ['./adicionar-produto.page.scss'],
})
export class AdicionarProdutoPage implements OnInit {
//https://ionicthemes.com/tutorials/about/ionic-firebase-image-upload
  db;
  formulario: FormGroup;
  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    private toastCtrl:ToastService,
    private alertController:AlertController,
    private toastController:ToastController,
    private cropService:Crop,
    private camera:Camera,
    private photoLibrary: PhotoLibrary

    ) {
      this.db=firebase.storage();
     }
  nome;
  descricao;
  preco;
  quant;
  imagem;
  files=[];
  imagens=[];
  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome:['', [Validators.email, Validators.required]],
      preco:['', [Validators.required]],
      quant:['', [Validators.required]]
    });
  }
//https://github.com/CaioCS100/Adote-um-pet-web/blob/master/assets/libs/js/cadastrar-pet.js
  //CriarProduto(){
  onFileChoose($event){
    var files = $event.target.files;
  
      for (var i = 0, f; f = files[i]; i++) 
      {
        //if (!f.type.match('image.*'))
         // continue;

        var img = {
          nome: f.name,
          arquivo: f, 
          hasImg: true
        };

      }  this.imagens.push(img);
  }
    async CriarProduto(){
      let db=firebase.database();
      let store=firebase.storage();
      var imagens=this.imagens;
      var id=db.ref('produto').push().key;
      var Nomes=[];
      if(this.Erros()==null){
          db.ref('produto')
          .child(id).child('dados')
              .set({
                  id:id,
                  nome:this.nome,
                  descricao:"",
                  preco:this.preco,
                  quantidade:this.quant
              }).then(X=>{
                
                for(var i=0;i<imagens.length+1;i++){
                  
                  firebase.storage()
                    .ref(id)
                      .child(imagens[i].nome)
                        .put(imagens[i].arquivo);

                }
              }).catch(err =>this.toastCtrl.Mensagem(err) )
              
              db.ref('produto')
              .child(id)
                .child('dados')
                  .child('imagens')
                  .set(imagens);
          this.imagens=[]; 
          this.toastCtrl.Mensagem("Produto criado com sucesso");
          this.router.navigateByUrl("/adicionarProduto");
              // Create a root reference
        
      }else{
        this.toastCtrl.Mensagem("Preencha esses campos:"+this.Erros());
      }
         
    }
    Erros(){
      var error:string="";
      if(this.nome==null)
        error+="nome/";
      if(this.preco==null)
        error+="preço/";
      if(this.quant==null)
        error+="quantidade";

      if(this.nome!=null && this.preco!=null && this.quant!=null){
        return null;
      }else{
        return error;
      }

    }
    
    tarefa
    selecionarImagem() {
      this.alertController.create({
        message: "Selecione um modo de recuperar foto",
        inputs: [
          {label: "Camera", value: "1", type:"radio"},
          {label: "Galeria", value: "2", type:"radio"},
        ], 
        backdropDismiss: false,
        buttons: [
          {text: "Cancelar"},
          {text: "Confirmar", handler: (dado) => {
            if (dado == 1) this.tirarFoto(this.camera.PictureSourceType.CAMERA);
            else this.tirarFoto(this.camera.PictureSourceType.PHOTOLIBRARY);
          }}
        ]
      }).then(alert => alert.present());
  
    
    }
  
    tirarFoto(sourceType) {
  
      this.camera.getPicture({
        quality: 100, //Qualidade da foto
        allowEdit: true, //(opcional)se permite editar após tirar foto
        cameraDirection: this.camera.Direction.BACK, //(opcional) FRONTAL (FRONT) ou Traseira (BACK),
        mediaType: this.camera.MediaType.PICTURE, //PICTURE OU VIDEO
        saveToPhotoAlbum: false, //(opcional) Se deseja salvar no album
        sourceType: sourceType, //CAMERA, PHOTOLIBRARY (Galeria), SAVEDPHOTOALBUM (Apenas foto tirada no aplicativo)
        encodingType: this.camera.EncodingType.JPEG, //JPEG OU PNG
        destinationType: this.camera.DestinationType.FILE_URI, //DATA_URL traz a foto como string na base64, FILE_URI traz o caminho da foto salva no celular
        
      }).then(foto => {
        //Se tiver na base64

        this.toastCtrl.Mensagem(foto.destinationType.toString());
        this.tarefa.imagem = 'data:image/jpeg;base64,' + foto;
      });
    }
  
    salvar() {
      this.toastController.create({
        message: 'Salvo com sucesso',
        duration: 2000
      }).then(toast => toast.present());
  
      //this.router.navigateByUrl("/home");
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
    encodeImageUri(imageUri, callback) {
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
    };
    openImagePicker(){
      
      }
      uploadImageToFirebase(image){
        //image = normalizeURL(image);
      
        //uploads img to firebase storage
        this.uploadImage(image)
        /*.then(photoURL => {
          this.toastCtrl.Mensagem('Image was updated successfully');
          let toast = this.toastCtrl.create({
            message: 'Image was updated successfully',
            duration: 3000
          });
          toast.present();
          })*/
        }
        openImagePickerCrop(){
          
          }
    
 }
