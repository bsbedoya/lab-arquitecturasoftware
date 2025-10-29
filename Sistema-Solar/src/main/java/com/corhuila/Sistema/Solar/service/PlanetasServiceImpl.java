package com.corhuila.Sistema.Solar.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.corhuila.Sistema.Solar.models.dao.IPlanetasRepository;
import com.corhuila.Sistema.Solar.models.entity.Planetas;

@Service
public class PlanetasServiceImpl implements IPlantasService {

    @Autowired
    private IPlanetasRepository planetasRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Planetas> findAll() {
        return (List<Planetas>) planetasRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Planetas findById(Long id) {

        return planetasRepository.findById(id).orElse(null);
    }

    @Override
    public Planetas save(Planetas planetas) {
        return planetasRepository.save(planetas);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        planetasRepository.deleteById(id);

    }
}
