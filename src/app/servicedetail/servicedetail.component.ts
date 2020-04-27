import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-servicedetail',
  templateUrl: './servicedetail.component.html',
  styleUrls: ['./servicedetail.component.scss']
})
export class ServicedetailComponent implements OnInit {

  public serviceDisplay: any = {}; 
  private services: any = []; 
  private serviceId: number;

  constructor(private route: ActivatedRoute, private _servicesService: ServicesService) { }

  ngOnInit(): void {
    this.serviceId = parseInt(this.route.snapshot.paramMap.get('id'));
    
    this._servicesService.getServices()
    .subscribe(data => this.displayData(data) );

  }

  displayData(service){
    service.map(data => {
      if(data.id == this.serviceId){
        this.serviceDisplay = data;
      }
    });
  }

}
