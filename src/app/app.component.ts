import { Component,OnInit } from '@angular/core';
import {ServiceInfo} from './service-info';
import {RegistryService} from './registry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  serviceList:ServiceInfo[];
  constructor(private regService:RegistryService){
  }

  ngOnInit(): void {
    this.regService.getServiceCatalog().subscribe((scList:ServiceInfo[]) => {
        console.log(scList);
        this.serviceList=scList;
      });
    }

}
