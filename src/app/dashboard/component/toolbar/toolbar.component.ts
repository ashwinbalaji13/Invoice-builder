import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JwtService } from 'src/app/core/jwt.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() togglesideNav= new EventEmitter<void>();
  constructor(private jwtService:JwtService,private route:Router,private authService:AuthService,private snackbar:MatSnackBar) { }

  ngOnInit() {
  }
  logout(){
    this.authService.logout().subscribe((data)=>{
    },(err)=>{
      this.snackbar.open(err.message, "Failed", {
        duration: 5000
      });
    },()=>{
      this.jwtService.destroyToken();
      this.route.navigate(['login']);
    });  
 
  }

}
