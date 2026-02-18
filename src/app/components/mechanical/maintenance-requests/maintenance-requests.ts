import { DatePipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from '@bhplugin/ng-datatable';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { IconInfoCircleComponent } from '../../../shared/icon/icon-info-circle';
import { IconChecksComponent } from '../../../shared/icon/icon-checks';
import { EquipmentService } from '../../../service/equipment/equipment-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-maintenance-requests',
  imports: [DataTableModule, FormsModule, TranslatePipe, NgClass, DatePipe, IconInfoCircleComponent, ReactiveFormsModule, IconChecksComponent],
  templateUrl: './maintenance-requests.html',
  styleUrl: './maintenance-requests.css',
})
export class MaintenanceRequests {
    private readonly _EquipmentService = inject(EquipmentService)
    private readonly _TranslateService = inject(TranslateService)
    private readonly _ToastrService = inject(ToastrService)
    private readonly _FormBuilder = inject(FormBuilder)

    role:string | null = localStorage.getItem('role')
    allRespond:any[] = []
    translatedColsRequest: any[] = [];
    colsRequests = [
        { field: 'requesterName', title: 'Equipments.Details_Equipment.RequesterNameLabel' },
        { field: 'mechanicalName', title: 'Equipments.Details_Equipment.MechanicalNameLabel' },
        { field: 'createdDate', title: 'Equipments.Details_Equipment.CreatedDateLabel' },
        { field: 'requestType', title: 'Equipments.Details_Equipment.RequestTypeLabel' },
        { field: 'equipmentModel', title: 'Equipments.Details_Equipment.EquipmentModelLabel' },
        { field: 'maintenanceDescription', title: 'Equipments.Details_Equipment.MaintenanceDescriptionLabel' },
        { field: 'maintenanceResponse', title: 'Equipments.Details_Equipment.MaintenanceResponseLabel' },
        { field: 'status', title: 'Equipments.Details_Equipment.StatusLabel' },
        { field: 'action', title: 'Equipments.Details_Equipment.ActionLabel', sort: false, headerClass: 'justify-center' },
    ];

    ngOnInit(): void {
        this.buildColumns();
        this.getAllRespond()
        this._TranslateService.onLangChange.subscribe(() => {
            this.buildColumns();
        });
    }

    buildColumns(): void {
        this.translatedColsRequest = this.colsRequests.map(col => ({
            ...col,
            title: this._TranslateService.instant(col.title),
        }));
    }

    getAllRespond():void{
        if(this.role == 'Equipment owner'){
            this._EquipmentService.GetFleetMaintenanceMonitoring().subscribe({
                next:(res)=>{
                    this.allRespond = res.data
                }
            })
        } else if(this.role == 'Mechanical') {
            this._EquipmentService.GetMyMaintenanceRequests().subscribe({
                next:(res)=>{
                    this.allRespond = res.data
                }
            })
        }

    }

    requestId:string | null = null

    getRequestData(reqId:any):void{
        this.requestId = reqId
    }

    respondForm:FormGroup = this._FormBuilder.group({
        requestId: [null],
        maintenanceResponse: [null],
    })

    submitRespond():void{
        let data = this.respondForm.value
        data.requestId = this.requestId

        this._EquipmentService.RespondMaintenanceRequest(data).subscribe({
            next:(res)=>{
                this.respondForm.reset()
                this.requestId = null
                this._ToastrService.success(res.msg)
                this.getAllRespond()
            }
        })
    }
}
