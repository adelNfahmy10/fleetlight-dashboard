import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
    private readonly _HttpClient = inject(HttpClient)

    GetSupplierOffers():Observable<any>{
        return this._HttpClient.get(`${environment.baseUrl}SparePartOffer/GetSupplierOffers`)
    }

    GetUserOffersPrice():Observable<any>{
        return this._HttpClient.get(`${environment.baseUrl}SparePartOffer/GetMyOffers`)
    }

    CreateOfferPrice(body:any):Observable<any>{
        return this._HttpClient.post(`${environment.baseUrl}SparePartOffer/CreateOffer`, body)
    }

    RespondToOfferPrice(body:any):Observable<any>{
        return this._HttpClient.post(`${environment.baseUrl}SparePartOffer/RespondToOffer`, body)
    }

    MakeDecision(body:any):Observable<any>{
        return this._HttpClient.post(`${environment.baseUrl}SparePartOffer/MakeDecision`, body)
    }

    CreateOrder(body:any):Observable<any>{
        return this._HttpClient.post(`${environment.baseUrl}Order/CreateOrder`, body)
    }

    getAllOrders():Observable<any>{
        return this._HttpClient.get(`${environment.baseUrl}Order/GetSupplierOrders`)
    }
}
