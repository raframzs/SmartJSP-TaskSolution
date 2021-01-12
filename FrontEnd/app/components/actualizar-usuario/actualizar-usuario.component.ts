import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../models/usuario';
import {ActivatedRoute, Router} from '@angular/router';
import {UsuarioService} from '../../services/usuario.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PaisService} from '../../services/pais.service';
import {Pais} from '../../models/pais';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  /* Variables de gestión del formulario */
  user: Usuario;
  userForm: FormGroup;
  tipoDocumento: string [] = ['Cedula de Extranjeria', 'Pasaporte'];

  /* Validación especial del campo pais pais */
  validPais = true;

  /* Arreglo que guarda los paises almacenados en la BBDD */
  paises: Pais [] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router,
              private usuarioService: UsuarioService,
              private paisService: PaisService) {

    this.crearFormulario();

    /* Se utiliza el ID  del usuario seleccionado para
    * traerlo al formulario de edición */
    this.activatedRoute.params.subscribe(params => {
      this.usuarioService.getUserById(params.id).subscribe(user => {
          this.user = user;
          this.populeteForm();
        },
        error => console.log(error));
    });
  }

  ngOnInit(): void {
    this.getPaises();
  }

  /* Método que trae los paises para el select. */
  getPaises(): void {
    this.paisService.getAllPaises().subscribe(paises => {
        this.paises = paises;
      },
      error => console.log(error));
  }

  /* Método que crea y relaciona los campos del DOM con la lógica */
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
      fecha: ['', Validators.required],
      estado: ['']
    });
  }

  /* Una vez traído el usuario por el ID, este método llena los campos */
  populeteForm(): void {
    this.userForm.setValue({
      nombre: this.user.nombre,
      apellido: this.user.apellido,
      nacionalidad: this.user.nacionalidad,
      tipoDocumento: this.user.tipoDocumento,
      numeroDocumento: this.user.numeroDocumento,
      email: this.user.email,
      telefono: this.user.telefono,
      observacion: this.user.observacion,
      fecha: this.user.fecha,
      estado: this.user.estado,
    });

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
      Swal.fire({
        title: 'Actualizar usuario',
        text: `Estas seguro que quieres actualizar?`,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#5bc0de',
        cancelButtonColor: '#d9534f',
        confirmButtonText: 'Si, actualizar!'
      }).then((result) => {
        if (result.isConfirmed) {
          /* Persistir información */
          this.usuarioService.updateUsuario(this.user.id, this.userForm.value).subscribe(user => {
              this.userForm.reset();
              Swal.fire(
                '¡Actualizado!',
                'El registro ha sido actualizado con exito.',
                'success'
              );
              setTimeout(() => {
                this.router.navigate(['/usuarios']);
              }, 1500);
            },
            error => console.log(error));
        }
      });

    }
  }
  /* Revisa la validez del campo nacionalidad */
  get nacionalidad(): boolean {
    return this.userForm.get('nacionalidad').value.id === 1;
  }

  // Getters de validez del formulario ...

  /* Revisa la validez del campo nombre */
  get nombreInvalido(): boolean {
    return this.userForm.get('nombre').invalid && this.userForm.get('nombre').touched;
  }

  /* Revisa la validez del campo apellido */
  get apellidoInvalido(): boolean {
    return this.userForm.get('apellido').invalid && this.userForm.get('apellido').touched;
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

  /* Revisa la validez del campo nacionalidad */
  get nacionalidadInvalida(): boolean {
    return this.userForm.get('nacionalidad').invalid && this.userForm.get('nacionalidad').touched;
  }

}
