---
title: "F-Online Werbefrei"
slug: "upgrade"
date: 2019-12-07T19:50:00+01:00
draft: false
---

<script src="https://www.paypal.com/sdk/js?client-id=AZSY91wmLtgontLFAURtcaCKurguU2EpSfTrnazUAS0vvsigH0eOg7Kol6QRwWGuNMX_iKDFLJMLaCUp&currency=EUR">
</script>

<div class="page-information">
  <div class="article">
    <h2>Werbefreie F-Online Version</h2>
    <hr>
    <p>Für nur 4.99 EUR kannst du dein F-Online Lernkonto von der Werbung befreien. Egal ob du am Handy, Tablet oder am Computer lernst, du siehst keine Werbung mehr und unterstützt F-Online mit deinem werbefreien Konto.</p>
    <hr>
    <div id="email-provided"><p>Werbefreies Lernkonto <span class="email">email</span> für 4,99 EUR (inkl. Mwst.)</p></div>
    <div id="payment-done"><p>Vielen Dank! Dein Lernkonto <span class="email">email</span> wird innerhalb weniger Minuten von der Werbung freigeschalten. Zurück zur Lernapp <a href="https://app.f-online.at/#logout">app.f-online.at</a>.</p></div>
    <div id="paypal-button-container"></div>
    <div id="no-email-provided"><p>Um die Werbefreie Version zu kaufen, melde dich bitte zuerst in der App unter <a href="https://app.f-online.at">app.f-online.at</a> an und klicke dann auf den Kaufbutton.</p></div>
    <hr>
    <p><b>30-Tage Geld zurück!</b> Solltest du mit der werbefreien Version nicht zufrieden sein, erhältst du innerhalb 30 Tagen, auch ohne Angabe von Gründen, dein Geld zurück. Sende dazu einfach ein Email an info@f-online.at.</p>
  </div>
</div>


<script>

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

function emailGiven(email) {
    document.getElementById("email-provided").style.display = "block"; 
    document.getElementById("no-email-provided").style.display = "none"; 

    emailFields = document.getElementsByClassName("email");
    for (var i = 0; i < emailFields.length; i++) {
        emailFields[i].innerHTML = account; 
    };  
}

function paymentDone(details) {
    document.getElementById("email-provided").style.display = "none"; 
    document.getElementById("no-email-provided").style.display = "none"; 
    document.getElementById("payment-done").style.display = "block"; 
    document.getElementById("paypal-button-container").style.display = "none"; 
}

var account = getUrlParam('account');

if (account){ 

    emailGiven(account);

    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                payer: {
                    email_address: account,
                    address: {
                        country_code: "AT"
                    }
                },
                application_context: {
                    brand_name: "F-Online",
                    locale: "de-AT",
                    shipping_preference: "NO_SHIPPING",

                },
                purchase_units: [{
                    reference_id: "werbefrei-"+account,
                    description: "Werbefrei F-Online "+account,
                    soft_descriptor: "werbefrei",
                    amount: {
                        currency_code: 'EUR',
                        value: '4.99'
                    }
                }]
            })
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                paymentDone(details);
            });
        }
    }).render('#paypal-button-container');
}
</script>