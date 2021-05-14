import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {NgForm} from '@angular/forms';
import {Topicality} from '../../topicality';
import * as $ from 'jquery';

@Component({
  selector: 'app-topicality',
  templateUrl: './topicality.component.html',
  styleUrls: ['./topicality.component.css']
})
export class TopicalityComponent implements OnInit {

  topicalities: any;
  topicality= new Topicality()
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getTopicalityData();
    $("#form").hide();


  }
  show() {
    $("#btn1").click(function(e){
      $("#form").show('slow');
      $("#btn1").text(" - reduice");
    });
    if ($('#btn1').text()== " - reduice"){
      console.log('hello goo');
    }else{
      console.log('nothing');
    }


    // $("#btn1").click(function(e){
    //   $("#form").hide('slow');
    //   $("#btn1").text(" + create");
    // })


  }

  getTopicalityData(){
    this.dataService.getData().subscribe(res=>{
      this.topicalities= res;
    });

  }

  onSubmit(f: NgForm) {
    this.dataService.addData(this.topicality).subscribe( res=>{
      this.getTopicalityData();
    });
  }

  onDelete(id: any) {
    console.log(id);
    this.dataService.deleteData(id).subscribe(res=>{
      this.getTopicalityData();
    });
  }

}
