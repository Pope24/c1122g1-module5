package com.finalmd5backend.repository;

import com.finalmd5backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "select * from product", nativeQuery = true)
    List<Product> getAllProducts();
}
