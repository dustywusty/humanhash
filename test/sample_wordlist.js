const SAMPLE_WORDLIST = [
  "zero", "one", "two", "three", "four", "five", "six",
  "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen",
  "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty",
  "twentyone", "twentytwo", "twentythree", "twentyfour", "twentyfive",
  "twentysix", "twentyseven", "twentyeight", "twentynine", "thirty",
  "thirtyone", "thirtytwo", "thirtythree", "thirtyfour", "thirtyfive",
  "thirtysix", "thirtyseven", "thirtyeight", "thirtynine", "forty",
  "fortyone", "fortytwo", "fortythree", "fortyfour", "fortyfive",
  "fortysix", "fortyseven", "fortyeight", "fortynine", "fifty", "fiftyone",
  "fiftytwo", "fiftythree", "fiftyfour", "fiftyfive", "fiftysix",
  "fiftyseven", "fiftyeight", "fiftynine", "sixty", "sixtyone", "sixtytwo",
  "sixtythree", "sixtyfour", "sixtyfive", "sixtysix", "sixtyseven",
  "sixtyeight", "sixtynine", "seventy", "seventyone", "seventytwo",
  "seventythree", "seventyfour", "seventyfive", "seventysix",
  "seventyseven", "seventyeight", "seventynine", "eighty", "eightyone",
  "eightytwo", "eightythree", "eightyfour", "eightyfive", "eightysix",
  "eightyseven", "eightyeight", "eightynine", "ninety", "ninetyone",
  "ninetytwo", "ninetythree", "ninetyfour", "ninetyfive", "ninetysix",
  "ninetyseven", "ninetyeight", "ninetynine", "onehundred",
  "onehundredandone", "onehundredandtwo", "onehundredandthree",
  "onehundredandfour", "onehundredandfive", "onehundredandsix",
  "onehundredandseven", "onehundredandeight", "onehundredandnine",
  "onehundredandten", "onehundredandeleven", "onehundredandtwelve",
  "onehundredandthirteen", "onehundredandfourteen",
  "onehundredandfifteen", "onehundredandsixteen",
  "onehundredandseventeen", "onehundredandeighteen",
  "onehundredandnineteen", "onehundredandtwenty",
  "onehundredandtwentyone", "onehundredandtwentytwo",
  "onehundredandtwentythree", "onehundredandtwentyfour",
  "onehundredandtwentyfive", "onehundredandtwentysix",
  "onehundredandtwentyseven", "onehundredandtwentyeight",
  "onehundredandtwentynine", "onehundredandthirty",
  "onehundredandthirtyone", "onehundredandthirtytwo",
  "onehundredandthirtythree", "onehundredandthirtyfour",
  "onehundredandthirtyfive", "onehundredandthirtysix",
  "onehundredandthirtyseven", "onehundredandthirtyeight",
  "onehundredandthirtynine", "onehundredandforty",
  "onehundredandfortyone", "onehundredandfortytwo",
  "onehundredandfortythree", "onehundredandfortyfour",
  "onehundredandfortyfive", "onehundredandfortysix",
  "onehundredandfortyseven", "onehundredandfortyeight",
  "onehundredandfortynine", "onehundredandfifty",
  "onehundredandfiftyone", "onehundredandfiftytwo",
  "onehundredandfiftythree", "onehundredandfiftyfour",
  "onehundredandfiftyfive", "onehundredandfiftysix",
  "onehundredandfiftyseven", "onehundredandfiftyeight",
  "onehundredandfiftynine", "onehundredandsixty",
  "onehundredandsixtyone", "onehundredandsixtytwo",
  "onehundredandsixtythree", "onehundredandsixtyfour",
  "onehundredandsixtyfive", "onehundredandsixtysix",
  "onehundredandsixtyseven", "onehundredandsixtyeight",
  "onehundredandsixtynine", "onehundredandseventy",
  "onehundredandseventyone", "onehundredandseventytwo",
  "onehundredandseventythree", "onehundredandseventyfour",
  "onehundredandseventyfive", "onehundredandseventysix",
  "onehundredandseventyseven", "onehundredandseventyeight",
  "onehundredandseventynine", "onehundredandeighty",
  "onehundredandeightyone", "onehundredandeightytwo",
  "onehundredandeightythree", "onehundredandeightyfour",
  "onehundredandeightyfive", "onehundredandeightysix",
  "onehundredandeightyseven", "onehundredandeightyeight",
  "onehundredandeightynine", "onehundredandninety",
  "onehundredandninetyone", "onehundredandninetytwo",
  "onehundredandninetythree", "onehundredandninetyfour",
  "onehundredandninetyfive", "onehundredandninetysix",
  "onehundredandninetyseven", "onehundredandninetyeight",
  "onehundredandninetynine", "twohundred", "twohundredandone",
  "twohundredandtwo", "twohundredandthree", "twohundredandfour",
  "twohundredandfive", "twohundredandsix", "twohundredandseven",
  "twohundredandeight", "twohundredandnine", "twohundredandten",
  "twohundredandeleven", "twohundredandtwelve",
  "twohundredandthirteen", "twohundredandfourteen",
  "twohundredandfifteen", "twohundredandsixteen",
  "twohundredandseventeen", "twohundredandeighteen",
  "twohundredandnineteen", "twohundredandtwenty",
  "twohundredandtwentyone", "twohundredandtwentytwo",
  "twohundredandtwentythree", "twohundredandtwentyfour",
  "twohundredandtwentyfive", "twohundredandtwentysix",
  "twohundredandtwentyseven", "twohundredandtwentyeight",
  "twohundredandtwentynine", "twohundredandthirty",
  "twohundredandthirtyone", "twohundredandthirtytwo",
  "twohundredandthirtythree", "twohundredandthirtyfour",
  "twohundredandthirtyfive", "twohundredandthirtysix",
  "twohundredandthirtyseven", "twohundredandthirtyeight",
  "twohundredandthirtynine", "twohundredandforty",
  "twohundredandfortyone", "twohundredandfortytwo",
  "twohundredandfortythree", "twohundredandfortyfour",
  "twohundredandfortyfive", "twohundredandfortysix",
  "twohundredandfortyseven", "twohundredandfortyeight",
  "twohundredandfortynine", "twohundredandfifty",
  "twohundredandfiftyone", "twohundredandfiftytwo",
  "twohundredandfiftythree", "twohundredandfiftyfour",
  "twohundredandfiftyfive"
];

module.exports = SAMPLE_WORDLIST;