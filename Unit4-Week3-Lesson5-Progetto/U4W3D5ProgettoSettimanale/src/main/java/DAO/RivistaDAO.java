package dao;


import entities.biblioteca.Rivista;
import jakarta.persistence.*;

import java.util.List;

public class RivistaDAO {
    private EntityManagerFactory entityManagerFactory;
    private EntityManager entityManager;

    public RivistaDAO() {
        this.entityManagerFactory = Persistence.createEntityManagerFactory("JPA_Sample");
        this.entityManager = entityManagerFactory.createEntityManager();
    }

    public void inserisciRivista(Rivista rivista) {
        EntityTransaction transaction = entityManager.getTransaction();
        try {
            transaction.begin();
            entityManager.persist(rivista);
            transaction.commit();
        } catch (Exception e) {
            if (transaction.isActive()) {
                transaction.rollback();
            }
            e.printStackTrace();
        }
    }

    public void rimuoviRivistaPerISBN(String codiceISBN) {
        EntityTransaction transaction = entityManager.getTransaction();
        try {
            transaction.begin();
            Rivista rivista = entityManager.find(Rivista.class, codiceISBN);
            if (rivista != null) {
                entityManager.remove(rivista);
            }
            transaction.commit();
        } catch (Exception e) {
            if (transaction.isActive()) {
                transaction.rollback();
            }
            e.printStackTrace();
        }
    }

    public Rivista trovaRivistaPerISBN(String codiceISBN) {
        return entityManager.find(Rivista.class, codiceISBN);
    }

    public List<Rivista> trovaRivistePerAnnoPubblicazione(int anno) {
        Query query = entityManager.createQuery("SELECT r FROM Rivista r WHERE r.annoPubblicazione = :anno");
        query.setParameter("anno", anno);
        return query.getResultList();
    }

    public List<Rivista> trovaRivistePerTitolo(String titolo) {
        Query query = entityManager.createQuery("SELECT r FROM Rivista r WHERE r.titolo LIKE :titolo");
        query.setParameter("titolo", "%" + titolo + "%");
        return query.getResultList();
    }
}
