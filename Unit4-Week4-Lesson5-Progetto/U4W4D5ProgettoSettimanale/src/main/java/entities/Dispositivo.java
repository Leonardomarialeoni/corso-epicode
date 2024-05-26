package entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
@Entity
public class Dispositivo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String tipo;

    @Enumerated(EnumType.STRING)
    private App.GestioneDispositiviAzienda.entities.Stato stato;


    @ManyToOne
    @JoinColumn(name = "dipendente_id")
    private Dipendente dipendente;

}