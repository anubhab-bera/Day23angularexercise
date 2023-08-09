import { Component } from '@angular/core';

@Component({
  selector: 'app-pipeex',
  templateUrl: './pipeex.component.html',
  styleUrls: ['./pipeex.component.css']
})
export class PipeexComponent {
  users:any[]=[
    {username:"Anubhab", email:"ab@genpact.com", salary:12000, desig:"Developer"},
    {username:"Ajit", email:"ajit@genpact.com", salary:24000, desig:"Manager"},
    {username:"Akash", email:"akash@genpact.com", salary:36000, desig:"CTO"},
  ]
}