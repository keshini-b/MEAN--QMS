import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NodeutilityService } from 'src/app/nodeutility.service';

@Component({
  selector: 'app-ulog',
  templateUrl: './ulog.component.html',
  styleUrls: ['./ulog.component.css']
})
export class UlogComponent {
  msg:string="";
  user1:string | null="";
  constructor(private util:NodeutilityService,private router:Router){

  }
  /*ngOnInit(): void {
    // Retrieve the 'user' value from local storage
    this.user1 = localStorage.getItem('user1');
    if(this.user1!=null)
      {
        this.router.navigate(['/ulog']);
      }
  }*/
  onSubmit(form: any) {
    this.util.insert2(form.value.username, form.value.pw).subscribe((data) => {
        if (data.status){
          localStorage.setItem("user1",form.value.username);
          this.msg = data.message;
          alert('loggedin successfully');
          this.router.navigate(['/uhome']);

          
        }
      
        else{
          this.msg = data.message;
        }
        
      });
  }
}
