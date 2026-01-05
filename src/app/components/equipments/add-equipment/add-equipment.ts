import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { EquipmentService } from '../../../service/equipment/equipment-service';

@Component({
  selector: 'app-add-equipment',
  imports: [TranslatePipe, ReactiveFormsModule],
  templateUrl: './add-equipment.html',
  styleUrl: './add-equipment.css',
})
export class AddEquipment {
    private readonly _FormBuilder = inject(FormBuilder)
    private readonly _EquipmentService = inject(EquipmentService)

    equpimentsForm:FormGroup = this._FormBuilder.group({
        brand: [null],
        model: [null],
        yearOfManufacture: [null],
        chassisNumber: [null],
        assetNumber: [null],
    })

    submitEqupimentsForm():void{
        let data = this.equpimentsForm.value
        if(this.equpimentsForm.valid){
            this._EquipmentService.createEquipment(data).subscribe({
                next:(res)=>{
                    console.log( 'Equipment created successfully');
                    this.equpimentsForm.reset()
                },
                error:(err)=>{
                    console.log( 'Error creating equipment');
                }
            })
        }
    }
}
