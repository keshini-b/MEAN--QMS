import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NodeutilityService } from 'src/app/nodeutility.service';

@Component({
  selector: 'app-uchange',
  templateUrl: './uchange.component.html',
  styleUrls: ['./uchange.component.css']
})
export class UchangeComponent {
  ngOnInit(): void{};
  constructor(private util: NodeutilityService, private router: Router) {}

  msg: string = '';

  onSubmit(form: any) {
    this.util.update(form.value.email, form.value.oldpass, form.value.newpass).subscribe((data) => {
      if (data.status) {
        this.msg = data.message;
        alert("Updated");
        console.log(this.msg);

      }
      else{
        this.msg = data.message;
      }
      });
  }
}
