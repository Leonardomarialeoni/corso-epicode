package dao;

import entities.personeEprestiti.Utente;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import jakarta.persistence.Query;

import java.util.List;

public class UtenteDAO {
    private EntityManagerFactory entityManagerFactory;
    private EntityManager entityManager;

    public UtenteDAO() {
        this.entityManagerFactory = Persistence.createEntityManagerFactory("JPA_Sample");
        this.entityManager = entityManagerFactory.createEntityManager();
    }

    public Utente trovaUtentePerNumeroTessera(int numeroTessera) {
        Query query = entityManager.createQuery("SELECT u FROM Utente u WHERE u.numeroTessera = :numeroTessera");
        query.setParameter("numeroTessera", numeroTessera);
        List<Utente> risultato = query.getResultList();
        return risultato.isEmpty() ? null : risultato.get(0);
    }
}