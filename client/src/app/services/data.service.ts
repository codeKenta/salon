import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http:Http) { }

  getSalonsByPriceRange(min, max) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('min', min );
    params.set('max', max );

    return this.http.get('api/salons', { search: params })
      .map(res => res.json());
  }


}
