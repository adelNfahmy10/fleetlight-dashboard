import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
    private readonly _HttpClient = inject(HttpClient)

    // ################################## Equipment ####################################
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

    reportEquipment(data:any):Observable<any>{
        return this._HttpClient.put(`${environment.baseUrl}Equipment/UpdateEquipmentUsage`, data)
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

    // ################################## Equipment Maintenance Request ####################################
    // Mechanical
    GetMyMaintenanceRequests():Observable<any>{
        return this._HttpClient.get(`${environment.baseUrl}EquipmentMaintenanceRequest/GetMyMaintenanceRequests`)
    }

    // Equipment Owner
    GetFleetMaintenanceMonitoring():Observable<any>{
        return this._HttpClient.get(`${environment.baseUrl}EquipmentMaintenanceRequest/GetFleetMaintenanceMonitoring`)
    }

    // Driver Owner
    GetDriverMaintenanceRequests():Observable<any>{
        return this._HttpClient.get(`${environment.baseUrl}EquipmentMaintenanceRequest/GetDriverMaintenanceRequests`)
    }

    CreateMaintenanceRequest(data:any):Observable<any>{
        return this._HttpClient.post(`${environment.baseUrl}EquipmentMaintenanceRequest/Create`, data)
    }

    RespondMaintenanceRequest(data:any):Observable<any>{
        return this._HttpClient.post(`${environment.baseUrl}EquipmentMaintenanceRequest/Respond`, data)
    }


}
