import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from "@bhplugin/ng-datatable";
import { EquipmentService } from '../../../service/equipment/equipment-service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { IconPencilComponent } from "../../../shared/icon/icon-pencil";
import { IconTrashLinesComponent } from "../../../shared/icon/icon-trash-lines";
import { IconFileComponent } from "../../../shared/icon/icon-file";
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';
import { IconInfoCircleComponent } from "../../../shared/icon/icon-info-circle";
import { NgClass } from '@angular/common';
import { NgxCustomModalComponent } from "ngx-custom-modal";

@Component({
  selector: 'app-view-equpiments',
  imports: [DataTableModule, FormsModule, TranslatePipe, IconPencilComponent, IconTrashLinesComponent, IconFileComponent, RouterLink, IconInfoCircleComponent, NgClass, NgxCustomModalComponent],
  templateUrl: './view-equpiments.html',
  styleUrl: './view-equpiments.css',
})
export class ViewEqupiments implements OnInit{
    private readonly _EquipmentService = inject(EquipmentService)
    private readonly _ToastrService = inject(ToastrService)
    private readonly _TranslateService = inject(TranslateService)
    private readonly _Router = inject(Router)

    search = '';
    allEquipments:any[] = []
    translatedCols: any[] = [];
    translatedColsDetails: any[] = [];

    cols = [
        // { field: 'id', title: 'ID', isUnique: true },
        { field: 'imagePath', title: 'Equipments.View_Equipments.imageLabel' },
        { field: 'brand', title: 'Equipments.View_Equipments.BrandLabel' },
        { field: 'model', title: 'Equipments.View_Equipments.ModelLabel' },
        { field: 'yearOfManufacture', title: 'Equipments.View_Equipments.ManuFactureLabel' },
        { field: 'chassisNumber', title: 'Equipments.View_Equipments.ChassisNumberLabel' },
        { field: 'assetNumber', title: 'Equipments.View_Equipments.AssetNumberLabel' },
        { field: 'salePrice', title: 'Equipments.View_Equipments.SalePriceLabel' },
        { field: 'rentPrice', title: 'Equipments.View_Equipments.RentPriceLabel' },
        { field: 'action', title: 'Equipments.View_Equipments.ActionLabel', sort: false, headerClass: 'justify-center' },
    ];

    colsDetails = [
        // { field: 'id', title: 'ID', isUnique: true },
        { field: 'userName', title: 'Equipments.View_Equipments.UserName' },
        { field: 'hours', title: 'Equipments.View_Equipments.HoursLable' },
        { field: 'gas', title: 'Equipments.View_Equipments.GasLabel' },
        { field: 'kilometters', title: 'Equipments.View_Equipments.KiloMetters' },
    ];


    equipmentDetails:any[] = [
        {
            userName:'Saed',
            hours:'8',
            gas:'70',
            kilometters:'48',
        }
    ]


    ngOnInit(): void {
        this.getAllEquipments()
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

        this.translatedColsDetails = this.colsDetails.map(col => ({
            ...col,
            title: this._TranslateService.instant(col.title),
        }));
    }

    getAllEquipments():void{
        this._EquipmentService.getAllEquipments().subscribe({
            next:(res)=>{
                this.allEquipments = res.data
            }
        })
    }

    deleteEquipment(id:any):void{
        this._EquipmentService.deleteEquipment(id).subscribe({
            next:(res)=>{
                this._ToastrService.success(res.msg)
                this.getAllEquipments()
            }
        })
    }

    downloadExcel():void{
        this._EquipmentService.downloadEquipmentsExcel().subscribe({
            next: (blob: Blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'Equipment.xlsx';
                a.click();
                window.URL.revokeObjectURL(url);
            },
            error: (err) => {
            console.error(err);
            }
        })
    }
}
