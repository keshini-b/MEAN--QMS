import { Component } from '@angular/core';
import { NodeutilityService } from 'src/app/nodeutility.service';

@Component({
  selector: 'app-uprof',
  templateUrl: './uprof.component.html',
  styleUrls: ['./uprof.component.css']
})
export class UprofComponent {
  searchName: string = '';
  selectedPerson: any;

  constructor(private util: NodeutilityService) {}

  search(form:any) {
    if (this.searchName.trim() !== '') {
      this.util.find1(this.searchName).subscribe((data) => {
        if (data.status) {
          this.selectedPerson = data.person;
        

          console.log("success");
        } else {
          this.selectedPerson = null;
          // Handle case when person is not found
          
        }
      });
    }
  }
}
