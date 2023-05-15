package com.finalmd5backend.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private LocalDate publicDay;
    private int amount;
    @ManyToOne
    private TypeProduct typeProduct;

    public Product() {
    }

    public Product(int id, String name, LocalDate publicDay, int amount, TypeProduct typeProduct) {
        this.id = id;
        this.name = name;
        this.publicDay = publicDay;
        this.amount = amount;
        this.typeProduct = typeProduct;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getPublicDay() {
        return publicDay;
    }

    public void setPublicDay(LocalDate publicDay) {
        this.publicDay = publicDay;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public TypeProduct getTypeProduct() {
        return typeProduct;
    }

    public void setTypeProduct(TypeProduct typeProduct) {
        this.typeProduct = typeProduct;
    }
}
