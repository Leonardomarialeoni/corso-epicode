package dao;

import entities.personeEprestiti.Prestito;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import jakarta.persistence.Query;

import java.time.LocalDate;
import java.util.List;

public class PrestitoDAO {
    private EntityManagerFactory entityManagerFactory;
    private EntityManager entityManager;

    public PrestitoDAO() {
        this.entityManagerFactory = Persistence.createEntityManagerFactory("JPA_Sample");
        this.entityManager = entityManagerFactory.createEntityManager();
    }

    public List<Prestito> trovaPrestitiPerNumeroTessera(int numeroTessera) {
        Query query = entityManager.createQuery("SELECT p FROM Prestito p WHERE p.utente.numeroTessera = :numeroTessera");
        query.setParameter("numeroTessera", numeroTessera);
        return query.getResultList();
    }

    public List<Prestito> trovaPrestitiScadutiERestituitiNonEffettuati() {
        LocalDate oggi = LocalDate.now();
        Query query = entityManager.createQuery("SELECT p FROM Prestito p WHERE p.dataRestituzioneEffettiva IS NULL AND p.dataRestituzionePrevista < :oggi");
        query.setParameter("oggi", oggi);
        return query.getResultList();
    }
}