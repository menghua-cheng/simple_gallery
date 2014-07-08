function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	  });

  var parts = window.location.href.replace(/&amp;+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	  });

  return vars;
}

function getPage() {
  return (getUrlVars['page']) || 0;
}

function getNumofImages() {
  Object.keys=Object.keys||function(o,k,r){r=[];for(k in o)r.hasOwnProperty.call(o,k)&&r.push(k);return r};
  return Object.keys(image_list_json).length;
}

function configMaxBase() {
  return Math.round(getNumofImages()/16);
}

function getUrlWidth() {
  return parseInt(getUrlVars()['width'] || 0);
}

function getUrlHeight() {
  return parseInt(getUrlVars()['height'] || 0);
}

function getUrlImageBase() {
  return getUrlVars()['image'];
}

function getUrlMaxi() {
  return parseInt(getUrlVars()['maxi'] || 0);
}

function getUrlMaxj() {
  return parseInt(getUrlVars()['maxj'] || 0);
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
  Object.keys=Object.keys||function(o,k,r){r=[];for(k in o)r.hasOwnProperty.call(o,k)&&r.push(k);return r};
  return "../"+(Object.keys(image_list_json)[idx]);
}

function get_iframe_from_config(idx) {
  var iframe_url = './iframe.html';
  Object.keys=Object.keys||function(o,k,r){r=[];for(k in o)r.hasOwnProperty.call(o,k)&&r.push(k);return r};
  var json_key = Object.keys(image_list_json)[idx];

  iframe_url += "?image=../"+json_key;
  iframe_url += "&width="+((image_list_json[json_key][0].split('x'))[0]);
  iframe_url += "&height="+((image_list_json[json_key][0].split('x'))[1]);
  iframe_url += "&maxi="+((image_list_json[json_key][1].split('x'))[0]);
  iframe_url += "&maxj="+((image_list_json[json_key][1].split('x'))[1]);

  return iframe_url;
}
