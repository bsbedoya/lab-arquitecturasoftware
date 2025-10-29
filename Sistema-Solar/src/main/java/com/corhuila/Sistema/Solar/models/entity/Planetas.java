package com.corhuila.Sistema.Solar.models.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Planetas")
public class Planetas implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "diametro")
    private Long diametro;

    @Column(name = "lunas")
    private Long lunas;

    @Column(name = "tipo")
    private String tipo;

    @Column(name = "distancia_sol")
    private Long distancia_sol;

    @Column(name = "url")
    private String url;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Long getDiametro() {
        return diametro;
    }

    public void setDiametro(Long diametro) {
        this.diametro = diametro;
    }

    public Long getLunas() {
        return lunas;
    }

    public void setLunas(Long lunas) {
        this.lunas = lunas;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Long getDistancia_sol() {
        return distancia_sol;
    }

    public void setDistancia_sol(Long distancia_sol) {
        this.distancia_sol = distancia_sol;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

}