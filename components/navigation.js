Vue.component('safoja-navigation', {
    template: `
    <div style="margin-bottom: 5rem;">

        <nav class="navbar fixed-top navbar-expand-lg navbar-dark purple scrolling-navbar ">
            <a class="navbar-brand" href="#"><strong>Safoja</strong></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="prices.html">Products</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="contacts.html">Contact Us<span class="sr-only">(current)</span></a>
                    </li>
                </ul>

                <ul class="navbar-nav nav-flex-icons">

                    <!-- <li class="nav-item">
                            <a class="nav-link" href="https://www.instagram.com/magnet_butterflies/"><i
                                    class="fab fa-instagram"></i></a>
                        </li> -->


                    <!-- facebook long link -->
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.facebook.com/safoja.butterflies.5">
                            <i class="fab fa-facebook-f"></i> Facebook
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <!-- facebook long link -->


                    <!-- instagram link -->
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.instagram.com/magnet.butterflies/">
                            <i class="fab fa-instagram"></i> Instagram</a>
                    </li>
                    <!-- instagram long link -->

                </ul>

            </div>
        </nav>

    </div>`
})