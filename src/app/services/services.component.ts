import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public ServicesList = [];

  constructor(private _servicesService: ServicesService, private router: Router) { }

  ngOnInit(): void {

    this._servicesService.getServices()
    .subscribe(data => this.ServicesList = data );

  }

  navRoute(service){
    this.router.navigate(['/services',service.id])
  }

}
