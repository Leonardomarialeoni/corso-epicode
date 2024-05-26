package App.GestioneDispositiviAzienda.service;

import App.GestioneDispositiviAzienda.entities.Dispositivo;
import App.GestioneDispositiviAzienda.repository.DispositivoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DispositivoService {

    @Autowired
    private DispositivoRepository dispositivoRepository;

    public Dispositivo saveOrUpdateDispositivo(Dispositivo dispositivo) {
        return dispositivoRepository.save(dispositivo);
    }

    public List<Dispositivo> getAllDispositivi() {
        return dispositivoRepository.findAll();
    }
}