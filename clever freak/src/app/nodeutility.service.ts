import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeutilityService {

  constructor(private HttpClient:HttpClient) { }
  url:string="http://localhost:5000/";
  insert (username:string,phno:string,pw:string):Observable<any>{
    return this.HttpClient.get(this.url+"insert?&name="+username+"&phno="+phno+"&pw="+pw);
  }
  insert1 (username:string,phno:string,pw:string):Observable<any>{
    return this.HttpClient.get(this.url+"insert1?&name="+username+"&phno="+phno+"&pw="+pw);
  }
  
  insert2(username:string,pw:string):Observable<any>{
    return this.HttpClient.get(this.url+"insert2?&username="+username+"&pw="+pw);
  }

  insert3(username:string,pw:string):Observable<any>{
    return this.HttpClient.get(this.url+"insert3?&username="+username+"&pw="+pw);
  }

  insert4(email:string,reviewText:string,rating:number):Observable<any>{
    return this.HttpClient.get(this.url+"insert4?&email="+email+"&reviewText="+reviewText+"&rating="+rating);
  }

  delete(name:string): Observable<any> {
    return this.HttpClient.get(this.url + "delete?name="+name);  
  
  }

  update (email:string,oldpass:string,newpass:string):Observable<any>{
    return this.HttpClient.get(this.url+"update?email="+email+"&oldpass="+oldpass+"&newpass="+newpass);
  }
  display():Observable<any>{
    return this.HttpClient.get(this.url+"findAll");
  }

  find1(searchName:string): Observable<any> {
    return this.HttpClient.get(this.url + 'find1?searchName='+searchName);
  }


  find2(searchName:string): Observable<any> {
    return this.HttpClient.get(this.url + 'find2?searchName='+searchName);
  }


  checkUnameAvailability(username: string): Observable<any> {
    return this.HttpClient.get(this.url + 'checkUnameAvailability?username='+username);
  }

}
