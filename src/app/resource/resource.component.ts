import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

  constructor() { }

task=[];
headvals=[];
boolinprow = false;
boolinpcol=false;
events: string[] = [];
opened: boolean;
objsize = 4;

  ngOnInit() {
    var heads = this.task[0];
    //console.log(heads);
    //var i=0;
    var tsk:Object={};
    tsk[0]='Hash';
    tsk[1]='Mash';
    tsk[2]='Sash';
    tsk[3]='Gash';
    tsk[4]='Nash';
    this.task.push(tsk);
    for(var i=0;i<20;i++){
      var tsk:Object={};
      tsk[0] = 'Hello';
      tsk[1] = 'World';
      tsk[2] = 'Welcome';
      tsk[3] = 'Home';
      tsk[4] = 'Hello There';
      this.task.push(tsk);
    //  console.log(this.task);
    }
    this.getHeads();
  }

  getHeads(){
    var heads = this.task[0];
    console.log(heads);
    var i=0;
    for(var key in heads){
      this.headvals[i] = heads[key];
      i++;
    }
    console.log(this.headvals);
  }

  fileReaded;

  csv2Array(fileInput: any){
    //read file from input
    this.fileReaded = fileInput.target.files[0];
    
    let reader: FileReader = new FileReader();
    reader.readAsText(this.fileReaded);
    
     reader.onload = (e) => {
     let csv: string = reader.result.toString();
     let allTextLines = csv.split(/\r|\n|\r/);
     let headers = allTextLines[0].split(',');
     let lines = [];
    
      for (let i = 0; i < allTextLines.length; i++) {
        // split content based on comma
        let data = allTextLines[i].split(',');
        if (data.length === headers.length) {
          let tarr = [];
          for (let j = 0; j < headers.length; j++) {
            tarr.push(data[j]);
          }
    
         // log each row to see output 
         console.log(tarr);
         lines.push(tarr);
      }
     }
     this.task = [];
     this.task = lines;
    // this.getHeads();
    this.addCSV();
     // all rows in the csv file 
     console.log(">>>>>>>>>>>>>>>>>", lines);
    } 
    }

    addCSV(){
      var i=0;
      this.headvals = [];
      console.log(this.task[0]);
      for(let val in this.task[0]){
        this.headvals[i]=this.task[0][val];
        i++;
      }
      console.log(this.headvals+"Hello World");
    }


  addColumn(){
    this.boolinpcol =true;
  }

  submitCol(){
    this.objsize ++;
    this.task[0][this.objsize] = (document.getElementById("newCol") as HTMLInputElement).value;
    console.log(this.task[0]);
    //console.log();
    for(var j=1;j<this.task.length;j++){
      this.task[j][this.objsize] = "";
    }
    this.getHeads();
    //console.log(this.task);
    this.boolinpcol=false;
  }

  cancel(){
    this.boolinpcol=false;
    this.boolinprow=false;
  }


  adding(value){
    if(value=='0'){
      this.addRow();
      (document.getElementById("add") as HTMLOptionElement).value = "";
     // console.log("Add Row");
      value="";
    }else if(value=='1'){
      this.addColumn();
      (document.getElementById("add") as HTMLOptionElement).value = "";
  //    console.log("Add Column");
      value="";
    }else{
//console.log("Select One");
    }
  }

  submitRow(){
    var heads = this.task[0];
    //console.log(heads);
    //var i=0;
    var tsk:Object={};
    for(var key in heads){
      //console.log((document.getElementById(key) as HTMLInputElement).value);
      tsk[key]=(document.getElementById(key) as HTMLInputElement).value;
    }    
    this.task.push(tsk);
    //console.log(this.task);
    this.boolinprow=false;
  }

  addRow(){
    this.boolinprow = true;
  }

}
