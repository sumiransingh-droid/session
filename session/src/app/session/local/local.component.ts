import { Component } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent {

  ngOnInit():void {
    localStorage.setItem('username','local');
    sessionStorage.setItem('lastname','session')
    console.log('customer'+localStorage.getItem('username'));
    console.log('order'+sessionStorage.getItem('lastname'));
  }

}
