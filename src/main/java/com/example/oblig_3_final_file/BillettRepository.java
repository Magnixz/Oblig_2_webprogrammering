package com.example.oblig_3_final_file;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BillettRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreBillet(Billett innBillett){
            String sql = "INSERT INTO Billet (film, antall, fornavn, etternavn, tlf, epost) VALUES(?,?,?,?,?,?)";
            db.update(sql, innBillett.getFilm(), innBillett.getAntall(), innBillett.getFornavn(), innBillett.getEtternavn(), innBillett.getTlf(), innBillett.getEpost());
    }

    public List<Billett> hentalleBilletter(){
        String sql = "SELECT * FROM Billett";
        List<Billett> alleBilletter= db.query(sql, new BeanPropertyRowMapper(Billett.class));
        return alleBilletter;
    }

    public void slettAlleBilletter(){
        String sql = "DELETE FROM Billett";
        db.update(sql);
    }
}