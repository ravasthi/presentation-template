/*------------------------------------------------------------------------------
| login.js
| application name v1.0
| Author(s): Richa Avasthi
| Created: 2012-02-09
|
| Utilities for the login page.
------------------------------------------------------------------------------*/

// Establish namespace. Change to match the name of your application.
var EffectivePresentations = window.EffectivePresentations ? window.EffectivePresentations : {};

EffectivePresentations.login = {
    init: function() {
        $("input[placeholder]").forminputplaceholdertextwidget();
    }
};

(function($) {
    $(function() {
        EffectivePresentations.login.init();
    });
})(jQuery);
