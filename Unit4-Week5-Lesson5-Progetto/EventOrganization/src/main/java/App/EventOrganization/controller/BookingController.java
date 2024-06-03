package App.EventOrganization.controller;


import App.EventOrganization.payloads.ApiResponse;

import App.EventOrganization.security.JwtTokenProvider;
import App.EventOrganization.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @PostMapping("/book/{eventId}")
    public ResponseEntity<?> bookEvent(@PathVariable Long eventId, @RequestHeader("Authorization") String token) {
        Long userId = tokenProvider.getUserIdFromJWT(token.substring(7)); // Remove "Bearer " from the token string
        boolean bookingSuccessful = bookingService.bookEvent(userId, eventId);
        if (bookingSuccessful) {
            return ResponseEntity.ok(new ApiResponse(true, "Booking successful!"));
        } else {
            return ResponseEntity.badRequest().body(new ApiResponse(false, "Booking failed!"));
        }
    }
}