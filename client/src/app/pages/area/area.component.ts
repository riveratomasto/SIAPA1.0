import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CustomersService } from "src/app/modules/e-commerce/_services";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ISearchView } from "../../_metronic/shared/crud-table";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import {
  IPaginatorView,
  PaginatorState,
} from "../../_metronic/shared/crud-table";

@Component({
  selector: "app-area",
  templateUrl: "./area.component.html",
  styleUrls: ["./area.component.scss"],
})
export class AreaComponent
  implements OnInit, OnDestroy, IPaginatorView, ISearchView {
  isLoading: boolean;
  private subscriptions: Subscription[] = [];
  searchGroup: FormGroup;
  constructor(
    public customerService: CustomersService,
    private fb: FormBuilder
  ) {
    // const sb = this.customerService.isLoading$.subscribe(
    //   (res) => (this.isLoading = res)
    // );
    // this.subscriptions.push(sb);
    // this.customerService.fetch();
    console.log(customerService);
  }

  paginator: PaginatorState;
  paginate(paginator: PaginatorState) {
    this.customerService.patchState({ paginator });
  }

  ngOnInit(): void {
    this.searchForm();
    const sb = this.customerService.isLoading$.subscribe(
      (res) => (this.isLoading = res)
    );
    this.subscriptions.push(sb);
    this.paginator = this.customerService.paginator;
    this.customerService.fetch();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }

  // search
  searchForm() {
    // +
    this.searchGroup = this.fb.group({
      searchTerm: [""],
    });
    const searchEvent = this.searchGroup.controls.searchTerm.valueChanges
      .pipe(
        /*
          The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator,
          we are limiting the amount of server requests emitted to a maximum of one every 150ms
        */
        debounceTime(150),
        distinctUntilChanged()
      )
      .subscribe((val) => this.search(val));
    this.subscriptions.push(searchEvent);
  }

  search(searchTerm: string) {
    // +
    this.customerService.patchState({ searchTerm });
  }
}
