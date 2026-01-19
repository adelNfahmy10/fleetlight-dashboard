import { Component, inject } from '@angular/core';
import { EquipmentService } from '../../../service/equipment/equipment-service';
import { ActivatedRoute } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from '@bhplugin/ng-datatable';
import { DatePipe, NgClass } from '@angular/common';
import { IconInfoCircleComponent } from '../../../shared/icon/icon-info-circle';
import { ToastrService } from 'ngx-toastr';
import { IconChecksComponent } from "../../../shared/icon/icon-checks";

@Component({
  selector: 'app-respond-maintenance-requests',
  imports: [DataTableModule, FormsModule, TranslatePipe, NgClass, DatePipe, IconInfoCircleComponent, ReactiveFormsModule, IconChecksComponent],
  templateUrl: './respond-maintenance-requests.html',
  styleUrl: './respond-maintenance-requests.css',
})
export class RespondMaintenanceRequests {
    private readonly _EquipmentService = inject(EquipmentService)
    private readonly _TranslateService = inject(TranslateService)
    private readonly _ToastrService = inject(ToastrService)
    private readonly _FormBuilder = inject(FormBuilder)

    allRespond:any[] = []
    translatedColsRequest: any[] = [];
    colsRequests = [
        { field: 'requesterName', title: 'Equipments.Details_Equipment.RequesterNameLabel' },
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
        this._EquipmentService.getReceivedByOwner().subscribe({
            next:(res)=>{
                this.allRespond = res.data
            }
        })
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
