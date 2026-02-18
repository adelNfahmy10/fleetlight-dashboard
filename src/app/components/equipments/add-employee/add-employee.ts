import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth/auth-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { RoleService } from '../../../service/role/role-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-employee',
  imports: [ReactiveFormsModule, TranslatePipe, NgSelectComponent],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css',
})
export class AddEmployee implements OnInit{
    private readonly _AuthService = inject(AuthService)
    private readonly _RoleService = inject(RoleService)
    private readonly _FormBuilder = inject(FormBuilder)
    private readonly _ToastrService = inject(ToastrService)

    supervisorId:string | null = localStorage.getItem('userId')
    allRoles:any[] = []

    ngOnInit(): void {
        this.getAllRoles()
    }

   getAllRoles(): void {
        this._RoleService.getAllRoles().subscribe({
            next: (res) => {
            this.allRoles = res.data.filter((role:any) =>
                role.name === 'Mechanical' || role.name === 'Driver'
            );
            }
        });
    }
    employeeForm:FormGroup = this._FormBuilder.group({
        fullName: [null, Validators.required],
        email: [null, Validators.required],
        mobile: [null, Validators.required],
        username: [null, Validators.required],
        password: [null, Validators.required],
        roleIds: [null, Validators.required],
        supervisorId: [this.supervisorId],
    })

    sumbitEmployeeForm():void{
         if (this.employeeForm.invalid) {
            this.employeeForm.markAllAsTouched();
            return;
        }

        let data = this.employeeForm.value
        let roles = [data.roleIds]
        data.roleIds = roles
        data.supervisorId = this.supervisorId
        console.log(data);

        this._AuthService.register(data).subscribe({
            next: (res:any) => {
                this._ToastrService.success(res.msg)
                console.log(res);
                this.employeeForm.reset()
            },
            error: (err:any) => {
                this._ToastrService.success(err.error.msg)
            }
        })
    }

}
