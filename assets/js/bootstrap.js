// bootstrap.js
(function() {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
    script.onload = function() {
        console.log("Bootstrap JS loaded successfully!");
        // Place additional code that depends on Bootstrap here
    };
    document.head.appendChild(script);
})();
