import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-data-manager',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.scss']
})

export class RegisterLoginComponent implements OnInit {

  tab: 'welcome' | 'insert' | 'encrypted' | 'decrypted' = 'welcome';
  authMode: 'login' | 'register' = 'login';
  credentials = { username: '', password: '', email: '' };
  showAuthCard = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  switchAuth(mode: 'login' | 'register') {
    this.authMode = mode;
  }

  submitAuth(form: NgForm) {
    if (form.invalid) return;
  }
}