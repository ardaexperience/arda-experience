import { Component, OnInit, Input } from '@angular/core';

import { OrderService } from './../../../../shared/services/order.service';
import { LocalDataSource, ViewCell } from 'ng2-smart-table';
import { DatePipe } from '@angular/common';

@Component ({
  selector: 'button-view',
  template: 
  `
  <button 
    class="btn btn-detail" 
    routerLink="/pages/admin/order/{{ orderID }}">
    <i class="fa fa-info-circle" aria-hidden="true"></i>
  </button>
  `,
  styleUrls: ['./all-orders.component.scss']
})
export class ButtonOrderDetail implements ViewCell, OnInit {
  
  public orderID: string;

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
    this.orderID = this.value.toString().toUpperCase();
    console.log(this.orderID);
  }
}

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit {

  settings = {
    actions: false,
    noDataMessage: 'Nenhum pedido encontrado',
    columns: {
      orderID: {
        title: 'ID',
        valuePrepareFunction: (row, column) => {
          return column.id;
      },
    },
      dataEfetuacaoPedido: {
        title: 'Data do pedido',
        valuePrepareFunction: (date) => {
          const day = new Date(date);
          const dateFormatted = new DatePipe('pt-BR').transform(day, 'dd/MM/yyyy')

          return dateFormatted;
        }
      },
      nome: {
        title: 'Roteiro',
        valuePrepareFunction: (row, column) => {
          return column.detalhesPedido.detalhesRoteiro.nome
        }
      },
      preco: {
        title: 'Preço',
        valuePrepareFunction: (row, column) => {
          return column.detalhesPedido.detalhesRoteiro.preco
        }
      },
      id: {
        type: 'custom',
        filter: false,
        renderComponent: ButtonOrderDetail
      }
    }
  }

  constructor(private orderService: OrderService) { 
    this.source = new LocalDataSource();     
  }

  source: LocalDataSource;
  

  ngOnInit() {
    this.orderService.getAllOrders().subscribe(orders => this.source.load(orders))
  }

}
