package dao;

import entities.biblioteca.Libro;
import jakarta.persistence.*;

import java.util.List;


public class LibroDAO {
    private EntityManagerFactory entityManagerFactory;
    private EntityManager entityManager;

    public LibroDAO() {
        this.entityManagerFactory = Persistence.createEntityManagerFactory("JPA_Sample");
        this.entityManager = entityManagerFactory.createEntityManager();
    }

    public void inserisciLibro(Libro libro) {
        EntityTransaction transaction = entityManager.getTransaction();
        try {
            transaction.begin();
            entityManager.persist(libro);
            transaction.commit();
        } catch (Exception e) {
            if (transaction.isActive()) {
                transaction.rollback();
            }
            e.printStackTrace();
        }
    }

    public void rimuoviLibroPerISBN(String codiceISBN) {
        EntityTransaction transaction = entityManager.getTransaction();
        try {
            transaction.begin();
            Libro libro = entityManager.find(Libro.class, codiceISBN);
            if (libro != null) {
                entityManager.remove(libro);
            }
            transaction.commit();
        } catch (Exception e) {
            if (transaction.isActive()) {
                transaction.rollback();
            }
            e.printStackTrace();
        }
    }

    public Libro trovaLibroPerISBN(String codiceISBN) {
        return entityManager.find(Libro.class, codiceISBN);
    }

    public List<Libro> trovaLibriPerAnnoPubblicazione(int anno) {
        Query query = entityManager.createQuery("SELECT l FROM Libro l WHERE l.annoPubblicazione = :anno");
        query.setParameter("anno", anno);
        return query.getResultList();
    }

    public List<Libro> trovaLibriPerTitolo(String titolo) {
        Query query = entityManager.createQuery("SELECT l FROM Libro l WHERE l.titolo LIKE :titolo");
        query.setParameter("titolo", "%" + titolo + "%");
        return query.getResultList();
    }
}