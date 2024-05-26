package App.GestioneDispositiviAzienda.repository;

import App.GestioneDispositiviAzienda.entities.Dipendente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DipendenteRepository extends JpaRepository <Dipendente, Long> {
}