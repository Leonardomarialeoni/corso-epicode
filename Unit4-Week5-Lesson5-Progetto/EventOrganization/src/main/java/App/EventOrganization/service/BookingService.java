package App.EventOrganization.service;

import App.EventOrganization.entities.Booking;
import App.EventOrganization.entities.Event;
import App.EventOrganization.entities.User;
import App.EventOrganization.repository.BookingRepository;
import App.EventOrganization.repository.EventRepository;
import App.EventOrganization.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private UserRepository userRepository;

    public boolean bookEvent(Long userId, Long eventId) {
        User user = userRepository.findById(userId).orElse(null);
        Event event = eventRepository.findById(eventId).orElse(null);

        if (user == null || event == null || event.getAvailableSeats() <= 0 || bookingRepository.existsByUserAndEvent(user, event)) {
            return false;
        }

        event.setAvailableSeats(event.getAvailableSeats() - 1);
        eventRepository.save(event);

        Booking booking = new Booking(user, event);
        bookingRepository.save(booking);

        return true;
    }
}