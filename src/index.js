module.exports = function check(str, bracketsConfig) {
 let length = 0;
 
  while(length != str.length) {
    length = str.length;
    bracketsConfig.forEach(element => {
      str = str.replace(element.join(""), "");
    });
  }

  return str === ""
}
