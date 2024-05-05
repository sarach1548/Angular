import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { User } from '../models/User'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private http: HttpClient) {
    }

    getUserFromServer(UserName: string, Password: string):Observable<any> {
       return this.http.get(`https://localhost:7120/JobSearchServer/GetUserDetails?userName=${UserName}&password=${Password}`)

    }


}
