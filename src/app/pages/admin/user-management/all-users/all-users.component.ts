import { ClientService } from './../../../../shared/services/client.service';
import { Component, OnInit, Input } from '@angular/core';
import { LocalDataSource, ViewCell } from 'ng2-smart-table';

@Component ({
  selector: 'button-view',
  template: 
  `
  <button 
    class="btn btn-detail" 
    routerLink="/pages/admin/user/{{ userID }}">
    <i class="fa fa-info-circle" aria-hidden="true"></i>
  </button>
  `,
  styleUrls: ['./all-users.component.scss']
})
export class ButtonUserDetail implements ViewCell, OnInit {
  
  public userID: string;

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
    this.userID = this.value.toString().toUpperCase();
    console.log(this.userID)
  }
}


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  settings = {
    actions: false,
    noDataMessage: 'Nenhum cliente encontrado',
    columns: {
      userID: {
        title: 'ID',
        valuePrepareFunction: (row, column) => {
          return column.id;
        }
      },
      nome: {
        title: 'Nome'
      },
      cpf: {
        title: 'CPF'
      },
      contato: {
        title: 'Celular',
        valuePrepareFunction: contato => {
          return contato.celular
        }
      },
      id: {
        type: 'custom',
        filter: false,
        renderComponent: ButtonUserDetail
      }
    }
  };


  constructor(private clientService: ClientService) { 
    this.source = new LocalDataSource();     
  }

  source: LocalDataSource;

  ngOnInit() {
    this.clientService.getAllClients().subscribe(clients => this.source.load(clients))
    console.log(this.source);
  }


}
