function generate() {
  var title = document.getElementById('title').value;

  str_to_lower = title.toLowerCase();
  document.getElementById('str_to_lower').value = str_to_lower;

  str_replace1 = str_to_lower.replace(/[.*+\-?^${}()|[\]\\/#:]/g, '');
  str_replace2 = str_replace1.replace(/ /g, "-");
  document.getElementById('str_replace').value = str_replace2;
}

function countChar(val) {
  var char = val.value.length;
  $('#charNum').text(char);
};