package entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class Dipendente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String username;

    @NotBlank
    private String nome;

    @NotBlank
    private String cognome;

    @NotBlank
    @Email
    private String email;

    @OneToMany(mappedBy = "dipendente", cascade = CascadeType.ALL)
    private List<Dispositivo> dispositivi;
}