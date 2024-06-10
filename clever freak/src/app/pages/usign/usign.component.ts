import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NodeutilityService } from 'src/app/nodeutility.service';

@Component({
  selector: 'app-usign',
  templateUrl: './usign.component.html',
  styleUrls: ['./usign.component.css']
})
export class UsignComponent {
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
  
      
this.util.checkUnameAvailability(this.username).subscribe(
  (data: any) => {
    if (!data.available) {
      alert("Email is already registered");
    } else {
      this.util.insert1(username, phno, password).subscribe(
        (insertData: any) => {
          if (insertData.status) {
            this.msg = insertData.message;
            alert("Registered.");
            this.router.navigate(['/ulog']);
          } else {
            console.error("Insertion failed:", insertData.message);
            // Handle insertion failure appropriately
          }
        },
        (insertError) => {
          console.error("Error inserting data:", insertError);
          alert("Error inserting data. Please try again.");
        }
      );
    }
  },
  (checkError) => {
    console.error("Error checking email availability:", checkError);
    alert("Email is already registered. Please try again.");
  }
);
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
