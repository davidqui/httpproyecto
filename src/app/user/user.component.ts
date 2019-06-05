import { Component, OnInit } from '@angular/core';
import {UserService} from "../servicio/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService) {
    this.obtenerUsuer();
  }

  obtenerUsuer(){
    this.userService.obtenerTodosLosUsuarios().subscribe( resultado =>{
      this.users = resultado;
    },
      error =>{
        console.log(JSON.stringify(error));
      });
  }

  agregarUserRegistro: any = {username:'', address:'', email:''}
  users: any;
  ngOnInit() {
  }

  eliminarUser(identificador){
    this.userService.eliminarUser(identificador).subscribe(resultado=>{
        this.obtenerUsuer();
      },
      error=>{
        console.log(JSON.stringify(error));
      });
  }

  agregarUser(){
    this.userService.agregarUsuario(this.agregarUserRegistro).subscribe(resultado=>{
        this.obtenerUsuer();
      },
      error => {
        console.log(JSON.stringify(error));
      });
  }

}
