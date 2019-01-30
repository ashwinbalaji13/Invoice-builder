import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JwtService } from 'src/app/core/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() togglesideNav= new EventEmitter<void>();
  constructor(private jwtService:JwtService,private route:Router) { }

  ngOnInit() {
  }
  logout(){
    this.jwtService.destroyToken();
    this.route.navigate(['login']);
  }

}
