package com.scalesec.vulnado;

import org.springframework.web.bind.annotation.*;
import org.springframework.boot.autoconfigure.*;

@RestController
@EnableAutoConfiguration
public class CowController {
    @RequestMapping(value = "/cowsay")
    String cowsay(@RequestParam(defaultValue = "I love Linux!") String input) {
        // Sanitize user input to prevent XSS
        String sanitizedInput = sanitizeInput(input);

        // Prevent command injection by not directly passing user input to external commands
        String result = Cowsay.run(sanitizedInput);

        return result;
    }

    private String sanitizeInput(String input) {
        // Implement proper input validation and sanitization to prevent XSS
        // For simplicity, this example uses a basic HTML escaping method
        return escapeHtml(input);
    }

    private String escapeHtml(String input) {
        // Replace characters that have special meaning in HTML with their corresponding entities
        return input
            .replace("&", "&amp;")
            .replace("<", "&lt;")
            .replace(">", "&gt;")
            .replace("\"", "&quot;")
            .replace("'", "&#39;");
    }
}
