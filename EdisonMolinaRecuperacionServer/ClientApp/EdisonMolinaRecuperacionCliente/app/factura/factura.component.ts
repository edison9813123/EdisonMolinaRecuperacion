import { Component, OnInit } from '@angular/core';
import { detalle_producto } from '../detalle_producto';
import { DETALLE_PRODUCTO } from '../mock-detalle_producto';


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {


  selectedDetalleProducto: detalle_producto | null = null;
  detalle_producto =  DETALLE_PRODUCTO;

  constructor () { }

  ngOnInit() {
  }

  onSelect(detalle_producto:detalle_producto): void {
    this.selectedDetalleProducto = detalle_producto;
  }


}

