package App.EventOrganization.controller;

import App.EventOrganization.entities.Event;
import App.EventOrganization.payloads.ApiResponse;
import App.EventOrganization.repository.EventRepository;
import App.EventOrganization.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {
    @Autowired
    private EventService eventService;

    @PostMapping("/create")
    @PreAuthorize("hasRole('ORGANIZZATORE')")
    public ResponseEntity<?> createEvent(@RequestBody Event event) {
        Event result = eventService.save(event);
        return ResponseEntity.ok(new ApiResponse(true, "Event created successfully"));
    }

    @PutMapping("/{eventId}")
    @PreAuthorize("hasRole('ORGANIZZATORE')")
    public ResponseEntity<?> updateEvent(@PathVariable Long eventId, @RequestBody Event eventDetails) {
        Event event = eventService.findById(eventId);
        if(event == null) {
            return ResponseEntity.notFound().build();
        }

        event.setTitle(eventDetails.getTitle());
        event.setDescription(eventDetails.getDescription());
        event.setDate(eventDetails.getDate());
        event.setLocation(eventDetails.getLocation());
        event.setAvailableSeats(eventDetails.getAvailableSeats());

        Event updatedEvent = eventService.save(event);
        return ResponseEntity.ok(updatedEvent);
    }

    @DeleteMapping("/{eventId}")
    @PreAuthorize("hasRole('ORGANIZZATORE')")
    public ResponseEntity<?> deleteEvent(@PathVariable Long eventId) {
        eventService.deleteById(eventId);
        return ResponseEntity.ok(new ApiResponse(true, "Event deleted successfully"));
    }

    @GetMapping
    public List<Event> getAllEvents() {
        return eventService.findAll();
    }
}