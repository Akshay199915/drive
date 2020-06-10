import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  days: any = [];
  months: any = [];
  years: any = [];
  
  //  concatination loop variables
   a:any=[];
   a1:number=1;
   a2:number=0;


  //  date of joining variables

   gday:number= 12;
   gmonth:number= 2;
   gyear:number= 2019;
   
   //  Current Date Variables
   cday:number= new Date().getDate();
   cmonth:number= new Date().getMonth();
   cyear:number= new Date().getFullYear();
   
  //  variables for loop which find no. of days and months,year array
   lyear:number=0;
   lmonth:number=0;
   k:number=this.gmonth;
   
  
  
  getdays = (fmonth,fyear)=>{
    
    this.days.push(new Date(fyear,fmonth,0).getDate());
    
  }
   
  
  
  constructor() {

    // loop for finding no. of days and month,year array
    for ( this.lyear = this.gyear; this.lyear <=this.cyear; this.lyear++) {
   
      for( this.lmonth=this.k;this.lmonth<=12;this.lmonth++){
         if(this.lyear==this.cyear&&this.lmonth==this.cmonth+2){
           break;
         }
             
            this.months.push(this.lmonth);
            this.years.push(this.lyear);
            this.getdays(this.lmonth,this.lyear);
              
      }
        this.k=1;
       }

       //loop for concatenation

       for (let i=0;i<this.days.length;i++) {
         if(i==0){
           this.a1=this.gday;
         }
         else{
           this.a1=1;
         }
         if(i==this.days.length-1){
           this.a2=this.cday;
         }
         else
         {
           this.a2=this.days[i];
         }

         this.a+='<div class="input-group pl-5 border"><div class="input-group-prepend "><span class="input-group-text pr-5 bg-danger text-white" style="width:120px;">' +this.months[i]+"/"+this.years[i]+'</span><form class="form-inline p-1 pl-2">';
       
            for(let j=this.a1;j<=this.a2;j++){

                 this.a+='<input type="text" class="form-control form-control-sm mb-2 mr-sm-2 p-0 pl-1 bg-light" style="width: 25px; height: 25px; font-size: 0.7em; color:white;" maxlength="1" placeholder="'+j+'">';

                 }
       this.a+='</form></div></div>'
      }
      
   }

  ngOnInit(): void {
    document.getElementById("box").innerHTML=this.a;
  }

}
