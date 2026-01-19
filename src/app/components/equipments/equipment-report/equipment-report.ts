import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';
import { TranslatePipe } from '@ngx-translate/core';
import { EquipmentService } from '../../../service/equipment/equipment-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-equipment-report',
  imports: [TranslatePipe, ReactiveFormsModule, NgSelectComponent],
  templateUrl: './equipment-report.html',
  styleUrl: './equipment-report.css',
})
export class EquipmentReport implements OnInit{
    private readonly _FormBuilder = inject(FormBuilder)
    private readonly _EquipmentService = inject(EquipmentService)
    private readonly _ToastrService = inject(ToastrService)

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

    isCheckRequest:boolean = false

    equpimentsReportForm:FormGroup = this._FormBuilder.group({
        equipmentId:[''],
        maintenanceDescription:[''],
        usageHours:[''],
        fuelLiters:[''],
        kilometers:[''],
    })

    submitEquipmentReport():void{
        let data = this.equpimentsReportForm.value

        if(this.isCheckRequest){
            this.createMaintenanceRequests()
        } else {
            this.equpimentsReportForm.get('maintenanceDescription')?.setValue('')
        }

        this._EquipmentService.reportEquipment(data).subscribe({
            next:(res)=>{
                this.equpimentsReportForm.reset()
                this._ToastrService.success(res.msg)
            },
            error:(err)=> {
                this._ToastrService.error(err.error.msg)
            },
        })

    }

    createMaintenanceRequests():void{
        let data = {
            equipmentId : this.equpimentsReportForm.get('equipmentId')?.value,
            maintenanceDescription : this.equpimentsReportForm.get('maintenanceDescription')?.value,
        }
        console.log(data);


        this._EquipmentService.CreateMaintenanceRequest(data).subscribe({
            next:(res)=>{
                console.log(res);
            }
        })
    }
}
