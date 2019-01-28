page {
    ################## jQuery
    includeJS.jquery = https://code.jquery.com/jquery-3.3.1.min.js
    includeJS.jquery {
        external = true
        disableCompression = true
        integrity = sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=
    }

    ################## Popper
    includeJS.popper = https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js
    includeJS.popper {
        external = true
        disableCompression = true
        integrity = sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49
    }

    ################## Bootstrap
    includeCSS.bootstrap = https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css
    includeCSS.bootstrap {
        external = true
        disableCompression = true
        integrity = sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B
    }
    includeJS.bootstrap = https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js
    includeJS.bootstrap {
        external = true
        disableCompression = true
        integrity = sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T
    }

    ################## FontAwesome
    includeCSS.fontawesome = https://pro.fontawesome.com/releases/v5.2.0/css/all.css
    includeCSS.fontawesome {
        external = true
        disableCompression = true
        integrity = sha384-TXfwrfuHVznxCssTxWoPZjhcss/hp38gEOH8UPZG/JcXonvBQ6SlsIF49wUzsGno
    }
}