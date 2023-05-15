package com.finalmd5backend.service.impl;

import com.finalmd5backend.model.TypeProduct;
import com.finalmd5backend.repository.ITypeProductRepository;
import com.finalmd5backend.service.ITypeProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeProductService implements ITypeProductService {
    @Autowired
    private ITypeProductRepository typeProductRepository;
    @Override
    public List<TypeProduct> getAllTypeProduct() {
        return typeProductRepository.getAllTypeProducts();
    }
}
