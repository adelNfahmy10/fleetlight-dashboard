import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';
import { TranslatePipe } from '@ngx-translate/core';
import { EquipmentService } from '../../../service/equipment/equipment-service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, switchMap } from 'rxjs';
import { SupplierService } from '../../../service/supplier/supplier-service';

@Component({
  selector: 'app-add-product',
  imports: [TranslatePipe, ReactiveFormsModule, NgSelectComponent],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
private readonly _FormBuilder = inject(FormBuilder)
    private readonly _SupplierService = inject(SupplierService)
    private readonly _ToastrService = inject(ToastrService)
    private readonly _ActivatedRoute = inject(ActivatedRoute)
    private readonly _Router = inject(Router)

    sparePartId:string | null = null
    sparePartById:any;
    imagePreview: string | ArrayBuffer | null = null;
    years: number[] = [];
    sparePartTypes = [
        'اصلي',
        'تجاري',
    ];

    @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
    ngOnInit(): void {
        this.getSparePartById()

        const currentYear = new Date().getFullYear();
        for (let y = currentYear; y >= 1980; y--) {
            this.years.push(y);
        }
    }

    sparePartsForm:FormGroup = this._FormBuilder.group({
        Id: [null],
        Type: [null],
        PartNumber : [null],

        YearOfManufacture: [null],
        Manufacturer: [null],

        NameAr: [null],
        NameEn: [null],

        BrandAr: [null],
        BrandEn: [null],

        AssetNumber: [null],
        Price: [0],

        IsPriceHidden: [true],
        ImageFile: [null],
    })


    onImageSelected(event: Event) {
        const input = event.target as HTMLInputElement;

        if (input.files && input.files.length > 0) {
            const file = input.files[0];

            // تخزين الملف في الفورم
            this.sparePartsForm.patchValue({
                ImageFile: file
            });

            this.sparePartsForm.get('ImageFile')?.updateValueAndValidity();

            // عرض الصورة
            const reader = new FileReader();
            reader.onload = () => {
                this.imagePreview = reader.result;
            };
            reader.readAsDataURL(file);
        }
    }

    submitSparePartsForm():void{
        let data = this.sparePartsForm.value
        console.log(data);

        let formData = new FormData()

        formData.append('ImageFile', data.ImageFile);
        formData.append('Type', data.Type);
        formData.append('PartNumber', data.PartNumber);

        formData.append('YearOfManufacture', data.YearOfManufacture);
        formData.append('Manufacturer', data.Manufacturer);

        formData.append('NameAr', data.NameAr);
        formData.append('NameEn', data.NameEn);

        formData.append('BrandAr', data.BrandAr);
        formData.append('BrandEn', data.BrandEn);

        formData.append('AssetNumber', data.AssetNumber);
        formData.append('Price', data.Price);
        formData.append('IsPriceHidden', data.IsPriceHidden);

        if(this.sparePartsForm.valid){
            this._SupplierService.CreateSparePart(formData).subscribe({
                next:(res)=>{
                    this._ToastrService.success(res.msg)
                    this.sparePartsForm.reset()
                    this.imagePreview = null;
                    this.fileInput.nativeElement.value = '';
                },
                error:(err)=>{
                    this._ToastrService.error(err.error.msg)
                }
            })
        }
    }

    getSparePartById(): void {
        this._ActivatedRoute.paramMap.pipe(
            switchMap(params => {
                this.sparePartId = params.get('id');

                if (this.sparePartId) {
                    return this._SupplierService.GetSparePartById(this.sparePartId);
                }
                return EMPTY;
            })
        ).subscribe({
            next: (res: any) => {
                this.sparePartById = res.data;
                this.sparePartsForm.patchValue({
                    ImageFile: this.sparePartById.imagePath,
                    Type: this.sparePartById.typeAr,
                    PartNumber: this.sparePartById.partNumber,

                    YearOfManufacture: this.sparePartById.yearOfManufacture,
                    Manufacturer: this.sparePartById.manufacturer,

                    NameAr: this.sparePartById.nameAr,
                    NameEn: this.sparePartById.nameEn,

                    BrandAr: this.sparePartById.brandAr,
                    BrandEn: this.sparePartById.brandEn,

                    AssetNumber: this.sparePartById.assetNumber,
                    Price: this.sparePartById.price,
                    isPriceHidden: this.sparePartById.isPriceHidden,
                });

                this.imagePreview = this.sparePartById.imagePath
            },
            error: (err) => this._ToastrService.error(err.error.msg)
        });
    }

    updateSparePart():void{
        let data = this.sparePartsForm.value
        data.Id = this.sparePartId
        let formData = new FormData()

        formData.append('Id', data.Id);
        formData.append('ImageFile', data.ImageFile);
        formData.append('Type', data.Type);
        formData.append('PartNumber', data.PartNumber);

        formData.append('YearOfManufacture', data.YearOfManufacture);
        formData.append('Manufacturer', data.Manufacturer);

        formData.append('NameAr', data.NameAr);
        formData.append('NameEn', data.NameEn);

        formData.append('BrandAr', data.BrandAr);
        formData.append('BrandEn', data.BrandEn);

        formData.append('AssetNumber', data.AssetNumber);
        formData.append('Price', data.Price);
        formData.append('IsPriceHidden', data.IsPriceHidden);

        if(this.sparePartsForm.valid){
            this._SupplierService.UpdateSparePart(formData).subscribe({
                next:(res)=>{
                    this._ToastrService.success(res.msg)
                    this.sparePartsForm.reset()
                    this.imagePreview = null;
                    this.fileInput.nativeElement.value = '';
                    this._Router.navigate(['/view-product'])
                },
                error:(err)=>{
                    this._ToastrService.error(err.error.msg)
                }
            })
        }
    }
}
