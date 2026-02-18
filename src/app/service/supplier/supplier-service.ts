import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  private readonly _HttpClient = inject(HttpClient)

    // ################################## Spare Parts ####################################
    GetAllSpareParts(search?:any):Observable<any>{
        return this._HttpClient.get(`${environment.baseUrl}EquipmentSparePart/GetAllSpareParts`)
    }

    GetSparePartById(id:any):Observable<any>{
        return this._HttpClient.get(`${environment.baseUrl}EquipmentSparePart/GetSparePartById/${id}`)
    }

    CreateSparePart(data:any):Observable<any>{
        return this._HttpClient.post(`${environment.baseUrl}EquipmentSparePart/CreateSparePart`, data)
    }

    UpdateSparePart(data:any):Observable<any>{
        return this._HttpClient.put(`${environment.baseUrl}EquipmentSparePart/UpdateSparePart`, data)
    }

    DeleteSparePart(id:any):Observable<any>{
        return this._HttpClient.delete(`${environment.baseUrl}EquipmentSparePart/DeleteSparePart/${id}`)
    }

    UploadSparePartExcel(body:any):Observable<any>{
        return this._HttpClient.post(`${environment.baseUrl}EquipmentSparePart/UploadExcelFile`, body)
    }

    DownloadSparePartExcel():Observable<any>{
        return this._HttpClient.get(`${environment.baseUrl}EquipmentSparePart/DownloadExcelTemplate`,
            {
                responseType: 'blob'
            }
        )
    }
}
