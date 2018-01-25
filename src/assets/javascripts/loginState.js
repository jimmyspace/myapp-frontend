export const userName = function() {
  let user = {};
  let cookies = {};
  let all = document.cookie;
  let list = all.split("; ");
  list.forEach(function(item) {
    let cookieItem = item;
    let p = cookieItem.indexOf("=");
    let name = cookieItem.substring(0, p);
    let value = cookieItem.substring(p + 1);
    value = decodeURIComponent(value);
    cookies[name] = value;
  })
  return cookies[user]
}
