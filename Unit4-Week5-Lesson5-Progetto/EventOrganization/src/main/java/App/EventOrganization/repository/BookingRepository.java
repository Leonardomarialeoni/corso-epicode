package App.EventOrganization.repository;

import App.EventOrganization.entities.Booking;
import App.EventOrganization.entities.Event;
import App.EventOrganization.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    boolean existsByUserAndEvent(User user, Event event);
}