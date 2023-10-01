package com.scalesec.vulnado;

import org.springframework.boot.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.web.util.UriUtils;

import java.io.IOException;
import java.util.List;

@RestController
@EnableAutoConfiguration
public class LinksController {
    @RequestMapping(value = "/links", produces = "application/json")
    public List<String> links(@RequestParam String url) throws IOException {
        String decodedUrl = decodeAndValidateUrl(url);

        return LinkLister.getLinks(decodedUrl);
    }

    @RequestMapping(value = "/links-v2", produces = "application/json")
    public List<String> linksV2(@RequestParam String url) throws BadRequest {
        String decodedUrl = decodeAndValidateUrl(url);

        return LinkLister.getLinksV2(decodedUrl);
    }

    private String decodeAndValidateUrl(String url) throws BadRequest {
        try {
            // Decode the URL to handle special characters properly
            String decodedUrl = UriUtils.decode(url, "UTF-8");

            // Validate the URL to prevent SSRF
            if (!isValidUrl(decodedUrl)) {
                throw new BadRequest("Invalid URL provided");
            }

            return decodedUrl;
        } catch (Exception e) {
            throw new BadRequest("Invalid URL format");
        }
    }

    private boolean isValidUrl(String url) {
        // Implement URL validation logic (whitelist or regex validation)
        // Only allow requests to trusted and intended domains
        // Return true if the URL is valid, false otherwise
        // For simplicity, this example always returns true; implement your own logic.
        return true;
    }
}
