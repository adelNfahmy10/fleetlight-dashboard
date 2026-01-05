import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    private readonly _HttpClient = inject(HttpClient)

    getAllUsers():Observable<any>{
        return this._HttpClient.get(`${environment.baseUrl}UserManager/GetAll`);
    }

    getUserById(id:any):Observable<any>{
        return this._HttpClient.get(`${environment.baseUrl}UserManager/GetById/${id}`);
    }

    updateUser(id:any, data:any):Observable<any>{
        return this._HttpClient.put(`${environment.baseUrl}UserManager/Update?id=${id}`, data);
    }

    updateUserRole(data:any):Observable<any>{
        return this._HttpClient.put(`${environment.baseUrl}UserManager/UpdateUserRoles`, data);
    }

    switchUserActive(id:any):Observable<any>{
        return this._HttpClient.post(`${environment.baseUrl}UserManager/SwitchUserActive/${id}`, {});
    }

    deleteUser(id:any):Observable<any>{
        return this._HttpClient.delete(`${environment.baseUrl}UserManager/DeleteUser/${id}`);
    }
}
