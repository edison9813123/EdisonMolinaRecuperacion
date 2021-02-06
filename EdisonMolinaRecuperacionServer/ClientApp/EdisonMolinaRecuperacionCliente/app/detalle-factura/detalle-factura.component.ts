import { Component, OnInit } from '@angular/core';
import { DETALLE_PRODUCTO } from '../mock-detalle_producto';

@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.component.html',
  styleUrls: ['./detalle-factura.component.css']
})
export class DetalleFacturaComponent implements OnInit {

  selectedDetalleProducto: detalle_producto | null = null;
  detalle_producto =  DETALLE_PRODUCTO;

  constructor () { }

  ngOnInit() {
  }

  onSelect(detalle_producto:detalle_producto): void {
    this.selectedDetalleProducto = detalle_producto;
  }


}


 
