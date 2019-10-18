import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  constructor() { }

  dataSize = 2000000;
  showData = '';
  ngOnInit() {
  }

  printData(){
    console.log('clicked');
    this.showData='clicked'
    
  }

  startWebWorker() {
    this.showData='';
    if (typeof Worker !== 'undefined') {      
      const worker = new Worker('./webworker.worker', { type: 'module' });
      worker.onmessage = ({ data }) => {
        if(data.length>2000000)
        {
          this.showData = 'Worker thread is completed.'
        }
        
      }; 
      worker.postMessage(this.dataSize);
    }
  }

  startMain() {

    this.showData='';
    let check=false;
    console.time('Main')
    let val = 'a';
    for (let k = 0; k <= 10; k++) {
      val = 'a';
      for (let i = 0; i <= this.dataSize; i++) {
        val += 'a';
      }
    }
    console.log(val.length);
    if(val.length>2000000)
    {
      this.showData='main thread is completed'
    }
    console.timeEnd('Main');
    

  }

}
