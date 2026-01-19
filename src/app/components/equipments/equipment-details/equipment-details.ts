import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { DataTableModule } from '@bhplugin/ng-datatable';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { EquipmentService } from '../../../service/equipment/equipment-service';
import { filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-equipment-details',
  imports: [DataTableModule, FormsModule, TranslatePipe],
  templateUrl: './equipment-details.html',
  styleUrl: './equipment-details.css',
})
export class EquipmentDetails {
    private readonly _EquipmentService = inject(EquipmentService)
    private readonly _ActivatedRoute = inject(ActivatedRoute)
    private readonly _TranslateService = inject(TranslateService)

    equipmentId:string | null = null
    equipmentData:any[] = []
    translatedCols: any[] = [];

    cols = [
        // { field: 'id', title: 'ID', isUnique: true },
        { field: 'imagePath', title: 'Equipments.View_Equipments.imageLabel' },
        { field: 'mechanicalName', title: 'Equipments.Details_Equipment.MechanicalLabel' },
        { field: 'equipmentType', title: 'Equipments.Details_Equipment.equipmentTypeLabel' },
        { field: 'kilometers', title: 'Equipments.Details_Equipment.KilometersLabel' },
        { field: 'fuelLiters', title: 'Equipments.Details_Equipment.FuelLitersLabel' },
        { field: 'usageHours', title: 'Equipments.Details_Equipment.UsageHoursLabel' },
    ];

    ngOnInit(): void {
        this.getEquipmentData()
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

    getEquipmentData(): void {
        this._ActivatedRoute.paramMap.pipe(
            map(params => params.get('id')),
            filter(id => !!id),
            switchMap(id => this._EquipmentService.getEquipmentById(id!))
        ).
        subscribe({
            next: res => {
                this.equipmentData = [res.data];
            },
            error: err => {
                console.error('Error fetching equipment:', err);
            }
        });
    }
}
