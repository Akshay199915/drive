import { Component, OnInit ,ViewChild} from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';


import { from } from 'rxjs';
@Component({
  selector: 'app-findaride',
  templateUrl: './findaride.component.html',
  styleUrls: ['./findaride.component.css']
})
export class FindarideComponent implements OnInit {
  @ViewChild("placesRef") placesRef :GooglePlaceDirective;
 formattedAddress  = '';
  constructor() { }
   
  options = {
    componentRestrictions:{

      country:["IN"]
    }
  }
  public handleAddressChange(address: any) {
    this.formattedAddress  = address.formatted_address;
  }
  ngOnInit(): void {
  }

}
