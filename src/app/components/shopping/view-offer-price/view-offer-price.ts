import { CommonModule, DatePipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DataTableModule } from '@bhplugin/ng-datatable';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { EquipmentService } from '../../../service/equipment/equipment-service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconInfoCircleComponent } from "../../../shared/icon/icon-info-circle";
import { ShoppingService } from '../../../service/shopping/shopping-service';
import { IconXComponent } from "../../../shared/icon/icon-x";
import { IconXCircleComponent } from "../../../shared/icon/icon-x-circle";
import { IconChecksComponent } from "../../../shared/icon/icon-checks";

@Component({
  selector: 'app-view-offer-price',
  imports: [DataTableModule, TranslatePipe, NgClass, FormsModule, IconInfoCircleComponent, DatePipe, CommonModule, ReactiveFormsModule, IconXComponent, IconXCircleComponent, IconChecksComponent],
  templateUrl: './view-offer-price.html',
  styleUrl: './view-offer-price.css',
})
export class ViewOfferPrice {
    private readonly _EquipmentService = inject(EquipmentService)
    private readonly _ShoppingService = inject(ShoppingService)
    private readonly _ToastrService = inject(ToastrService)
    private readonly _FormBuilder = inject(FormBuilder)
    private readonly _TranslateService = inject(TranslateService)

    role:string | null = localStorage.getItem('role')
    userName:string | null = localStorage.getItem('fullName')
    search = '';
    allOfferPrice:any[] = []
    translatedCols: any[] = [];
    translatedColsDetails: any[] = [];

    cols = [
        { field: 'supplierName', title: 'View_OFFER_PRICE.SupplierName' },
        { field: 'createdDate', title: 'View_OFFER_PRICE.RequestDate' },
        { field: 'sparePartName', title: 'View_OFFER_PRICE.SparePartName' },
        { field: 'requestedPrice', title: 'View_OFFER_PRICE.RequesterPrice' },
        { field: 'requesterNote', title: 'View_OFFER_PRICE.RequesterNote' },
        { field: 'supplierNote', title: 'View_OFFER_PRICE.SupplierNote' },
        { field: 'finalPrice', title: 'View_OFFER_PRICE.FinalPrice' },
        { field: 'status', title: 'View_OFFER_PRICE.StatusRequest' },
    ];

    ngOnInit(): void {
        this.getAllOfferPrice()
        this.buildColumns();
        this._TranslateService.onLangChange.subscribe(() => {
            this.buildColumns();
        });
    }

    buildColumns(): void {
        this.translatedCols = this.cols.map(col => ({
            ...col,
            title: this._TranslateService.instant(col.title),
        }));
    }

    getAllOfferPrice():void{
        if(this.role == 'Supplier'){
            this._ShoppingService.GetSupplierOffers().subscribe({
                next:(res)=>{
                    this.allOfferPrice = res.data
                }
            })
        } else {
             this._ShoppingService.GetUserOffersPrice().subscribe({
                next:(res)=>{
                    this.allOfferPrice = res.data
                }
            })
        }
    }

    offerId:string | null = null

    getRequestData(reqId:any):void{
        this.offerId = reqId
        console.log(reqId);

    }

    respondForm:FormGroup = this._FormBuilder.group({
        offerId : [null],
        finalPrice: [null],
        setAsSystemPrice: [true],
        supplierNote: [null],
    })

    submitRespond():void{
        let data = this.respondForm.value
        data.offerId = this.offerId
        if(data.finalPrice){
            data.setAsSystemPrice = false
        }
        console.log(data);

        this._ShoppingService.RespondToOfferPrice(data).subscribe({
            next:(res)=>{
                this.respondForm.reset()
                this.offerId = null
                this._ToastrService.success(res.msg)
                this.getAllOfferPrice()
            }
        })
    }

    MakeDecision(action:boolean, id:any):void{
        let data = {
            offerId: id,
            isAccepted: action
        }

        this._ShoppingService.MakeDecision(data).subscribe({
            next:(res)=>{
                this._ToastrService.success(res.msg)
                this.getAllOfferPrice()
            }
        })
    }
}
