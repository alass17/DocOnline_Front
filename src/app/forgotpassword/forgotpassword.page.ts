import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth/auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  form: any = {
    email: null,
  }
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onSubmit(): void {
    const {email} = this.form;
    this.authService.reinitialisermotdepasse(email).subscribe(data =>(
      console.log(data)
    ))
  }
}
