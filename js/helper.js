function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
	  vars[key] = value;
	  });

  return vars;
}

function getPage() {
  return (getUrlVars['page']) || 0;
}

function getNumofImages() {
  return Object.keys(image_list_json).length;
}

function configMaxBase() {
  return Math.round(getNumofImages()/16);
}

// ----------------------------------------------------- //

function iframe_content_html() {
  var iframe_html = "<iframe src='function/index.html?page="+(getPage())+"' width='100%' height='100%' bgcolor='black' frameborder='0'></iframe>";
  return iframe_html;
}

function preva_href_url() {
  var page_num = 0;
  if(getPage())
	page_num = parseInt(getPage());

  page_num = page_num - 1;

  if(page_num <= 0)
	page_num = 0;
  if(page_num > configMaxBase())
	page_num = configMaxBase();

  var href_url = 'function/index.html?page='+(page_num);
  return href_url;
}

function nexta_href_url() {
  var page_num = 0;
  if(getPage())
	page_num = parseInt(getPage());

  page_num = page_num + 1;

  if(page_num <= 0)
	page_num = 0;
  if(page_num > configMaxBase())
	page_num = configMaxBase();

  var href_url = 'function/index.html?page='+(page_num);

  return href_url;
}

function get_compressed_image_from_config(idx) {
  return "../"+(Object.keys(image_list_json)[idx]);
}
