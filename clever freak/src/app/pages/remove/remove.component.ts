import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NodeutilityService } from 'src/app/nodeutility.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent {
  msg: string = '';
  constructor(
    fb: FormBuilder,
    private util: NodeutilityService,
    private router: Router
  ) {}

  delete(form:any){
    this.util.delete(form.value.name).subscribe((data)=>{
      if(data.status){
        this.msg=data.message;
        alert("Deleted Successfully ");
      }
      else{
        this.msg=data.message;
        alert('delete ');
      }
      /*if(data.status){
        this.router.navigate(['/index1']);
      }*/
    });
  }
}
