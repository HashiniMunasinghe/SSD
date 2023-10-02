package com.scalesec.vulnado;

import org.springframework.boot.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
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
            // Use UriComponentsBuilder to parse and build the URI, which is safer
            URI uri = UriComponentsBuilder.fromUriString(url).build().toUri();

            // Validate the URL to prevent SSRF
            if (!isValidUrl(uri)) {
                throw new BadRequest("Invalid URL provided");
            }

            return uri.toString();
        } catch (Exception e) {
            throw new BadRequest("Invalid URL format");
        }
    }

    private boolean isValidUrl(URI uri) {
        try {
            // Check the scheme
            String scheme = uri.getScheme();

            // Allow only http and https schemes
            if ("http".equalsIgnoreCase(scheme) || "https".equalsIgnoreCase(scheme)) {
                // Implement additional checks if needed, such as white-listing certain domains
                return true;
            }

            return false;
        } catch (Exception e) {
            // Handle invalid URL format
            return false;
        }
    }
}
