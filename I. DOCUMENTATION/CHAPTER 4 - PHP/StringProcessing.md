# FUNCTION FOR STRING PROCESSING

# I. Rules of string processing:
(1) Process " or ' that the website/program can print the string without connecting strings.
(2) With the string between "/'. For printing string include character "/', you need to add character \ before it.
For examples
```PHP
echo "He said \"Hello\"";
echo 'She said \'Hello. How are you?\'';
```

# II. Usual functions in string processing:
## 1. addcslashes($string, $char_list)
⇒ Add \ before string in $char_list

Examples:
```PHP
  echo addcslashes("Le Nguyen Minh Tam", "e");
  // L\e Nguy\en Minh Tam
  echo addcslashes("Le Nguyen Minh Tam", "a..z");
  // L\e N\g\u\y\e\n M\i\n\h T\a\m
```
## 2. addslashes($string)
⇒ Add \ before characters: ', "", \ in $string (if exist)
Example:
```PHP
  echo addcslashes("Le Nguyen Minh Tam", "e");
  // L\e Nguy\en Minh Tam
```

## 3. bin2hex($str)
⇒ Convert string to ACII HEX code
Example:
```PHP
echo bin2hex("Le Nguyen Minh Tam");
// 4c65204e677579656e204d696e682054616d
```

## 4. chop($string, $charList)
⇒ Delete the ending character if it's similar to $charList
Example:
```PHP
echo chop("Le Nguyen Minh Tam", "Tam");
// Le Nguyen Minh
```

## 5. crc32($string) 
⇒ Convert a string to integer number
Example:
```PHP
echo crc32("Le Nguyen Minh Tam");
// 1586453036
```

## 6. explode($seperator, $string, $limit)
⇒ Seperate string to multiple child string by character $seperator with maximun $limit (optional) element.
Example:
```PHP
echo explode("e", "Le Nguyen Minh Tam");
// array(3) { [0]=> string(1) "L" [1]=> string(5) " Nguy" [2]=> string(10) "n Minh Tam" }

echo explode("e", "Le Nguyen Minh Tam", 2);
// array(2) { [0]=> string(1) "L" [1]=> string(16) " Nguyen Minh Tam" }
```

## 7. implode($seperator, $array)
⇒ Connect all the string of $array with the character $seperator
Examples:
```PHP
$data = array ("Le", "Nguyen", "Minh", "Tam");

echo implode($data);
// LeNguyenMinhTam

echo implode(" ", $data);
// Le Nguyen Minh Tam
```

## 8. strlen($string)
⇒ Get the length of $string

## 9. str_word_count($string)
⇒  Count number of word in $string
Examples:
```PHP
echo str_word_count("Le Nguyen Minh Tam");
// 4

echo str_word_count("www.google.com");
// 3
```

## 10. str_repeat($string, $repeat)
⇒ Repeat the $string with number of $repear times
Example:
```PHP
echo str_repeat("Le Nguyen Minh Tam", 5);
// Le Nguyen Minh TamLe Nguyen Minh TamLe Nguyen Minh TamLe Nguyen Minh TamLe Nguyen Minh Tam
```

## 11. str_replace($find, $replace, $string)
⇒ Find the string $find and replace it by $replace in $string
Example:
```PHP
echo str_replace('Nguyene', 'Nguyen', 'Le Nguyene Minh Tam');
// Le Nguyen Minh Tam
```

## 12. md5($string)
⇒ Convert string into md5 type.
Example:
```PHP
echo md5("Le Nguyen Minh Tam");
// cca03256e955ba269d8fade80c61cbe9
```

## 13. sha1($string)
⇒ Convert string into sha1.
Example:
```PHP
echo md5("Le Nguyen Minh Tam");
// 544533a3d0d9ae7540dab36458a09bd8a2a1254f
```

## 14. htmlentities($string), htmlspecialchars($string)
⇒ Convert $string to raw data
Example: `updating`

## 15. strip_tags($string, $allow)
⇒ Remove all the HTML tags in $string excepts $allow
Examples:
```PHP
echo strip_tags("<b>Le Nguyen Minh Tam</b>");
// Le Nguyen Minh Tam

echo strip_tags("<b>Le Nguyen Minh Tam</b>", "<br>");
// <b>Le Nguyen Minh Tam</b>
```

## 16. substr($string, $start_pos, $length)
⇒ Cut the string with the start position $start_pos and the number of characters is $length.
```PHP
echo substr("Hello world", 10) . "<br>"; //d
echo substr("Hello world", -1) . "<br>"; //d
echo substr("Hello world", 0, 10) . "<br>"; //Hello worl
echo substr("Hello world", 0, -1) . "<br>"; //Hello worl
```

## 17. strolower($string)
⇒ Convert all the string characters to uppercase
```PHP
echo strtolower("LE NGUYEN MINH TAM");
// le nguyen minh tam
```

## 18. strtoupper
⇒ Convert all the string characters to lowercase
```PHP
echo strtoupper("le nguyen minh tam");
// Le Nguyen Minh Tam
```

## 19. ucword($string)
⇒ 

## 20. ucfirst($string)
⇒ 

## 21. trim($string, $charList)
⇒ 

## 22. ltrim($string, $charList)
⇒ 

## 23. rtrim($string, $charList)
⇒ 
