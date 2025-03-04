import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {

  id!:number;
employee:Employee=new Employee();

constructor(private emloyeeService:EmployeeService,private route:ActivatedRoute,private router:Router){}

ngOnInit(): void {
this.id=this.route.snapshot.params['id'];
  this.emloyeeService.getEmployeeById(this.id).subscribe(data=>{
    this.employee=data;
  },error=>console.log(error));
  
  
}

onSubmit(){
  this.emloyeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
this.gotoEmpList();
  },
    error=>console.log(error)  );
}

gotoEmpList(){
  this.router.navigate(['/employees'])
}

}
