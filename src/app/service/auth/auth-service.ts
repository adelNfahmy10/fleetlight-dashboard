import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
    private readonly _HttpClient = inject(HttpClient)

    login(data:any):Observable<any>{
        return this._HttpClient.post(`${environment.baseUrl}Auth/login`, data);
    }

    register(data:any):Observable<any>{
        return this._HttpClient.post(`${environment.baseUrl}UserManager/RegisterNewUser`, data);
    }

    logout():Observable<any>{
        return this._HttpClient.post(`${environment.baseUrl}Auth/logout`, {});
    }

    changePassword(data:any):Observable<any>{
        return this._HttpClient.post(`${environment.baseUrl}Auth/change-password`, data);
    }

    addNewPassword(data:any):Observable<any>{
        return this._HttpClient.post(`${environment.baseUrl}Auth/AddNewPassword`, data);
    }

    refreshToken(data:any):Observable<any>{
        return this._HttpClient.post(`${environment.baseUrl}Auth/refresh`, data);
    }
}
