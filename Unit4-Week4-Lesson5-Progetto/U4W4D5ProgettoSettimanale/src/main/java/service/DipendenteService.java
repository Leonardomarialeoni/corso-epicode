package App.GestioneDispositiviAzienda.service;

import App.GestioneDispositiviAzienda.entities.Dipendente;
import App.GestioneDispositiviAzienda.repository.DipendenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DipendenteService {

    @Autowired
    private DipendenteRepository dipendenteRepository;

    public Dipendente saveOrUpdateDipendente(Dipendente dipendente) {
        return dipendenteRepository.save(dipendente);
    }

    public List<Dipendente> getAllDipendenti() {
        return dipendenteRepository.findAll();
    }
}