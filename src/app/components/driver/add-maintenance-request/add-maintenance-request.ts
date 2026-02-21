import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EquipmentService } from '../../../service/equipment/equipment-service';
import { ToastrService } from 'ngx-toastr';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { DataTableModule } from '@bhplugin/ng-datatable';
import { DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-add-maintenance-request',
  imports: [TranslatePipe, ReactiveFormsModule, NgSelectComponent, DataTableModule, NgClass, DatePipe],
  templateUrl: './add-maintenance-request.html',
  styleUrl: './add-maintenance-request.css',
})
export class AddMaintenanceRequest {
private readonly _FormBuilder = inject(FormBuilder)
    private readonly _EquipmentService = inject(EquipmentService)
    private readonly _ToastrService = inject(ToastrService)
    private readonly _TranslateService = inject(TranslateService)

    role:string | null = localStorage.getItem('role')
    allEquipments:any[] = []
    allRequests:any[] = []
    translatedCols: any[] = [];
    priority:any[] = [
        'Routine',
        'Critical'
    ]

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
        if(this.role == 'Mechanical'){
            this._EquipmentService.GetMyMaintenanceRequests().subscribe({
                next:(res)=>{
                    this.allRequests = res.data
                }
            })
        } else if(this.role == 'Driver'){
            this._EquipmentService.GetDriverMaintenanceRequests().subscribe({
                next:(res)=>{
                    this.allRequests = res.data
                }
            })
        }
    }

    maintenanceRequestForm:FormGroup = this._FormBuilder.group({
        equipmentId:[''],
        maintenanceDescription:[''],
        priority:['']
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
