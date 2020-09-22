import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ComponentConsultarService} from 'src/app/servicio/component-consultar.service';
import {Noticia} from 'src/app/clases/Noticia';
@Component({
  selector: 'app-tabla-noticias',
  templateUrl: './tabla-noticias.component.html',
  styleUrls: ['./tabla-noticias.component.css']
})
export class TablaNoticiasComponent implements OnInit {

  constructor(
    private componentConsultarService: ComponentConsultarService,
    private router: Router,
    private rutaA: ActivatedRoute) { }

    columnas: string[]=['titulo','texto','fechaPublicacion','estado','editar'];
    dataSource: Noticia[]=[];
    noticiaNueva:any;

  ngOnInit(): void {
    this.getNoticia();

  }
  getNoticia(){
    this.componentConsultarService.getNoticia().subscribe((noticias) => {
      this.dataSource = noticias;
      this.agregarFila();

    });
  }
  agregarFila(){
    this.noticiaNueva=this.rutaA.snapshot.params;
    this.dataSource.push(this.noticiaNueva);
  }
  editar(element){
    this.router.navigate(['/noticias-component', element])
  }
  
  //editar(element){
  //  this.router.navigate(['/noticias-component', element])
  //}
  

}
