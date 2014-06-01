function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
	  vars[key] = value;
	  });
  return vars;
}

// ----------------------------------------------------- //

function iframe_content_html() {
  var iframe_html = "<iframe src='function/index.html?page="+(getUrlVars()['page'])+"' width='100%' height='100%' bgcolor='black' frameborder='0'></iframe>";
  return iframe_html;
}

function preva_href_url() {
  var page_num = 0;
  if(getUrlVars()['page'])
	page_num = parseInt(getUrlVars()['page']);

  page_num = page_num - 1;
  if(page_num <= 0)
	page_num = 0;

  var href_url = 'function/index.html?page='+(page_num);
  return href_url;
}

function nexta_href_url() {
  var page_num = 0;
  if(getUrlVars()['page'])
	page_num = parseInt(getUrlVars()['page']);

  page_num = page_num + 1;
  if(page_num <= 0)
	page_num = 0;
  var href_url = 'function/index.html?page='+(page_num);

  return href_url;
}
