import { Component,OnInit } from '@angular/core';
import { NodeutilityService } from 'src/app/nodeutility.service';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit{
  msg:string="";
  sList:any[]=[];
  constructor(private util:NodeutilityService){
		this.display();
	}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
