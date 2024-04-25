package com.example.oblig_3_final_file;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@RestController
public class BillettKontroller {
    @Autowired
    private BillettRepository rep;

    @PostMapping("/lagre")
    public void lagreBillett(Billett innBillett){
        rep.lagreBillet(innBillett);
    }

    @GetMapping("/hentAlle")
    public List<Billett> hentAlle(){
        return rep.hentalleBilletter();
    }

    @GetMapping ("/slettAlle")
    public void slettAlle(){
        rep.slettAlleBilletter();
    }
}
