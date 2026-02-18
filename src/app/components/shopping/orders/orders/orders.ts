import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '@bhplugin/ng-datatable';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { IconPencilComponent } from '../../../../shared/icon/icon-pencil';
import { IconTrashLinesComponent } from '../../../../shared/icon/icon-trash-lines';
import { IconFileComponent } from '../../../../shared/icon/icon-file';
import { RouterLink } from '@angular/router';
import { IconInfoCircleComponent } from '../../../../shared/icon/icon-info-circle';
import { NgClass } from '@angular/common';
import { EquipmentService } from '../../../../service/equipment/equipment-service';
import { ToastrService } from 'ngx-toastr';
import { ShoppingService } from '../../../../service/shopping/shopping-service';

@Component({
  selector: 'app-orders',
  imports: [DataTableModule, FormsModule, TranslatePipe, IconPencilComponent, IconTrashLinesComponent, RouterLink, IconInfoCircleComponent, NgClass],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
    private readonly _ShoppingService = inject(ShoppingService)
    private readonly _EquipmentService = inject(EquipmentService)
    private readonly _ToastrService = inject(ToastrService)
    private readonly _TranslateService = inject(TranslateService)

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

}
