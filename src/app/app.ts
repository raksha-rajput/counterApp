import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count=0;

handleCount(val: string){
if (val == 'minus') {
  if(this.count>0){
  this.count = this.count-1;
  }

} else if(val == 'plus') {
  this.count = this.count+1;
}
else{
  this.count=0;
}
}

// increment(){
//   this.count = this.count+1;
// }

// Decrement(){
//   this.count = this.count-1;
// }

// resete(){
//   this.count=0;
// }
}
