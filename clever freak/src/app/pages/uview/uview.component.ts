import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-uview',
  templateUrl: './uview.component.html',
  styleUrls: ['./uview.component.css']
})
export class UviewComponent  {
  userList: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchUserData();
  }

  fetchUserData(): void {
    this.http.get<any>('http://your-server-url/findAll').subscribe(
      (response) => {
        this.userList = response.list;
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

}
