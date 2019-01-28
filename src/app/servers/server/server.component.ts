import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { relative } from 'path';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    console.log("ServerComponent");
    // this.route.queryParams.subscribe(params=>{
    //   console.log(params);
    // });

    const id=+this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);

    this.route.params.subscribe(params => this.server = this.serversService.getServer(+params['id'])); 
  }

  onEdit(){
    console.log("onEdit");
    this.router.navigate(['edit'], { relativeTo : this.route , queryParamsHandling:'preserve'});

  }

}
