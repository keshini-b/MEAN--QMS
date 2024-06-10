import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NodeutilityService } from 'src/app/nodeutility.service';

@Component({
  selector: 'app-alog',
  templateUrl: './alog.component.html',
  styleUrls: ['./alog.component.css']
})
export class AlogComponent {
  msg:string="";
  user1:string | null="";
  constructor(private util:NodeutilityService,private router:Router){

  }
  /*ngOnInit(): void {
    // Retrieve the 'user' value from local storage
    this.user1 = localStorage.getItem('user1');
    if(this.user1!=null)
      {
        this.router.navigate(['/alog']);
      }
  }*/
  onSubmit(form: any) {
    this.util.insert3(form.value.username, form.value.pw).subscribe((data) => {
        if (data.status){
          localStorage.setItem("user1",form.value.username);
          this.msg = data.message;
          alert(this.msg);
          this.router.navigate(['/ahome']);

          
        }
      
        else{
          this.msg = data.message;
          alert("Please enter valid values"); 
          alert(this.msg);
        }
        
      });
  }
}
