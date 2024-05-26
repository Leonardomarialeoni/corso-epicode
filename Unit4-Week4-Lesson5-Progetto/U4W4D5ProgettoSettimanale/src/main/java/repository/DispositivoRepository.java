package App.GestioneDispositiviAzienda.repository;

import App.GestioneDispositiviAzienda.entities.Dispositivo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DispositivoRepository extends JpaRepository <Dispositivo, Long> {
}