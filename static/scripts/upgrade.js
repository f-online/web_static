function getUrlVars() {
  const vars = {};
  const parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
    vars[key] = value;
  });
  return vars;
}

function getUrlParam(parameter, defaultvalue) {
  let urlparameter = defaultvalue;
  if (window.location.href.indexOf(parameter) > -1) {
    urlparameter = getUrlVars()[parameter];
  }
  return urlparameter;
}

function emailGiven(email) {
  document.getElementById('email-provided').style.display = 'block';
  document.getElementById('no-email-provided').style.display = 'none';

  emailFields = document.getElementsByClassName('email');
  for (let i = 0; i < emailFields.length; i++) {
    emailFields[i].innerHTML = account;
  }
}

function paymentDone(details) {
  document.getElementById('email-provided').style.display = 'none';
  document.getElementById('no-email-provided').style.display = 'none';
  document.getElementById('payment-done').style.display = 'block';
  document.getElementById('paypal-button-container').style.display = 'none';
  const _paq = window._paq || [];
  _paq.push(['trackEvent', 'upgrade', 'paid']);
}

var account = getUrlParam('account');

if (account) {
  emailGiven(account);

  paypal.Buttons({
    createOrder(data, actions) {
      return actions.order.create({
        payer: {
          email_address: account,
          address: {
            country_code: 'AT',
          },
        },
        application_context: {
          brand_name: 'F-Online',
          locale: 'de-AT',
          shipping_preference: 'NO_SHIPPING',

        },
        purchase_units: [{
          reference_id: `werbefrei-${account}`,
          description: `Werbefrei F-Online ${account}`,
          soft_descriptor: 'werbefrei',
          amount: {
            currency_code: 'EUR',
            value: '4.99',
          },
        }],
      });
    },
    onApprove(data, actions) {
      return actions.order.capture().then((details) => {
        paymentDone(details);
      });
    },
  }).render('#paypal-button-container');
}
