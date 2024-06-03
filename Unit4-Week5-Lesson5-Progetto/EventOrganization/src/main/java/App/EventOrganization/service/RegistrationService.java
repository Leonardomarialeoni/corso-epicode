package App.EventOrganization.service;

import App.EventOrganization.Enum.UserRole;
import App.EventOrganization.exception.AuthenticationException;
import App.EventOrganization.exception.RegistrationException;
import org.springframework.security.core.userdetails.User;

import java.util.HashMap;
import java.util.Map;

public class RegistrationService {
    private Map<String, User> users;

    public RegistrationService() {
        this.users = new HashMap<>();
    }

    public void registerUser(String username, String password, UserRole role) throws RegistrationException {
        if (users.containsKey(username)) {
            throw new RegistrationException("Username already exists");
        }

        User newUser = new User(username, password, role);
        users.put(username, newUser);
    }

    public User login(String username, String password) throws AuthenticationException {
        User user = users.get(username);
        if (user == null || !user.getPassword().equals(password)) {
            throw new AuthenticationException("Invalid username or password");
        }
        return user;
    }
}