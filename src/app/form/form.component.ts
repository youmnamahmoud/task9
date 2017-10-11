import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup , Validators} from "@angular/forms";
import { RacingServicesService } from '../racing-services.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

	name="";
	email="";
	phone="";
	nationalID="";
	university="";
	faculty="";
	major="";
	minor="";
	year="";

	x={
		"name":this.name,
		"email":this.email,
		"phone":this.phone,
		"nationalID":this.nationalID,
		"university":this.university,
		"faculty":this.faculty,
		"major":this.major,
		"minor":this.minor,
		"year":this.year

	};
	
   constructor(private pc: RacingServicesService) {
 
  	
   }

  ngOnInit() {
	this.pc.postData(this.x);
  }

}
