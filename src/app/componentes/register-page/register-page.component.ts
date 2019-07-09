import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(
    public authService: AuthService,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onSubmitAddUser(){
    this.authService.registerUser(this.email, this.password)
    .then( (res) =>{
      this.flashMensaje.show('Usuario creado correctamente.',
      {cssClass: 'alert-success', timeout: 4000});
      console.log('BIEN!!!');
      console.log(res);
    }).catch( (err) =>{
      this.flashMensaje.show(err.message,
      {cssClass: 'alert-danger', timeout: 4000});
      console.log(err);
    });
  }
}
