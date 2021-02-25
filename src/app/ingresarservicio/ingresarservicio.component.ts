import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl} from '@angular/forms';
import { ServicioSettings } from '../data/servicio-settings';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-ingresarservicio',
  templateUrl: './ingresarservicio.component.html',
  styleUrls: ['./ingresarservicio.component.css']
})
export class IngresarservicioComponent implements OnInit {

  hoy: Date = new Date();

  servicioSettings: ServicioSettings = {
    tecnico: null,
    servicioRealizado: null,        
    semanaDelAno: null,
    fechaDeInicio: null,
    horaDeInicio: null,
    fechaDeFinalizacion: null,
    horaDeFinalizacion: null,
    cantidadDeHoras: null,
    tipoDeHora: null
  };
  
  myForm: FormGroup;    

   constructor(private formBuilder: FormBuilder, private dataService: DataService)  {          

      this.myForm = this.formBuilder.group({
        tecnico: [this.servicioSettings.tecnico, Validators.required],
        servicioRealizado: [this.servicioSettings.servicioRealizado, Validators.required],
        fechaDeInicio: [this.servicioSettings.fechaDeInicio, Validators.required],
        horaDeInicio: [this.servicioSettings.horaDeInicio, Validators.required],
        fechaDeFinalizacion: [this.servicioSettings.fechaDeFinalizacion, Validators.required],
        horaDeFinalizacion: [this.servicioSettings.horaDeFinalizacion, Validators.required]
      });
     
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.myForm.valid) {
        console.log(this.myForm.value)
        this.dataService.postServicioSettingsForm(this.myForm.value).subscribe(
            result => console.log('success ', result),
            error => console.log('error ', error)
        );
    }
  }


}
