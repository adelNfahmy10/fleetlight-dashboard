import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
    private readonly _HttpClient = inject(HttpClient)

    getAllEquipments():Observable<any>{
        return this._HttpClient.get(`${environment.baseUrl}Equipment/GetAllEquipments`)
    }

    getEquipmentById(id:any):Observable<any>{
        return this._HttpClient.get(`${environment.baseUrl}Equipment/GetEquipmentById/${id}`)
    }

    createEquipment(data:any):Observable<any>{
        return this._HttpClient.post(`${environment.baseUrl}Equipment/CreateEquipment`, data)
    }

    updateEquipment(data:any):Observable<any>{
        return this._HttpClient.put(`${environment.baseUrl}Equipment/UpdateEquipment`, data)
    }

    deleteEquipment(id:any):Observable<any>{
        return this._HttpClient.delete(`${environment.baseUrl}Equipment/DeleteEquipment/${id}`)
    }

    downloadEquipmentsExcel():Observable<any>{
        return this._HttpClient.get(`${environment.baseUrl}Equipment/DownloadTemplate`,
            {
                responseType: 'blob'
            }
        )
    }

}
