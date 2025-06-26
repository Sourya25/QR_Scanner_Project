function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 0); 
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {
    // Function to check if a string is a valid URL
    function isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;  
        }
    }
    // If a QR code is found
    function onScanSuccess(decodeText, decodeResult) {
        alert("Your QR code is: " + decodeText );

        if (isValidUrl(decodeText)) {
            // Redirect to the URL
            window.location.href = decodeText;
        }
    }

    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbos: 250 }
    );
    htmlscanner.render(onScanSuccess, onScanError);
    function onScanError(errorMessage) {
        // handle scan error
        console.error(`QR Code scan error: ${ERROR}`);
    }
})
