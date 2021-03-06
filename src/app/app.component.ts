import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { ElemComponent } from './elem/elem.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// providers: [UserService]
// })
export class AppComponent {
  title = 'myapp';

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ){

  }

  ngOnInit() {
    setTimeout(_ => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ElemComponent);
      const componentRef = this.viewContainerRef.createComponent(componentFactory);
    }, 3000);
  }
}
