import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  newServerName = '';
  newServerContent = '';
  testname;

  serverElements = [
    { name: 'Aizaz', type: 'server', content: 'THIS IS TESTING' }
  ];

  OnServerAdded(serverName : {name :string, content : string}) {
    this.serverElements.push({
      type: 'server',
      name: serverName.name,
      content: serverName.content
    });
  }

  // onAddBlueprint() {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
  // }
}
