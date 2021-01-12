package com.smartjsp.manager.REST;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartjsp.manager.models.Usuario;
import com.smartjsp.manager.services.UsuarioService;

/**
 * Controlador REST que mapea los objetos y las objetos de Java con 
 * la BBDD en PostgreSQL, todos retornan un ResponseEntity con el tipo
 * de dato que se obtiene despues de la consulta.
 * 
 * 
 * En el decorador @RequestMappin define la URL necesaria para consumir los registros
 * 
 * @author rafra
 *
 */
@RestController
@RequestMapping("/usuarios/")
public class UsuarioREST {

	@Autowired
	private UsuarioService usuarioService;

	@GetMapping
	private ResponseEntity<List<Usuario>> getAllPersonas() {
		return ResponseEntity.ok(usuarioService.findAll());
	}	
	
	@GetMapping(value = "{id}")
	private ResponseEntity<Optional<Usuario>> getById(@PathVariable("id") Long id) {
		return ResponseEntity.ok(usuarioService.findById(id));
	}

	@PostMapping
	private ResponseEntity<Usuario> savePersona(@RequestBody Usuario usuario) {
		
		try {
			Usuario personaGuardada = usuarioService.save(usuario);
			return ResponseEntity.created(new URI("/usuario/" + personaGuardada.getId()))
					.body(personaGuardada);
		} catch (URISyntaxException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
		
	}
	
	@DeleteMapping (value = "delete/{id}")
	private ResponseEntity<Boolean> deletePersona (@PathVariable ("id") Long id){
		usuarioService.deleteById(id);
		return ResponseEntity.ok(!(usuarioService.findById(id)!=null));
		
	}
	
		
	@PostMapping("usuario/{id}")
	public ResponseEntity<Usuario> updatePersona(@PathVariable("id") Long id, @RequestBody Usuario usuario) {
		Optional<Usuario> obj = usuarioService.findById(id);
		
		if (obj.isPresent()) {
			Usuario usuarioRegistrado = obj.get();
			usuarioRegistrado.setApellido(usuario.getApellido());
			usuarioRegistrado.setNombre(usuario.getNombre());
			usuarioRegistrado.setEmail(usuario.getEmail());
			usuarioRegistrado.setEstado(usuario.getEstado());
			usuarioRegistrado.setFecha(usuario.getFecha());
			usuarioRegistrado.setNacionalidad(usuario.getNacionalidad());
			usuarioRegistrado.setObservacion(usuario.getObservacion());
			usuarioRegistrado.setTipoDocumento(usuario.getTipoDocumento());
			usuarioRegistrado.setNumeroDocumento(usuario.getNumeroDocumento());
			usuarioRegistrado.setTelefono(usuario.getTelefono());	
			
			return new ResponseEntity<>(usuarioService.save(usuarioRegistrado), HttpStatus.OK);
			
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
		
}
