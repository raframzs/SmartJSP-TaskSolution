import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Pais} from '../../models/pais';
import {UsuarioService} from '../../services/usuario.service';
import {PaisService} from '../../services/pais.service';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import Swal from 'sweetalert2';
import {Usuario} from '../../models/usuario';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  /* Variable para automatizar la fecha */
  fecha: string;

  /* Control del formulario */
  userForm: FormGroup;
  tipoDocumento: string [] = ['Cedula de Extranjería', 'Pasaporte'];
  validPais = true;

  /* Arreglos que almacenan objetos de los elementos traídos de la BBDD */
  paises: Pais [] = [];
  usuarios: Usuario [] = [];

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private usuarioService: UsuarioService,
              private paisService: PaisService,
              private datePipe: DatePipe) {

    /* Fecha actual */
    const f = new Date();
    this.fecha = f.getDate() + '/' + (f.getMonth() + 1) + '/' + f.getFullYear();
    this.fecha = this.datePipe.transform(this.fecha, 'yyyy-MM-dd');

    /* Crear el objeto formulario */
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.getPaises();
  }

  /* Método que trae los paises */
  getPaises(): void {
    this.paisService.getAllPaises().subscribe(paises => {
        this.paises = paises;
      },
      error => console.log(error));
  }

  /**
   * Método que actualiza el usuario, valida el formulario y muestra los mensajes
   * de confirmación.
   */
  saveFormulario(): void {
    /* chequear campo nacionalidad */
    if (!this.userForm.get('nacionalidad').touched) {
      this.userForm.get('nacionalidad').setErrors({incorrect: true});
      this.validPais = false;

    }

    /* Si el formulario no es valido */
    if (this.userForm.invalid) {
      return Object.values(this.userForm.controls).forEach(
        control => {
          if (control instanceof FormGroup) {
            // tslint:disable-next-line:no-shadowed-variable
            Object.values(control.controls).forEach(control => control.markAsTouched());
          } else {
            control.markAllAsTouched();
          }
        }
      );
    } else {
      /* Persistir información */
      this.usuarioService.saveUsuario(this.userForm.value).subscribe(resp => {
          this.userForm.reset();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Usuario creado con exito.',
            showConfirmButton: false,
            timer: 1500
          });
          setTimeout(
            () => {
              this.router.navigate(['/usuarios']);
            },
            1500
          );
        },
        error => console.log(error));

    }
  }

  /* Método que crea el objeto formulario */
  crearFormulario(): void {
    this.userForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      nacionalidad: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]],
      telefono: [''],
      observacion: [''],
      fecha: [this.fecha, Validators.required],
      estado: ['']
    });
  }

  get nacionalidad(): boolean {
    return this.userForm.get('nacionalidad').value.id === 1;
  }

  /* Revisa la validez del campo nombre */
  get nombreInvalido(): boolean {
    return this.userForm.get('nombre').invalid && this.userForm.get('nombre').touched;
  }

  /* Revisa la validez del campo apellido */
  get apellidoInvalido(): boolean {
    return this.userForm.get('apellido').invalid && this.userForm.get('apellido').touched;
  }

  /* Revisa la validez del campo tipoDocumento */
  get nacionalidadInvalida(): boolean {
    return this.userForm.get('nacionalidad').invalid && this.userForm.get('nacionalidad').touched;
  }

  /* Revisa la validez del campo tipoDocumento */
  get tipoDocumentoInvalido(): boolean {
    return this.userForm.get('tipoDocumento').invalid && this.userForm.get('tipoDocumento').touched;
  }

  /* Revisa la validez del campo numeroDocumento */
  get numeroDocumentoInvalido(): boolean {
    return this.userForm.get('numeroDocumento').invalid && this.userForm.get('numeroDocumento').touched;
  }

  /* Revisa la validez del campo email */
  get emailInvalido(): boolean {
    return this.userForm.get('email').invalid && this.userForm.get('email').touched;
  }

}













