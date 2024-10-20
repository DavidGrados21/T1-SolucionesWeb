import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductoService, Producto } from '../producto.service';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.css'
})
export class ProductoDetalleComponent {
  producto: any;

  constructor(private route: ActivatedRoute, private productoService: ProductoService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = this.productoService.getProductoById(id);
  }
}
