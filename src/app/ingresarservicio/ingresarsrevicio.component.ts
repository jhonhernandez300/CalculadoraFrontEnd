import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl} from '@angular/forms';
import { ServicioSettings } from '../data/servicio-settings';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-ingresarsrevicio',
  templateUrl: './ingresarsrevicio.component.html',
  styleUrls: ['./ingresarsrevicio.component.css']
})
export class IngresarsrevicioComponent implements OnInit {

  servicioSettings: ServicioSettings = {
    tecnico: null,
    servicioRealizado: null,
    semanaDelAno: null,
    diaDeLaSemana: null,    
    horaInicial: null,
    horaFinal: null,
    horasDiurnas: null,
    horasNocturnas: null
  };

  myForm: FormGroup;  

   constructor(private formBuilder: FormBuilder, private dataService: DataService)  {          

      this.myForm = this.formBuilder.group({
        tecnico: [this.servicioSettings.tecnico, Validators.required],
        servicioRealizado: [this.servicioSettings.servicioRealizado, Validators.required],
        semanaDelAno: [this.servicioSettings.semanaDelAno, Validators.required],
        diaDeLaSemana: [this.servicioSettings.diaDeLaSemana, Validators.required],        
        horaInicial: [this.servicioSettings.horaInicial, Validators.required],
        horaFinal: [this.servicioSettings.horaFinal, Validators.required]
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
