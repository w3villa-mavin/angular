import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers:[UserService]
})
export class SignUpComponent implements OnInit {

  emailRegx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
  userData=null

  constructor(public userService : UserService) {}

  ngOnInit(): void {
  }
  onFileSelected(files: FileList){
    this.userService.selectedUser.avtar=files[0]
  }

  onSubmit(form :NgForm){
    this.userService.postUser(this.userService.selectedUser).subscribe(
      res =>{ console.log(res)},
      err=>{ console.log(err)}
    )

  }

}
