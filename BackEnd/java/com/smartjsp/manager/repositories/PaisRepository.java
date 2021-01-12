package com.smartjsp.manager.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smartjsp.manager.models.Pais;

/**
 * Interface que utiliza los métodos de Java Persistence Api
 * @see JpaRepository
 * @author RafaelRamirez
 *
 */
public interface PaisRepository extends JpaRepository<Pais, Long>{
}
