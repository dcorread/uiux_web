import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-times',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './times.component.html',
  styleUrl: './times.component.scss'
})
export class TimesComponent {
  constructor(private router:Router){}
  data: any = [
      { id: 1, action: 'Read', date: 'Mar 2023/05/01' },
      { id: 1, action: 'Read', date: 'Mar 2023/05/01' },
      { id: 1, action: 'Read', date: 'Mar 2023/05/01' },
      { id: 1, action: 'Read', date: 'Mar 2023/05/01' },
    ]

  goAdd() {
    this.router.navigate(['/add']);
  }
}
