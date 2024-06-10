import { Component } from '@angular/core';
import { NodeutilityService } from 'src/app/nodeutility.service';

@Component({
  selector: 'app-aprof',
  templateUrl: './aprof.component.html',
  styleUrls: ['./aprof.component.css']
})
export class AprofComponent {
  searchName: string = '';
  selectedPerson: any;

  constructor(private util: NodeutilityService) {}

  search(form:any) {
    if (this.searchName.trim() !== '') {
      this.util.find2(this.searchName).subscribe((data) => {
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
