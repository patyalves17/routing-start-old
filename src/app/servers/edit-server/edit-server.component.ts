import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit:boolean=true;

  constructor(private serversService: ServersService,
    private router:ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    console.log("EditServerComponent");

    this.router.queryParams.subscribe(params=>{
      console.log(params);
      this.allowEdit=params['allowEdit']==='1'? true : false;
    });
    // this.router.fragment.subscribe(fragment =>{
    //   console.log(fragment);
    // });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
