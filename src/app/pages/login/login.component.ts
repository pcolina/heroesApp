import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserServiceService } from 'src/app/services/UserService/userService.service';
import * as customValidators from 'src/app/shared/utils/validations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: any = {
    username: '',
    password: ''
  };

  public user2: string = 'usuario'
  public pass2: string = 'contraseña'

  constructor(private fb: FormBuilder,
    private userService: UserServiceService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }


  login() {

    this.authService.login(this.loginForm.controls.name.value, this.loginForm.controls.pass.value).subscribe(
      result => {
        this.router.navigate(['/basico']);
      }, (error => {
        console.log(error);
      })
    )
  }

  guardar(forma: NgForm) {
    console.log(forma);
  }
  pattern1 = "^[0-9_-]{10,12}$";
  pattern2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_-])([A-Za-z\d$@$!%*?&_-]|[^ ]){8,15}$/


    ;

  public loginForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4), customValidators.forbiddenWordsValidator]),
    pass: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern(this.pattern2)])

  }, {
    validators: customValidators.isField1EqualToField2,
  })

  // public loginForm2: FormGroup = this.fb.group({
  //   name: ['name', Validators.required],
  //   pass: ['0', [Validators.required, Validators.minLength(4)], Validators.pattern(new RegExp(/.*\d.*/))],
  // })


  isInvalidField(field: string): boolean | null {
    return (this.loginForm.controls[field].errors || this.loginForm.errors) && this.loginForm.controls[field].touched;

  }

  getFieldError(field: string): string | null {

    if (!this.loginForm.controls[field]) return null

    const errors = this.loginForm.controls[field].errors || {};
    const errorForm = this.loginForm.errors;



    for (const key of Object.keys({ ...errors, ...errorForm })) {
      switch (key) {
        case 'required':
          return 'Este campo es obligatorio';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres requeridos.`
        case 'forbidden':
          return 'Esa palabra incumple nuestra política';
        case 'pattern':
          return 'El email tiene que tener almenos una mayuscula, un numero y un caracter especial'
        case 'equal':
          return 'Los campos no pueden ser iguales'
      }


    }
    return null
  }
}


