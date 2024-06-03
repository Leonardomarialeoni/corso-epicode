package App.EventOrganization.service;

import App.EventOrganization.entities.Event;
import App.EventOrganization.exception.EventManagementException;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class EventManagementService {
    private List<Event> events;
    private int nextEventId;


    public EventManagementService() {
        this.events = new ArrayList<>();
        this.nextEventId = 1;

    }

    public void createEvent(String title, String description, LocalDate date, String location, int availableSeats) throws EventManagementException {
        if (availableSeats <= 0) {
            throw new EventManagementException("Number of available seats must be greater than 0");
        }
        Event newEvent = new Event(title, description, date.atStartOfDay(), location, availableSeats);
        events.add(newEvent);
    }

    public void updateEvent(int eventId, String title, String description, LocalDate date, String location, int availableSeats) {
        Event eventToUpdate = events.get(eventId);
        eventToUpdate.setTitle(title);
        eventToUpdate.setDescription(description);
        eventToUpdate.setDate(date.atStartOfDay());
        eventToUpdate.setLocation(location);
        eventToUpdate.setAvailableSeats(availableSeats);
    }

    public void deleteEvent(int eventId) {
        events.remove(eventId);
    }

    public List<Event> getAllEvents() {
        return events;
    }

    public Event getEventById(int eventId) {
        for (Event event : events) {
            if (event.getId() == eventId) {
                return event;
            }
        }
        return null;
    }
}