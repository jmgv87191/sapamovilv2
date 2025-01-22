import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TomasService } from 'src/app/services/tomas.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { VerMas } from 'src/app/interfaces/tomas';
import {MatListModule} from '@angular/material/list';
import { IonItem, IonLabel, IonList, IonSpinner,IonHeader, IonToolbar, IonButtons, IonTitle, IonFooter
} from '@ionic/angular/standalone';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { NotificationService } from '../../services/notification.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.component.html',
  styleUrls: ['./ver-mas.component.scss'],
  imports: [MatCardModule, MatButtonModule, MatListModule,  IonItem, IonLabel, 
    IonList, IonSpinner, IonHeader, IonToolbar, IonButtons,  IonTitle,
    IonFooter, MatIconModule
  ],

})
export class VerMasComponent  implements OnInit {


  idToma!: number;
  masDatos: VerMas= {
    alias: '',
    cveusu: '',
    direccion: '',
    estatusContrato: '',
    mesesAdeudo: '',
    saldo: 0,
    nombre: '',
  };
  loader: boolean = false;
  meses: { mes: string, valor: number }[] = [];
  ruta_recibo:string = ''


  constructor(
    private aRoute: ActivatedRoute,
    private tomasService: TomasService,
    private router: Router,
    private notificationService: NotificationService

  ) { 

    this.idToma = Number(this.aRoute.snapshot.paramMap.get('id'))

  }

  ngOnInit() {
    this.meses = this.generateMonths()
    console.log( this.meses)

    this.loader = true
    this.tomasService.getMasTomas( this.idToma ).subscribe((data)=>{

      this.masDatos = {
        alias: data.toma.alias,
        cveusu: data.toma.cveusu,
        direccion: data.usuario.direccion,
        estatusContrato: data.usuario.estatusContrato,
        mesesAdeudo: data.usuario.mesesAdeudo,
        saldo: data.usuario.saldo,
        nombre: data.usuario.nombre
      }

      this.loader = false
    })
  }

  regresar(){
    this.router.navigate(['/dashboard'])
  }

  
  async downloadRecibo(id: string, valor: number): Promise<void> {
    this.tomasService.getRecibos(id, valor).subscribe(async (data: Blob) => {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64data = reader.result as string;

        try {
          const result = await Filesystem.writeFile({
            path: `recibo_${id}_${valor}.pdf`,
            data: base64data.split(',')[1], // Remove the prefix from the base64 string
            directory: Directory.Documents
          });

          console.log('File saved at:', result.uri);
          this.ruta_recibo = Directory.Documents
          // Mostrar mensaje de éxito
          this.notificationService.presentToast( `Archivo guardado con éxito ${this.ruta_recibo}` );

        } catch (error) {
          console.error('Error saving file', error);
        }
      };

      reader.readAsDataURL(data);
    }, error => {
      console.error('Error downloading the recibo', error);
    });
  }
  

  generateMonths(): { mes: string, valor: number }[] {
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const currentMonth = new Date().getMonth();
    const months = [];

    for (let i = 0; i < 6; i++) {
      const monthIndex = (currentMonth - i + 12) % 12;
      months.push({ mes: monthNames[monthIndex], valor: i });
    }

    return months;
  }

  pagar() {
    window.location.href =  `https://portalweb.sapalapaz.gob.mx/sapapol/${this.masDatos.cveusu}` ;
  }
}
