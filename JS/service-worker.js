self.addEventListener("fetch", (event) => {
    event.respondWith(
        fetch(event.request).then((response) => {
            const newHeaders = new Headers(response.headers);
            newHeaders.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
            return new Response(response.body, { headers: newHeaders });
        })
    );
});
