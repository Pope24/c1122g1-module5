package com.finalmd5backend.service.impl;

import com.finalmd5backend.model.Product;
import com.finalmd5backend.repository.IProductRepository;
import com.finalmd5backend.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;
    @Override
    public List<Product> getAllProducts() {
        return productRepository.getAllProducts();
    }
}
