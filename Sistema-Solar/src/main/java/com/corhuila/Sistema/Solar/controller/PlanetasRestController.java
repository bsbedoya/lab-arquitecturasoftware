package com.corhuila.Sistema.Solar.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import com.corhuila.Sistema.Solar.models.entity.Planetas;
import com.corhuila.Sistema.Solar.service.IPlantasService;

@CrossOrigin(origins = { "http://localhost:4200" })
@RestController
@RequestMapping("/api")

public class PlanetasRestController {

    @Autowired
    private IPlantasService planetasService;

    @GetMapping("/planetas")
    public List<Planetas> index() {
        return planetasService.findAll();
    }

    @GetMapping("/planetas/{id}")
    public Planetas show(@PathVariable Long id) {
        return planetasService.findById(id);

    }

    @PostMapping("/planetas")
    @ResponseStatus(HttpStatus.CREATED)
    public Planetas create(@RequestBody Planetas planetas) {
        return planetasService.save(planetas);
    }

    @PutMapping("/planetas/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public Planetas update(@RequestBody Planetas planetas, @PathVariable Long id) {
        Planetas planetasactual = planetasService.findById(id);

        planetasactual.setNombre(planetas.getNombre());
        planetasactual.setTipo(planetas.getTipo());
        planetasactual.setDiametro(planetas.getDiametro());
        planetasactual.setLunas(planetas.getLunas());
        planetasactual.setDistancia_sol(planetas.getDistancia_sol());

        return planetasService.save(planetasactual);
    }

    @DeleteMapping("/planetas/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable long id) {
        planetasService.delete(id);
    }

}
