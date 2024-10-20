import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../producto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './producto-lista.component.html',
  styleUrl: './producto-lista.component.css'
})
export class ProductoListaComponent {
  searchQuery: string = '';
  productos: any[] = [];
  productoFiltrados  = this.productos;

  
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productos = this.productoService.getProductos();
  }

  BusquedaProductos(): void{
    console.log('Buscando productos:', this.searchQuery);
    this.productoFiltrados = this.productoService.buscarProductos(this.searchQuery);
  }

}
