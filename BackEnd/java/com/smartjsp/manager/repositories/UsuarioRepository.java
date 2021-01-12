package com.smartjsp.manager.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smartjsp.manager.models.Usuario;

/**
 * Interface que utiliza los métodos de Java Persistence Api
 * @see JpaRepository
 * @author RafaelRamirez
 *
 */
@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
	
}
