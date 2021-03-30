import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../service/peliculas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  pelicula: any;
  regresar = '';
  busqueda = '';
  loading: boolean;

  constructor(public route: ActivatedRoute,
              public servi: PeliculasService ) {


                this.route.params.subscribe((data: any) => {

                  this.servi.buscarById(data.id).subscribe((pelicula: any[]) => {
                    this.loading = false;
                    console.log(pelicula);
                    this.pelicula = pelicula;
                  }, error => {
                    this.loading = false;

                  });
                });
              }

  ngOnInit() {

  }

}
