import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
    private readonly _HttpClient = inject(HttpClient)

    getAllRoles():Observable<any>{
        return this._HttpClient.get(`${environment.baseUrl}Roles/GetAllRoles`);
    }

    addNewRole(data:any):Observable<any>{
        return this._HttpClient.post(`${environment.baseUrl}Roles/AddNewRole`, data);
    }

    deleteRole(roleName:any):Observable<any>{
        return this._HttpClient.delete(`${environment.baseUrl}Roles/DeleteRole/roleName?roleName=${roleName}`);
    }
}
