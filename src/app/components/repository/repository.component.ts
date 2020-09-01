import { Component, OnInit } from '@angular/core';
import { FreeapiService } from 'src/app/service/freeapi.service';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {


  constructor(private apiService: FreeapiService) { }

  ngOnInit(): void {
  }


}
