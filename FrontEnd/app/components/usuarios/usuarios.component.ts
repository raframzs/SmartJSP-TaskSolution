import {Component, OnDestroy, OnInit} from '@angular/core';
import {Usuario} from '../../models/usuario';
import {UsuarioService} from '../../services/usuario.service';
import {Router} from '@angular/router';

import Swal from 'sweetalert2';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit, OnDestroy {

  /* Variables para el control del filtro */
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  /* Usuarios del sistema almacenados en este array */
  usuarios: Usuario [];

  constructor(private formBuilder: FormBuilder,
              private usuarioService: UsuarioService,
              private router: Router) {
  }

  ngOnInit(): void {
    /* Al momento de cargar la pagina, mostraremos 5 filas por pagina de tabla */
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.getUsuarios();
  }

  /* Eliminamos el objeto dtTrigger del filtro */
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  /* Traer todos los usuarios */
  getUsuarios(): void {
    this.usuarioService.getAllUsuarios().subscribe(
      users => {
        this.usuarios = users;
        // Llamar el filtro automáticamente a la tabla
        this.dtTrigger.next();
      },
      error => console.log(error));
  }

  /* Cuando es pulsado el botón de eliminar
  * entonces se muestra un mensaje de confirmación y
  * es eliminado el registro, al mismo tiempo que la pagina es actualizada */
  deleteUsuario(user: Usuario): void {

    Swal.fire({
      title: 'Eliminar usuario',
      text: `Quieres eliminar a ${user.nombre} ${user.apellido} `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#5bc0de',
      cancelButtonColor: '#d9534f',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.deleteById(user.id).subscribe(resp => {
          // @ts-ignore
          this.usuarios.pop(resp);
        });
        Swal.fire(
          'Eliminado!',
          'El registro ha sido eliminado.',
          'success'
        );
      }
    });

  }

  /* Navegar a la vista de actualizar para editar usuario */
  editUser(id: number): void {
    this.router.navigate(['/actualizar', id]);
  }
}
