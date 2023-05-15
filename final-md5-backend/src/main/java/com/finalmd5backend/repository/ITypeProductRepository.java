package com.finalmd5backend.repository;

import com.finalmd5backend.model.Product;
import com.finalmd5backend.model.TypeProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ITypeProductRepository extends JpaRepository<TypeProduct, Integer> {
    @Query(value = "select * from type_product", nativeQuery = true)
    List<TypeProduct> getAllTypeProducts();
}
