import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Client } from '../../models/client';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-client-listing',
  templateUrl: './client-listing.component.html',
  styleUrls: ['./client-listing.component.scss']
})
export class ClientListingComponent implements OnInit {

  constructor(private clientService:ClientService) { }
  displayedColumns = ["First Name", "Last Name", "Email"];
  dataSource = new MatTableDataSource<Client>();

  ngOnInit() {
    this.clientService.getClients().subscribe(data=>{
      this.dataSource.data=data;
    })
  }


}
