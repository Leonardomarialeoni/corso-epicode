package App.GestioneDispositiviAzienda.controller;

import App.GestioneDispositiviAzienda.entities.Dispositivo;
import App.GestioneDispositiviAzienda.service.AssegnazioneService;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/assegnazioni")
public class AssegnazioneController {
    @Autowired
    private AssegnazioneService assegnazioneService;

    @PostMapping("/dispositivo/{dispositivoId}/dipendente/{dipendenteId}")
    public ResponseEntity<Dispositivo> assegnaDispositivo(@PathVariable Long dispositivoId, @PathVariable Long dipendenteId) throws BadRequestException {
        Dispositivo dispositivo = assegnazioneService.assegnaDispositivo(dipendenteId, dispositivoId);
        return ResponseEntity.ok(dispositivo);
    }
}
