import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})

export class ByRegionPageComponent implements OnInit {

  public isLoading: boolean = false
  public region: Country[] = [];
  public regions: Region[] = ['Africa','Americas','Asia','Europe','Oceania'];
  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
      this.region = this.countriesService.cacheStore.byRegion.countries;
      this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

    searchByRegion(region: Region) {
      this.selectedRegion = region;
      this.isLoading = true;
      this.countriesService.searchRegion(region)
      .subscribe(
        regions => {this.region = regions;
        this.isLoading = false;}
      );
    }


}
