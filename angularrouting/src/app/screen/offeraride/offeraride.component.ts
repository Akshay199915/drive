import { Component, OnInit ,ViewChild} from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
@Component({
  selector: 'app-offeraride',
  templateUrl: './offeraride.component.html',
  styleUrls: ['./offeraride.component.css']
})
export class OfferarideComponent implements OnInit {
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
