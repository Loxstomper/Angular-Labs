import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = "";
  password:string = "";

  constructor(private router:Router, private form:FormsModule, private http:HttpClient) { }

  ngOnInit() {
    console.log("Dom is ready");
    if(typeof(Storage) !== "undefined"){

    }
  }

  loginUser(event)
  {
    event.preventDefault();

    // send post request - check feedback
    this.http.post("http://localhost:3000/login", {username:this.username, password:this.password}).subscribe(
        res=>{
            if (res['ok'] == 'true'){
                let user = {"user_id": 1, "username": this.username, "birth_date": "20/07/1969", "age": 49};
                sessionStorage.setItem('user', JSON.stringify(user));
                this.router.navigateByUrl('/account');
            }
            else {
                //this.router.navigateByUrl('/login');
            }
        }
    )



    //localStorage.setItem("user_id", "1");
    //localStorage.setItem("user_name", this.username);
    //localStorage.setItem("birth_date", "20/07/1969");
    //localStorage.setItem("user_age", "49");

    // no matter what login you will go the account page
    // this.router.navigateByUrl('/account');

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
