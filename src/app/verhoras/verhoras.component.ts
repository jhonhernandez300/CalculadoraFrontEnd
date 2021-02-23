import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl} from '@angular/forms';
import { ServicioSettings } from '../data/servicio-settings';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-verhoras',
  templateUrl: './verhoras.component.html',
  styleUrls: ['./verhoras.component.css']
})
export class VerhorasComponent implements OnInit {

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
  items: ServicioSettings;

   constructor(private formBuilder: FormBuilder, private dataService: DataService)  {          

      this.myForm = this.formBuilder.group({
        tecnico: [this.servicioSettings.tecnico, Validators.required],        
        semanaDelAno: [this.servicioSettings.semanaDelAno, Validators.required]        
      });
     
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.myForm.valid) {
        console.log(this.myForm.value)
        this.dataService.getServicioSettingsForm(this.myForm.value).subscribe(
            //result => console.log('success ', result),
            result => this.items = result,
            error => console.log('error ', error)
        );
    }

  }
}
