const books = [
  {
    name: "Harry Potter and The Philosopher's Stone",
    id: 2,
    author: "J. k. Rowling",
    rating: 4.9,
    description: `Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry.

    After a lifetime of bottling up his magical powers, Harry finally feels like a normal kid. But even within the Wizarding community, he is special. He is the boy who lived: the only person to have ever survived a killing curse inflicted by the evil Lord Voldemort, who launched a brutal takeover of the Wizarding world, only to vanish after failing to kill Harry.
    
    Though Harry's first year at Hogwarts is the best of his life, not everything is perfect. There is a dangerous secret object hidden within the castle walls, and Harry believes it's his responsibility to prevent it from falling into evil hands. But doing so will bring him into contact with forces more terrifying than he ever could have imagined.
    
    Full of sympathetic characters, wildly imaginative situations, and countless exciting details, the first installment in the series assembles an unforgettable magical world and sets the stage for many high-stakes adventures to come.`,
    genre: "Thriller",
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SY475_.jpg",
    status: "allList",
  },
  {
    name: "Harry Potter and The Chamber of Secret",
    id: 1,
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474169725l/15881._SY475_.jpg",
    author: "J. k. Rowling",
    rating: 4.9,
    description: `Ever since Harry Potter had come home for the summer, the Dursleys had been so mean and hideous that all Harry wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he’s packing his bags, Harry receives a warning from a strange impish creature who says that if Harry returns to Hogwarts, disaster will strike.

    And strike it does. For in Harry’s second year at Hogwarts, fresh torments and horrors arise, including an outrageously stuck-up new professor and a spirit who haunts the girls’ bathroom. But then the real trouble begins – someone is turning Hogwarts students to stone. Could it be Draco Malfoy, a more poisonous rival than ever? Could it possible be Hagrid, whose mysterious past is finally told? Or could it be the one everyone at Hogwarts most suspects… Harry Potter himself! `,
    genre: "Thriller",
    status: "allList",
  },
  {
    name: "Harry Potter and The Prisoner of Azkaban",
    id: 3,
    author: "J. k. Rowling",
    rating: 4.9,
    description: `For twelve long years, the dread fortress of Azkaban held an infamous prisoner named Sirius Black. Convicted of killing thirteen people with a single curse, he was said to be the heir apparent to the Dark Lord, Voldemort.

    Now he has escaped, leaving only two clues as to where he might be headed: Harry Potter's defeat of You-Know-Who was Black's downfall as well. And the Azkaban guards heard Black muttering in his sleep, "He's at Hogwarts . . . he's at Hogwarts."
    
    Harry Potter isn't safe, not even within the walls of his magical school, surrounded by his friends. Because on top of it all, there may well be a traitor in their midst.`,
    genre: "Thriller",
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1499277281l/5.jpg",
    status: "allList",
  },
  {
    name: "Are you afraid of the Dark",
    id: 15,
    author: "Sydney Sheldon",
    rating: 4,
    genre: "Thriller",
    description: `The new novel that Sidney Sheldon's millions of fans all over the world have been waiting for. And, like his seventeen previous books, it is destined for a top place on bestseller lists everywhere.

  In New York, Denver, Paris and Berlin, four people have died separately in apparent accidents. Two women -- the widows of two of the dead -- find themselves under ruthless attack and are drawn together in fear, confusion and for mutual protection. But are they being targeted because one of them is the prosecution witness at a famous criminal trial? Or is there a connection to the mystery behind their husband's deaths? Meanwhile, Tanner Kingsley,
  
  Chief Executive of an international Think Tank created only seven years ago, is on the cusp of an amazing discovery which could alter the future of the world. If properly handled, the outcome of this could deliver unbelievable power into the company's hands. But are the mysterious deaths connected to this volatile secret? And can it be further protected?
  
  Thrown together, the women could not be more different: Diane Stevens is a well-connected, affluent artist from the Upper East Side. Philadelphia neighbourhood with a new 'uncle' every month, believed she had at last found safety and contentment in Paris, married to a brilliant scientist.
  
  Taut with suspense and vivid characterization, and with an unnervingly realistic premise that could alter our lives, ARE YOU AFRAID OF THE DARK is Sheldon at the top of his form.`,
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388485229l/43324.jpg",
    status: "allList",
  },
  {
    name: "Mistress Of The Game",
    id: 17,
    author: "Sydney Sheldon",
    rating: 4,
    genre: "Thriller",
    description:
      "<p>The new novel that Sidney Sheldon's millions of fans all over the world have been waiting for. And, like his seventeen previous books, it is destined for a top place on bestseller lists everywhere. In New York, Denver, Paris and Berlin, four people have died separately in apparent accidents. </p> <p> Two women -- the widows of two of the dead -- find themselves under ruthless attack and are drawn together in fear, confusion and for mutual protection. But are they being targeted because one of them is the prosecution witness at a famous criminal trial? Or is there a connection to the mystery behind their husband's deaths? </p> <br /> Meanwhile, Tanner Kingsley,Chief Executive of an international Think Tank created only seven years ago, is on the cusp of an amazing discovery which could alter the future of the world. If properly handled, the outcome of this could deliver unbelievable power into the company's hands. But are the mysterious deaths connected to this volatile secret? And can it be further protected? <br /> Thrown together, the women could not be more different: Diane Stevens is a well-connected, affluent artist from the Upper East Side. Philadelphia neighbourhood with a new 'uncle' every month, believed she had at last found safety and contentment in Paris, married to a brilliant scientist. <br /> Taut with suspense and vivid characterization, and with an unnervingly realistic premise that could alter our lives, ARE YOU AFRAID OF THE DARK is Sheldon at the top of his form.",
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347894437l/6578830.jpg",
    status: "allList",
  },
  {
    name: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    id: 27,
    rating: 5,
    description: `A nineteenth-century boy from a Mississippi River town recounts his adventures as he travels down the river with a runaway slave, encountering a family involved in a feud, two scoundrels pretending to be royalty, and Tom Sawyer's aunt who mistakes him for Tom`,
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546096879l/2956.jpg",
    genre: "Adventure",
    status: "allList",
  },
];

export default books;
