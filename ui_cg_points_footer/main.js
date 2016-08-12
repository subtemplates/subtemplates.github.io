var ui_cg_service = window.ui_cg_service || document.getElementById('service');
var ui_cg_fulfillment = window.ui_cg_fulfillment || document.getElementById('fulfillment');
var ui_cg_partner = window.ui_cg_partner || document.getElementById('disclaimer-partner');

[].forEach.call(ui_cg_points_footer, function(footer) {
  if (ui_cg_service) footer.querySelector('.clickgen-footer_service').innerHTML = ui_cg_service.innerHTML;
  if (ui_cg_fulfillment) footer.querySelector('.clickgen-footer_fulfillment').innerHTML = ui_cg_fulfillment.innerHTML;
  if (ui_cg_partner) footer.querySelector('.clickgen-footer_partners').innerHTML = ui_cg_partner.innerHTML;
  if (footer.querySelector('.clickgen-footer_partners').innerHTML === '') footer.querySelector('.clickgen-footer_or').remove();
});