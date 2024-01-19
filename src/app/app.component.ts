import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  title = 'poc-estudoEK_view_child_view_children-angular';

  ngAfterViewInit(): void {

  }

  @ViewChild('childRef') childComponent!: ChildComponent;
  parentInputValue: string='';

  showChildValue() {
    console.log(this.childComponent.childInputValue);
  }
}
