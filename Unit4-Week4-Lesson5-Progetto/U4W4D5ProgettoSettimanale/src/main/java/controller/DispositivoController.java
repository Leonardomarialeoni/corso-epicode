package App.GestioneDispositiviAzienda.controller;

import App.GestioneDispositiviAzienda.entities.Dispositivo;
import App.GestioneDispositiviAzienda.service.DispositivoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dispositivi")
public class DispositivoController {

    @Autowired
    private DispositivoService dispositivoService;

    @PostMapping
    public ResponseEntity<?> createOrUpdateDispositivo(@Valid @RequestBody Dispositivo dispositivo) {
        Dispositivo savedDispositivo = dispositivoService.saveOrUpdateDispositivo(dispositivo);
        return new ResponseEntity<>(savedDispositivo, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Dispositivo>> getAllDispositivi() {
        List<Dispositivo> dispositivi = dispositivoService.getAllDispositivi();
        return new ResponseEntity<>(dispositivi, HttpStatus.OK);
    }
}