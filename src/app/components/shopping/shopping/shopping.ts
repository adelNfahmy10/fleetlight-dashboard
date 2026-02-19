import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { SupplierService } from '../../../service/supplier/supplier-service';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgxCustomModalComponent } from "ngx-custom-modal";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingService } from '../../../service/shopping/shopping-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shopping',
  imports: [TranslatePipe, CommonModule, NgxCustomModalComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './shopping.html',
  styleUrl: './shopping.css',
})
export class Shopping implements OnInit{
    private readonly _FormBuilder = inject(FormBuilder)
    private readonly _SupplierService = inject(SupplierService)
    private readonly _ShoppingService = inject(ShoppingService)
    private readonly _ToastrService = inject(ToastrService)

    allSpareParts:any[] = []
    qty = 1;

    @ViewChild('modal') modal!: NgxCustomModalComponent;

    ngOnInit(): void {
        this.getAllSpareParts()
    }

    getAllSpareParts():void{
        this._SupplierService.GetAllSpareParts().subscribe({
            next:(res)=>{
                this.allSpareParts = res.data
            }
        })
    }

    sparePartId:string = ''
    openModal(id:string) {
        this.sparePartId = id
        this.modal.open();
    }

    requestOfferForm:FormGroup = this._FormBuilder.group({
        sparePartId:[null],
        requestedPrice:[null],
        requesterNote:[null],
        quantity:[null],
    })

    submitRequestOffer():void{
        let data = this.requestOfferForm.value
        data.sparePartId = this.sparePartId

        this._ShoppingService.CreateOfferPrice(data).subscribe({
            next:(res)=>{
                this._ToastrService.success(res.msg)
                this.closeModal()
            }
        })
    }

    closeModal() {
        this.modal.close();
        this.requestOfferForm.reset()
    }

    increaseQty() {
        this.qty++;
    }

    decreaseQty() {
        if (this.qty > 1) {
            this.qty--;
        }
    }

    orderForm:FormGroup = this._FormBuilder.group({
        sparePartId:[null],
        quantity:[null],
        notes:[null],
    })

    submitOrderForm(id:any):void{
        let data = this.orderForm.value
        data.sparePartId = id
        data.quantity = this.qty
        console.log(data);

        this._ShoppingService.CreateOrder(data).subscribe({
            next:(res)=>{
                this._ToastrService.success(res.msg)
                this.orderForm.reset()
                data.sparePartId = ''
                data.quantity = ''
            }
        })
    }


}
