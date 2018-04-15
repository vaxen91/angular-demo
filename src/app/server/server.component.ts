import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: ['.online { color: white;}']
})
export class ServerComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverId = 10;
  serverStatus = 'offline';
  serverName = '';
  serverCreated = false;

  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

    this.serverStatus = Math.random() > 0.4 ? 'online' : 'offline';

  }

  ngOnInit() {

  }

  onCreateServer() {

    this.serverCreationStatus = 'Server ' + this.serverName + ' was created';
    this.serverCreated = true;

  }

  getServerStatus() {

    return this.serverStatus;
  }

  getColor() {

    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
