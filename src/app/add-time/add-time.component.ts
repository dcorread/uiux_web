import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-add-time',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './add-time.component.html',
  styleUrl: './add-time.component.scss'
})
export class AddTimeComponent {

}
