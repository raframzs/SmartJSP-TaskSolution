package com.smartjsp.manager.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.smartjsp.manager.models.Usuario;
import com.smartjsp.manager.repositories.UsuarioRepository;

/**
 * Servicio que consume datos de el repositorio,
 * explicitamente comente los metodos CRUD que se utilizan
 * en las transacciones
 * 
 * @see UsuarioRepository
 * @author RafaelRamirez
 *
 */
@Service
public class UsuarioService implements UsuarioRepository {

	@Autowired
	private UsuarioRepository usuarioRepository;

	/** LEER */
	
	@Override
	public List<Usuario> findAll() {
		return usuarioRepository.findAll();
	}

	/** CREAR and ACTUALIZAR */
	@Override
	public <S extends Usuario> S save(S entity) {
		return usuarioRepository.save(entity);
	}

	/** ELIMINAR */
	@Override
	public void delete(Usuario entity) {
		usuarioRepository.delete(entity);
	}
	
	/** ELIMINAR POR ID */
	@Override
	public void deleteById(Long id) {
		usuarioRepository.deleteById(id);

	}
	
	/** BUSCAR POR ID */
	@Override
	public Optional<Usuario> findById(Long id) {
		return usuarioRepository.findById(id);
	}
	
	// ------------------------------------------------------------------------------

	@Override
	public List<Usuario> findAll(Sort sort) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Usuario> findAllById(Iterable<Long> ids) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends Usuario> List<S> saveAll(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void flush() {
		// TODO Auto-generated method stub

	}

	@Override
	public <S extends Usuario> S saveAndFlush(S entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteInBatch(Iterable<Usuario> entities) {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteAllInBatch() {
		// TODO Auto-generated method stub

	}

	@Override
	public Usuario getOne(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends Usuario> List<S> findAll(Example<S> example) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends Usuario> List<S> findAll(Example<S> example, Sort sort) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Page<Usuario> findAll(Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean existsById(Long id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public long count() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void deleteAll(Iterable<? extends Usuario> entities) {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub

	}

	@Override
	public <S extends Usuario> Optional<S> findOne(Example<S> example) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends Usuario> Page<S> findAll(Example<S> example, Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends Usuario> long count(Example<S> example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public <S extends Usuario> boolean exists(Example<S> example) {
		// TODO Auto-generated method stub
		return false;
	}


}
