import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '@bhplugin/ng-datatable';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { IconPencilComponent } from '../../../shared/icon/icon-pencil';
import { IconTrashLinesComponent } from '../../../shared/icon/icon-trash-lines';
import { IconFileComponent } from '../../../shared/icon/icon-file';
import { RouterLink } from '@angular/router';
import { IconInfoCircleComponent } from '../../../shared/icon/icon-info-circle';
import { NgClass } from '@angular/common';
import { EquipmentService } from '../../../service/equipment/equipment-service';
import { ToastrService } from 'ngx-toastr';
import { SupplierService } from '../../../service/supplier/supplier-service';

@Component({
  selector: 'app-view-product',
  imports: [DataTableModule, FormsModule, TranslatePipe, IconPencilComponent, IconTrashLinesComponent, IconFileComponent, RouterLink],

  templateUrl: './view-product.html',
  styleUrl: './view-product.css',
})
export class ViewProduct {
    private readonly _SupplierService = inject(SupplierService)
    private readonly _ToastrService = inject(ToastrService)
    private readonly _TranslateService = inject(TranslateService)

    search = '';
    allSpareParts:any[] = []
    translatedCols: any[] = [];
    translatedColsDetails: any[] = [];

    cols = [
        // { field: 'id', title: 'ID', isUnique: true },
        { field: 'imagePath', title: 'Suppliers.View_Product.imageLabel' },
        { field: 'typeAr', title: 'Suppliers.View_Product.TypeLabel' },
        { field: 'partNumber', title: 'Suppliers.View_Product.partNumberLabel' },

        { field: 'yearOfManufacture', title: 'Suppliers.View_Product.yearOfManufactureLabel' },
        { field: 'manufacturer', title: 'Suppliers.View_Product.ManuFactureLabel' },

        { field: 'nameAr', title: 'Suppliers.View_Product.NameLabel' },
        { field: 'brandAr', title: 'Suppliers.View_Product.BrandLabel' },

        { field: 'assetNumber', title: 'Suppliers.View_Product.AssetNumberLabel' },
        { field: 'price', title: 'Suppliers.View_Product.PriceLable' },

        { field: 'action', title: 'Suppliers.View_Product.ActionLabel', sort: false, headerClass: 'justify-center' },
    ];

    ngOnInit(): void {
        this.getAllSpareParts()
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

    getAllSpareParts():void{
        this._SupplierService.GetAllSpareParts().subscribe({
            next:(res)=>{
                this.allSpareParts = res.data
            }
        })
    }

    deleteSparePart(id:any):void{
        this._SupplierService.DeleteSparePart(id).subscribe({
            next:(res)=>{
                this._ToastrService.success(res.msg)
                this.getAllSpareParts()
            }
        })
    }

    downloadExcel():void{
        this._SupplierService.DownloadSparePartExcel().subscribe({
            next: (blob: Blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'SpareParts.xlsx';
                a.click();
                window.URL.revokeObjectURL(url);
            },
            error: (err) => {
            console.error(err);
            }
        })
    }
}
