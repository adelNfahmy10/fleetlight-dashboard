import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
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
    imagePreview: string | ArrayBuffer | null = null;
    years: number[] = [];
    equipmentType: string[] = [
        'شاحنة',
        'معدة',
    ];

    @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
    ngOnInit(): void {
        this.getEquipmentById()

        const currentYear = new Date().getFullYear();
        for (let y = currentYear; y >= 1980; y--) {
            this.years.push(y);
        }

        this.equpimentsForm.get('ForSale')?.valueChanges.subscribe(value => {
            if (!value) {
                this.equpimentsForm.get('SalePrice')?.reset();
            }
        });

        this.equpimentsForm.get('ForRent')?.valueChanges.subscribe(value => {
            if (!value) {
                this.equpimentsForm.get('RentPrice')?.reset();
            }
        });
    }

    equpimentsForm:FormGroup = this._FormBuilder.group({
        Id: [null],
        BrandAr: [null],
        BrandEn: [null],
        ModelAr: [null],
        ModelEn: [null],
        YearOfManufacture: [null],
        ChassisNumber: [null],
        AssetNumber: [null],
        ForSale: [false],
        ForRent: [false],
        SalePrice: [0],
        RentPrice: [0],
        ImageFile: [null],
        EquipmentType: [null],
        Description: [null]
    })


    onImageSelected(event: Event) {
        const input = event.target as HTMLInputElement;

        if (input.files && input.files.length > 0) {
            const file = input.files[0];

            // تخزين الملف في الفورم
            this.equpimentsForm.patchValue({
                ImageFile: file
            });

            this.equpimentsForm.get('ImageFile')?.updateValueAndValidity();

            // عرض الصورة
            const reader = new FileReader();
            reader.onload = () => {
                this.imagePreview = reader.result;
            };
            reader.readAsDataURL(file);
        }
    }

    submitEqupimentsForm():void{
        let data = this.equpimentsForm.value
        let formData = new FormData()

        formData.append('BrandAr', data.BrandAr);
        formData.append('BrandEn', data.BrandEn);
        formData.append('ModelAr', data.ModelAr);
        formData.append('ModelEn', data.ModelEn);
        formData.append('YearOfManufacture', data.YearOfManufacture);
        formData.append('ChassisNumber', data.ChassisNumber);
        formData.append('AssetNumber', data.AssetNumber);
        formData.append('ForSale', data.ForSale);
        formData.append('ForRent', data.ForRent);
        formData.append('SalePrice', data.SalePrice);
        formData.append('RentPrice', data.RentPrice);
        formData.append('ImageFile', data.ImageFile);
        formData.append('Description', data.Description);

        if(this.equpimentsForm.valid){
            this._EquipmentService.createEquipment(formData).subscribe({
                next:(res)=>{
                    this._ToastrService.success(res.msg)
                    this.equpimentsForm.reset()
                    this.imagePreview = null;
                    this.fileInput.nativeElement.value = '';
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
                this.equpimentsForm.patchValue({
                    BrandAr: this.equipmentById.brandAr,
                    BrandEn: this.equipmentById.brandEn,
                    ModelAr: this.equipmentById.modelAr,
                    ModelEn: this.equipmentById.modelEn,
                    YearOfManufacture: this.equipmentById.yearOfManufacture,
                    ChassisNumber: this.equipmentById.chassisNumber,
                    AssetNumber: this.equipmentById.assetNumber,
                    ForSale: this.equipmentById.forSale,
                    ForRent: this.equipmentById.forRent,
                    SalePrice: this.equipmentById.salePrice,
                    RentPrice: this.equipmentById.rentPrice,
                    ImageFile: this.equipmentById.imagePath,
                    EquipmentType: this.equipmentById.equipmentType,
                    Description: this.equipmentById.description,
                });

                this.imagePreview = this.equipmentById.imagePath
                console.log(this.imagePreview);


            },
            error: (err) => this._ToastrService.error(err.error.msg)
        });
    }

    updateEquipment():void{
        let data = this.equpimentsForm.value
        data.Id = this.equipmentId
        let formData = new FormData()

        formData.append('Id', data.Id);
        formData.append('BrandAr', data.BrandAr);
        formData.append('BrandEn', data.BrandEn);
        formData.append('ModelAr', data.ModelAr);
        formData.append('ModelEn', data.ModelEn);
        formData.append('YearOfManufacture', data.YearOfManufacture);
        formData.append('ChassisNumber', data.ChassisNumber);
        formData.append('AssetNumber', data.AssetNumber);
        formData.append('ForSale', data.ForSale);
        formData.append('ForRent', data.ForRent);
        formData.append('SalePrice', data.SalePrice == null ? 0 : data.SalePrice);
        formData.append('RentPrice', data.RentPrice == null ? 0 : data.RentPrice);
        formData.append('ImageFile', data.ImageFile);
        formData.append('Description', data.Description);

        if(this.equpimentsForm.valid){
            this._EquipmentService.updateEquipment(formData).subscribe({
                next:(res)=>{
                    this._ToastrService.success(res.msg)
                    this.equpimentsForm.reset()
                    this.imagePreview = null;
                    this.fileInput.nativeElement.value = '';
                    this._Router.navigate(['/view-equipment'])
                },
                error:(err)=>{
                    this._ToastrService.error(err.error.msg)
                }
            })
        }
    }
}
