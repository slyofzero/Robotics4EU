$('#register-form').on('submit', function(event) {
    event.preventDefault();
    var data = $(this).serialize();

    //get recaptcha token
    grecaptcha.ready(function() {
        grecaptcha.execute(recaptcha_site_key, {
            action: 'submit'
        }).then(function(token) {
            data = data + '&g-recaptcha-response=' + token;
            jQuery.ajax({
                url: ajaxurl,
                type: "post",
                dataType: "json",
                data: data,
                success: function(response) {

                    if (response.status == 'success') {

                        $('.open-rgpd').removeClass("loading");
                        $('.open-rgpd').addClass("success");

                        $('.warnings__success').html(response.message);
                        $('.warnings__error').hide();
                        $('.warnings__success').show();
                    } else {
                        $('.open-rgpd').removeClass("loading");
                        $('.open-rgpd').removeClass("success");

                        $('.warnings__error').html(response.message);
                        $('.warnings__success').hide();
                        $('.warnings__error').show();
                    }

                }
            });
        });
    });


});

$(".back__action").on('click', function() {
    window.history.back();
});

$('#newsletter-form').on('submit', function(event) {
    event.preventDefault();

    $('.open-rgpd').addClass("loading");
    var data = $(this).serialize();

    //get recaptcha token
    grecaptcha.ready(function() {
        grecaptcha.execute(recaptcha_site_key, {
            action: 'submit'
        }).then(function(token) {
            data = data + '&g-recaptcha-response=' + token;
            jQuery.ajax({
                url: ajaxurl,
                type: "post",
                dataType: "json",
                data: data,
                success: function(response) {

                    if (response.status == 'success') {
                        $('.open-rgpd').removeClass("loading");
                        $('.open-rgpd').addClass("success");

                        $('.warnings__success').html(response.message);
                        $('.warnings__error').hide();
                        $('.warnings__success').show();
                    } else {
                        $('.open-rgpd').removeClass("loading");
                        $('.open-rgpd').removeClass("success");

                        $('.warnings__error').html(response.message);
                        $('.warnings__success').hide();
                        $('.warnings__error').show();
                    }

                }
            });
        });
    });

});

$('#theForm').on('submit', function(event) {
    event.preventDefault();
    var data = $(this).serialize();

    grecaptcha.ready(function() {
        grecaptcha.execute(recaptcha_site_key, {
            action: 'submit'
        }).then(function(token) {
            data = data + '&g-recaptcha-response=' + token;

            jQuery.ajax({
                url: ajaxurl,
                type: "post",
                dataType: "json",
                data: data,
                success: function(response) {

                    $('.final-message').removeClass('show');
                    $('.success-message').addClass('show');

                    $('.return__message').html(response.message);

                }
            });

        });
    });


});