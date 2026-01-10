import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { EquipmentService } from '../../../service/equipment/equipment-service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, switchMap } from 'rxjs';
import { NgSelectComponent } from "@ng-select/ng-select";

@Component({
  selector: 'app-add-equipment',
  imports: [TranslatePipe, ReactiveFormsModule, NgSelectComponent],
  templateUrl: './add-equipment.html',
  styleUrl: './add-equipment.css',
})
export class AddEquipment implements OnInit{
    private readonly _FormBuilder = inject(FormBuilder)
    private readonly _EquipmentService = inject(EquipmentService)
    private readonly _ToastrService = inject(ToastrService)
    private readonly _ActivatedRoute = inject(ActivatedRoute)
    private readonly _Router = inject(Router)

    equipmentId:string | null = null
    equipmentById:any;
    years: number[] = [];

    ngOnInit(): void {
        this.getEquipmentById()

        const currentYear = new Date().getFullYear();
        for (let y = currentYear; y >= 1980; y--) {
            this.years.push(y);
        }
    }

    equpimentsForm:FormGroup = this._FormBuilder.group({
        id: [null],
        brandAr: [null],
        brandEn: [null],
        modelAr: [null],
        modelEn: [null],
        yearOfManufacture: [null],
        chassisNumber: [null],
        assetNumber: [null],
    })

    submitEqupimentsForm():void{
        let data = this.equpimentsForm.value
        if(this.equpimentsForm.valid){
            this._EquipmentService.createEquipment(data).subscribe({
                next:(res)=>{
                    console.log();
                    this._ToastrService.success(res.msg)
                    this.equpimentsForm.reset()
                },
                error:(err)=>{
                    this._ToastrService.error(err.error.msg)
                }
            })
        }
    }

    getEquipmentById(): void {
        this._ActivatedRoute.paramMap.pipe(
            switchMap(params => {
                this.equipmentId = params.get('id');

                if (this.equipmentId) {
                    return this._EquipmentService.getEquipmentById(this.equipmentId);
                }
                return EMPTY;
            })
        ).subscribe({
            next: (res: any) => {
                this.equipmentById = res.data;
                this.equpimentsForm.patchValue(this.equipmentById);
                console.log('Equipment Data:', this.equipmentById);
            },
            error: (err) => this._ToastrService.error(err.error.msg)
        });
    }

    updateEquipment():void{
        let data = this.equpimentsForm.value
        data.id = this.equipmentId
        if(this.equpimentsForm.valid){
            this._EquipmentService.updateEquipment(data).subscribe({
                next:(res)=>{
                    this._ToastrService.success(res.msg)
                    this._Router.navigate(['/view-equipment'])
                    this.equpimentsForm.reset()
                },
                error:(err)=>{
                    this._ToastrService.error(err.error.msg)
                }
            })
        }
    }
}
