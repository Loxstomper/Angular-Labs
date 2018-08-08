import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = "";
  password:string = "";

  constructor(private router:Router, private form:FormsModule) { }

  ngOnInit() {
    console.log("Dom is ready");
    if(typeof(Storage) !== "undefined"){
    console.log("Storage ready");
    console.log("GETTING DATA");
    console.log(localStorage.getItem("user_id"));
    }


    
  }

  loginUser(event)
  {
    event.preventDefault();

    localStorage.setItem("user_id", "1");
    localStorage.setItem("user_name", this.username);
    localStorage.setItem("birth_date", "20/07/1969");
    localStorage.setItem("user_age", "49");

    // no matter what login you will go the account page
    this.route.navigateByUrl('/account');

    /*if (this.username == "abc" && this.password == "123")
    {
        this.router.navigateByUrl('/account');
    }
    else
    {
        alert("Invalid login");
        }*/

  }

}
