import { Injectable, Inject, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableService } from '../../../_metronic/shared/crud-table';
import { Futemit } from '../_models/futemit.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: "root",
})
export class FutemitserviceService extends TableService<Futemit> implements OnDestroy {
  API_URL = `http://localhost:4000/emitido`;
  constructor(@Inject(HttpClient) http) {
    super(http);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }
}



