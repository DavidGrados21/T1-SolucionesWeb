import { Injectable } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos = [
    { id: 1, nombre: 'Blusa Casual Mujer Sybilla', descripcion: 'Blusa de manga larga para mujer', precio: 75, stock: 0, imagen: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/883126846_1/w=1004,h=1500,fit=cover' },
    { id: 2, nombre: 'Jean Recto Algodón Mujer Sybilla', descripcion: 'Jeans ajustados para hombre', precio: 120, stock: 60, imagen: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/19765420_1/w=1004,h=1500,fit=cover' },
    { id: 3, nombre: 'Vestido Algodón Mujer Sybilla', descripcion: 'Vestido casual de algodón', precio: 95, stock: 30, imagen: 'https://cdn.discordapp.com/attachments/1046432412848115753/1287121308647166035/w_1500_h_1500_fit_pad.jpg?ex=66f064a1&is=66ef1321&hm=dda6a680ffb595bf0b25366091330373bd5f0f48d9af6128efcf6a7e6483e6aa&' },
    { id: 4, nombre: 'Chaqueta de mezclilla con perlas mujer - azul', descripcion: 'Chaqueta de cuero para hombre', precio: 250, stock: 15, imagen: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/120172676_01/w=1500,h=1500,fit=pad' },
    { id: 5, nombre: 'POLO DEPORTIVO HOMBRE ADIDAS HD3550 LOGO NEGRO', descripcion: 'Polo deportivo de manga corta', precio: 45, stock: 80, imagen: 'https://cdn.discordapp.com/attachments/1046432412848115753/1287122972238151700/2020294704581-4.jpg?ex=66f0662e&is=66ef14ae&hm=f361160c2dc1b23689941027da8e4c27f27ca73a057b620823901a9c7b16d126&' },
    { id: 6, nombre: 'Zapatos formales', descripcion: 'Zapatos de cuero para mujer', precio: 180, stock: 25, imagen: 'https://cdn.discordapp.com/attachments/1046432412848115753/1287124545135841290/w_1500_h_1500_fit_pad.jpg?ex=66f067a5&is=66ef1625&hm=af56627049e4efb7e6627ecbd00e9ff595aae342a461a4cf4f20e390f23ce278&' },
    { id: 7, nombre: 'Falda Corta Mujer Mossimo', descripcion: 'Falda plisada para mujer', precio: 70, stock: 35, imagen: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/883124630_1/w=1004,h=1500,fit=cover' },
    { id: 8, nombre: 'Camisa Manga Larga Hombre La Martina', descripcion: 'Camisa de vestir para hombre', precio: 85, stock: 50, imagen: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/20079967_1/w=1004,h=1500,fit=cover' },
    { id: 9, nombre: 'Legging deportivo tiro alto con corte', descripcion: 'Leggins elásticos para mujer', precio: 60, stock: 100, imagen: 'https://leonisa.pe/cdn/shop/files/195607_700_1200X1500_2_480x.jpg?v=1719233793' },
    { id: 10, nombre: 'Casaca Deportiva Columbia Hombre Silver Falls', descripcion: 'Casaca impermeable para hombre', precio: 150, stock: 20, imagen: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/20226460_1/w=1500,h=1500,fit=pad' },
    { id: 11, nombre: 'Botas cuero niña', descripcion: 'Botas de cuero para mujer', precio: 220, stock: 12, imagen: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/115324142_01/w=1500,h=1500,fit=pad' },
    { id: 12, nombre: 'Sombrero de ala ancha con protección UV Naturehike.', descripcion: 'Sombrero de ala ancha para hombre', precio: 55, stock: 18, imagen: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/120477930_01/w=1500,h=1500,fit=pad' },
  ];
  constructor() { }

  getProductos() {
    return this.productos;
  }

  getProductoById(id: number) {
    return this.productos.find(producto => producto.id === id);
  }

  buscarProductos(query: string) {
    if (!query) {
      console.log('Buscando no productos:');
      return this.productos; 
    }
    return this.productos.filter(producto =>
      producto.nombre.includes(query)

    );
  }
}
