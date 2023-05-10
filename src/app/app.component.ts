import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from './dataservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
name:string="poovitha"
age:number=12
text: string='';

// prpoerty binding
valuechange ():string{
      return 'the value will change======= '
}
isdisabled:boolean=true
//  searchvalue:string=""

  // event Binding
names:string="poovitha"
changename(){
    this.names="good"
}

  form: FormGroup;
  posts!: any[];

  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [''],
      body: ['']
    });

    this.dataService.getPosts().subscribe((data: any[]) => {
      this.posts = data;
    });
  }

}