import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EquipmentService } from '../../../service/equipment/equipment-service';
import { ToastrService } from 'ngx-toastr';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { DataTableModule } from '@bhplugin/ng-datatable';
import { DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-maintenance-requests',
imports: [TranslatePipe, ReactiveFormsModule, NgSelectComponent, DataTableModule, NgClass, DatePipe],
  templateUrl: './maintenance-requests.html',
  styleUrl: './maintenance-requests.css',
})
export class MaintenanceRequests {
    private readonly _FormBuilder = inject(FormBuilder)
    private readonly _EquipmentService = inject(EquipmentService)
    private readonly _ToastrService = inject(ToastrService)
    private readonly _TranslateService = inject(TranslateService)

    allEquipments:any[] = []
    allRequests:any[] = []
    translatedCols: any[] = [];
    search = '';

    cols = [
        // { field: 'id', title: 'ID', isUnique: true },
        { field: 'requesterName', title: 'Equipments.Maintenance_Request.RequesterNameLabel' },
        { field: 'createdDate', title: 'Equipments.Maintenance_Request.CreatedDateLabel' },
        { field: 'requestType', title: 'Equipments.Maintenance_Request.RequestTypeLabel' },
        { field: 'equipmentModel', title: 'Equipments.Maintenance_Request.EquipmentModelLabel' },
        { field: 'maintenanceDescription', title: 'Equipments.Maintenance_Request.MaintenanceDescriptionLabel' },
        { field: 'maintenanceResponse', title: 'Equipments.Details_Equipment.MaintenanceResponseLabel' },
        { field: 'status', title: 'Equipments.Maintenance_Request.StatusLabel' },
    ];

    ngOnInit(): void {
        this.getAllEquipments()
        this.getAllRequests()
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

    getAllRequests():void{
        this._EquipmentService.getSentByMechanical().subscribe({
            next:(res)=>{
                this.allRequests = res.data
                console.log(this.allRequests);
            }
        })
    }

    maintenanceRequestForm:FormGroup = this._FormBuilder.group({
        equipmentId:[''],
        maintenanceDescription:[''],
    })

    submitRequest():void{
        let data = this.maintenanceRequestForm.value

        this._EquipmentService.CreateMaintenanceRequest(data).subscribe({
            next:(res)=>{
                this._ToastrService.success(res.msg)
                this.getAllRequests()
                this.maintenanceRequestForm.reset()
            }
        })
    }
}


