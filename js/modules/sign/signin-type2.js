"use strict";
(function(){
    angular.module('blankonApp.account.signin.type2', [])

        .controller('SigninCtrl', function(settings) {
            // =========================================================================
            // FORM VALIDATION
            // =========================================================================
            // Just demo form validation on desktop view width screen large then 1024px, not available on tablet and mobile view.
            if($('.sign-in').length && $(window).width() >= 1024){

                $('.sign-in').validate(
                    {
                        invalidHandler:
                            function() {
                                // Add effect animation css
                                $('#sign-wrapper').addClass('animated shake');
                                setTimeout(function(){$('#sign-wrapper').removeClass('animated shake')}, 1500);

                                // Add effect sound
                                if($('.page-sound').length){
                                    ion.sound.play("light_bulb_breaking");
                                }
                            },
                        rules:{
                            username: {
                                required: true
                            },
                            password: {
                                required: true
                            }
                        },
                        messages: {
                            username: {
                                required: "Please provide a username or email"
                            },
                            password: {
                                required: "Please provide a password"
                            }
                        },
                        highlight:function(element) {
                            $(element).parents('.form-group').addClass('has-error has-feedback');
                        },
                        unhighlight: function(element) {
                            $(element).parents('.form-group').removeClass('has-error');
                        },
                        submitHandler: function(form){
                            var btn = $('#login-btn');
                            btn.html('Checking ...');
                            // Add sounds
                            if($('.page-sound').length){
                                ion.sound.play("cd_tray");
                            }
                            btn.attr('disabled', 'disabled');
                            setTimeout(function() {
                                btn.text('Welcome MR AWESOME !');
                            }, 2000);
                            btn.removeAttr('disabled');
                            setTimeout(function () {
                                form.submit();
                                window.location = settings.baseURL+'/index.html#/dashboard';
                            }, 2500);
                        }
                    }
                );
            }

            // =========================================================================
            // SETTING HEIGHT
            // =========================================================================
            $('#sign-wrapper').css('min-height',$(window).outerHeight());

            // =========================================================================
            // INPUT SOUNDS
            // =========================================================================
            // Add sounds
            if($('.page-sound').length){
                $('input').on('input', function(){
                    ion.sound.play("tap");
                });
                $('input[type=checkbox]').on('click', function(){
                    ion.sound.play("button_tiny");
                });
            }

            // =========================================================================
            // BACKSTRETCH
            // =========================================================================
            // Duration is the amount of time in between slides,
            // and fade is value that determines how quickly the next image will fade in
            $.backstretch([
                'http://localhost/blankon-angularjs/img/bg/1.jpeg',
                'http://localhost/blankon-angularjs/img/bg/2.jpeg'
            ], {duration: 5000, fade: 750});

        })

})();