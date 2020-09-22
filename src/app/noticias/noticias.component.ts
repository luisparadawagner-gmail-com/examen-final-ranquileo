import { Component, OnInit } from '@angular/core';
import  { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {Noticia} from 'src/app/clases/Noticia';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

    noticia : Noticia;
    registro:any;
    noticiaForm= this.fb.group({});


  ngOnInit(): void {
    this.registro=this.rutaActiva.snapshot.params;
    if(Object.keys(this.registro).length){
      this.noticia = this.registro;
    }
    this.initForm(this.noticia);
  }

  initForm(editarNoticia: Noticia) {
    this.noticiaForm = this.fb.group({
      titulo: [editarNoticia ? editarNoticia.titulo : ''],
      texto: [editarNoticia ? editarNoticia.texto : ''],
      fechaPublicacion: [editarNoticia ? editarNoticia.fechaPublicacion : ''],
      estado: [editarNoticia ? editarNoticia.estado : ''],
    });
  }
  submit(){
    this.noticiaForm.value;
    this.noticia = this.noticiaForm.value;
    this.router.navigate(['/tabla-component', this.noticia]);   
  }

}
