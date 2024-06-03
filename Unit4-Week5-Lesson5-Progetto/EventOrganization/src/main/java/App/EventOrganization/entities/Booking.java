package App.EventOrganization.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private Event event;


    public Booking() {}

    public Booking(User user, Event event) {
        this.user = user;
        this.event = event;
    }
}