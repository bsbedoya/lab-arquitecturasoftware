package com.corhuila.Sistema.Solar.service;

import java.util.List;

import com.corhuila.Sistema.Solar.models.entity.Planetas;

public interface IPlantasService {

    public List<Planetas> findAll();

    public Planetas findById(Long id);

    public Planetas save(Planetas planetas);

    public void delete(Long id);

}
