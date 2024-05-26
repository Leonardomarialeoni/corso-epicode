package App.GestioneDispositiviAzienda.controller;

import App.GestioneDispositiviAzienda.entities.Dipendente;
import App.GestioneDispositiviAzienda.service.DipendenteService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dipendenti")
public class DipendenteController {

    @Autowired
    private DipendenteService dipendenteService;

    @PostMapping
    public ResponseEntity<?> createOrUpdateDipendente(@Valid @RequestBody Dipendente dipendente) {
        Dipendente savedDipendente = dipendenteService.saveOrUpdateDipendente(dipendente);
        return new ResponseEntity<>(savedDipendente, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Dipendente>> getAllDipendenti() {
        List<Dipendente> dipendenti = dipendenteService.getAllDipendenti();
        return new ResponseEntity<>(dipendenti, HttpStatus.OK);
    }

}
