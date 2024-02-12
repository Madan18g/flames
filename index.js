function calculateRelationship() {
  var name1 = document.getElementById('name1').value.toLowerCase();
  var name2 = document.getElementById('name2').value.toLowerCase();
  
  var count = 0;
  
  // Remove spaces from names
  name1 = name1.replace(/\s/g, '');
  name2 = name2.replace(/\s/g, '');
  
  // Calculate remaining letters
  for (var i = 0; i < name1.length; i++) {
    if (name2.includes(name1[i])) {
      name2 = name2.replace(name1[i], '');
      count++;
    }
  }
  
  var relationship = '';
  
  // Determine relationship based on remaining letters
  var totalLength = name1.length + name2.length;
  var remainingLetters = totalLength - (2 * count);
  
  switch (remainingLetters % 6) {
    case 1:
      relationship = 'Friends ❤️'; // Heart emoji for Friends
      break;
    case 2:
      relationship = 'Lovers 💑'; // Couple with heart emoji for Lovers
      break;
    case 3:
      relationship = 'Affectionate 😊'; // Smiling face emoji for Affectionate
      break;
    case 4:
      relationship = 'Marriage 💍'; // Ring emoji for Marriage
      break;
    case 5:
      relationship = 'Enemies 😡'; // Angry face emoji for Enemies
      break;
    case 0:
      relationship = 'Siblings 😢'; // Sad face emoji for Siblings
      break;
    default:
      relationship = 'Unknown';
  }
  
  document.getElementById('result').innerHTML = 'Relation: ' + relationship;
}
