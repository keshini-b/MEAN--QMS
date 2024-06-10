import { Component } from '@angular/core';
import { NodeutilityService } from 'src/app/nodeutility.service';

@Component({
  selector: 'app-aview',
  templateUrl: './aview.component.html',
  styleUrls: ['./aview.component.css']
})
export class AviewComponent {
  msg:string="";
  sList:any[]=[];
  constructor(private util:NodeutilityService){
		this.display();
	}

  display() {
    this.util.display().subscribe((data) => {
      if (data.status) {
        this.sList = data.list;
      }
      this.msg = data.message;
    });
  }
}
