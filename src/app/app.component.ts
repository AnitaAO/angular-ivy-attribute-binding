import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `
    <h1>{{ title }}</h1>
    <img [src] = "imageUrl">
    <table>
      <tr>
        <td [attr.colspan] = "colspan"></td>
      </tr>
    </table>

  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = "New Dawn"
  imageUrl = ""
  colspan = 2

}
