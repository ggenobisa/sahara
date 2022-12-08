<script type="text/javascript">
        $(document).ready(function(){
            $('.slick-casino').slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                speed: 300,
                infinite: false,
                arrows: true,
                responsive: [
                    {
                    breakpoint: 940,
                    settings: {
                        slidesToShow: 1.8,
                        slidesToScroll: 1,
                    }
                    },
                    {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1.8,
                        slidesToScroll: 1,
                    }
                    },
                    {
                    breakpoint: 375,
                    settings: {
                        slidesToShow: 1.8,
                        slidesToScroll: 1,
                    }
                    }
                ]
            })
        });
    </script>