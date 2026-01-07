import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from "@bhplugin/ng-datatable";
import { EquipmentService } from '../../../service/equipment/equipment-service';
import { TranslatePipe } from '@ngx-translate/core';
import { IconPencilComponent } from "../../../shared/icon/icon-pencil";
import { IconTrashLinesComponent } from "../../../shared/icon/icon-trash-lines";
import { IconFileComponent } from "../../../shared/icon/icon-file";
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-equpiments',
  imports: [DataTableModule, FormsModule, TranslatePipe, IconPencilComponent, IconTrashLinesComponent, IconFileComponent, RouterLink],
  templateUrl: './view-equpiments.html',
  styleUrl: './view-equpiments.css',
})
export class ViewEqupiments implements OnInit{
    private readonly _EquipmentService = inject(EquipmentService)
    private readonly _ToastrService = inject(ToastrService)
    private readonly _Router = inject(Router)

    search = '';
    cols = [
        // { field: 'id', title: 'ID', isUnique: true },
        { field: 'brand', title: 'العلامة التجارية' },
        { field: 'model', title: 'الطراز' },
        { field: 'yearOfManufacture', title: 'سنة الصنع' },
        { field: 'chassisNumber', title: 'رقم الشاسية' },
        { field: 'assetNumber', title: 'رقم الأصل' },
        { field: 'action', title: 'الإجراء', sort: false, headerClass: 'justify-center' },
    ];

    allEquipments:any[] = []
    ngOnInit(): void {
        this.getAllEquipments()
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
