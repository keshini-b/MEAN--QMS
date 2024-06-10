import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NodeutilityService } from 'src/app/nodeutility.service';

@Component({
  selector: 'app-asign',
  templateUrl: './asign.component.html',
  styleUrls: ['./asign.component.css']
})
export class AsignComponent {
  public usernameFormControl = new FormControl(null,[Validators.required, Validators.email]);
  public phnoFormControl = new FormControl(null,[Validators.minLength(10),Validators.maxLength(10)]);
  public passwordFormControl = new FormControl(null,[Validators.minLength(6)]);

  public userForm! : FormGroup;
  constructor(private util:NodeutilityService,private router:Router){}
  msg:string='';
  username:string='';
  phno:string='';
  pw:string='';
  onSubmit(form: any) {
    if (this.userForm.valid) {
      const username = this.userForm.value.username;
      const phno = this.userForm.value.phno;
      const password = this.userForm.value.password;
  
      // Make sure to pass the correct values to the API request
      this.util.insert(username, phno, password).subscribe((data) => {
        if (data.status) {
          this.msg = data.message;
          alert("Registration Succesfull");
        }
      });
  
      this.router.navigate(['/alog']);
    } else {
      //alert("Please enter valid values"); 
      this.userForm.markAllAsTouched();
      alert("Please enter valid values"); // Mark the form controls as touched to display validation errors
    }
  }
  

  ngOnInit(): void {
    this.userForm = new FormGroup({
      username: this.usernameFormControl,
      phno:this.phnoFormControl,
      password: this. passwordFormControl ,
    });
  }

  submit() {
    console.log(this.userForm.value);
  }

}
