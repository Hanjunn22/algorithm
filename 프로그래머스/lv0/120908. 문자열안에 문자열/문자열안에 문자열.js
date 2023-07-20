function solution(str1, str2) {
  var len1 = str1.length;
  var len2 = str2.length;

  for (var i = 0; i <= len1 - len2; i++) {
    if (str1[i] === str2[0]) {
      var match = true;

      for (var j = 1; j < len2; j++) {
        if (str1[i + j] !== str2[j]) {
          match = false;
          break;
        }
      }

      if (match) {
        return 1;
      }
    }
  }

  return 2;
}
