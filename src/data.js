const books = [
  {
    "id": "TheGreatGatsby",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "price": 499,
    "description": ["Set in the Roaring Twenties, the novel explores themes of decadence, idealism, and excess.",
      "Follows the enigmatic Jay Gatsby and his quest to win back his former lover, Daisy Buchanan.",
      "Backdrop includes  extravagant parties and moral decay.",
      "Examines resistance to change and social upheaval."],
    "image": "https://cdn.kobo.com/book-images/f980a412-6e90-4c0f-a495-9ef455e0edcb/1200/1200/False/the-great-gatsby-illustrated-2.jpg",
    "rating": 4.4,
    "publishDate": "1925-04-10"
  },
  {
    "id": "ToKillaMockingbird",
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "price": 560,
    "description": [
      "Set in the American South during the 1930s, dealing with racial injustice and moral growth.",
      "Narrated through the eyes of Scout Finch, a young girl.",
      "Focuses on her father, Atticus Finch, defending a black man falsely accused of raping a white woman.",
      "Explores human behavior and social justice."
  ],
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHqnBV0H3l9Rxlbxu1iduxpkch2ziofHh2og&s",
    "rating": 4.8,
    "publishDate": "1960-07-11"
  },
  {
    "id": "1984",
    "title": "1984",
    "author": "George Orwell",
    "price": 760,
    "description": [
      "A dystopian novel that explores the dangers of totalitarianism and extreme political ideology.",
      "Set in a world of perpetual war, government surveillance, and thought control.",
      "Follows Winston Smith's struggle to maintain his individuality and sanity.",
      "Critiques the Party's omnipresent control and Big Brother's influence."
  ],
    "image": "https://m.media-amazon.com/images/I/7180qjGSgDL._AC_UF1000,1000_QL80_.jpg",
    "rating": 4.6,
    "publishDate": "1949-06-08"
  },
  {
    "id": "PrideandPrejudice",
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "price": 655,
    "description":[
      "A classic novel of manners set in early 19th century England.",
      "Deals with marriage, money, and love through the character of Elizabeth Bennet.",
      "Explores her interactions with Mr. Darcy and challenges to social norms.",
      "Highlights themes of independence and wit."
  ],
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTGKD5BPpmqy2B2mqJYlvcrNHVI5XeCMPiw&s",
    "rating": 4.7,
    "publishDate": "1813-01-28"
  },
  {
    "id": "TheCatcherintheRye",
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "price": 820,
    "description":  [
      "A story of teenage rebellion and angst narrated by Holden Caulfield.",
      "Set in New York City, capturing Holden's struggle with loss of innocence and disillusionment.",
      "Explores themes of identity and societal phoniness.",
      "Depicts Holden's quest for personal meaning and sanity."
  ],
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrP9ww00Cevvq6LvOv8H4DwYUFhS6fRZBZRQ&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdy2Nj7ftsKBdnQZsXgapi-qL6NCEaVBYwVQ&s",
    "rating": 4.3,
    "publishDate": "1951-07-16"
  },
  {
    "id": "TheHobbit",
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "price": 480,
    "description":  [
      "A fantasy novel following Bilbo Baggins' adventure to reclaim treasure from the dragon Smaug.",
      "Introduces Middle-earth, filled with elves, dwarves, and mythical creatures.",
      "Explores themes of heroism, courage, and personal growth.",
      "Details Bilbo's journey of self-discovery and bravery."
  ],
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQov_M4ztunQei4FT77_sEMJ76ckG3knZCyrQ&s",
    "rating": 4.9,
    "publishDate": "1937-09-21"
  },

  {
    "id": "WarandPeace",
    "title": "War and Peace",
    "author": "Leo Tolstoy",
    "price": 830,
    "description": [
      "An epic novel set against the backdrop of the Napoleonic Wars in Russia.",
      "Intertwines the lives of several families, exploring themes of power and impact of war.",
      "Combines historical events with detailed character studies and philosophical insights.",
      "Examines the search for meaning and the nature of human experience."
  ],
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADthVq1-j6X3FIhoYj4NM6NB3KU0fC19TPw&s",
    "rating": 4.5,
    "publishDate": "1869-03-04"
  },
  {
    "id": "Catch-22",
    "title": "Catch-22",
    "author": "Joseph Heller",
    "price": 560,
    "description": [
      "A satirical novel set during World War II, focusing on the absurdities of war.",
      "Follows Captain John Yossarian and his squadron members struggling with military bureaucracy.",
      "The term 'Catch-22' symbolizes paradoxical rules trapping soldiers in no-win situations.",
      "Blends dark humor with a critique of military logic and bureaucracy."
  ],
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8mI7961BZ29NEHr4OWlk9spVPiamYPbtTQw&s",
    "rating": 4.5,
    "publishDate": "1961-11-10"
  },

  {
    "id": "BraveNewWorld",
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "price": 590,
    "description": [
      "A dystopian novel exploring the implications of a technologically advanced society.",
      "Set in a future where people are engineered for specific roles and conditioned to accept their place.",
      "Critiques the loss of personal freedom and dehumanizing effects of technological progress.",
      "Examines the impact of consumerism on human values and individuality."
  ],
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfNT2zG1Os9BrNC4sBjn2LrsXfAN6gjYzyKQ&s",
    "rating": 4.4,
    "publishDate": "1932-08-30"
  },
  {
    "id": "JaneEyre",
    "title": "Jane Eyre",
    "author": "Charlotte Brontë",
    "price": 400,
    "description": [
      "Follows the life of Jane Eyre, an orphan who becomes a governess.",
      "Explores her challenges and romantic entanglements with Mr. Rochester.",
      "Highlights her journey of personal growth and struggle for independence.",
      "Depicts themes of morality, resilience, and social criticism."
  ],
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrFyufyFnj8z91FuYucJPQx4bZkIVEfFZs-A&s",
    "rating": 4.6,
    "publishDate": "1847-10-16"
  },
  {
    "id": "TheDaVinciCode",
    "title": "The Da Vinci Code",
    "author": "Dan Brown",
    "price": 550,
    "description": [
      "A mystery thriller following Robert Langdon as he unravels clues related to the Catholic Church.",
      "Combines historical and religious themes with a fast-paced narrative.",
      "Centers on solving a murder mystery and uncovering hidden truths.",
      "Explores the secrets and controversies surrounding religious history."
  ],
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzK_EAJa8DmMbyANRaEeaTLLL85poA4YlvYg&s",
    "rating": 4.2,
    "publishDate": "2003-03-18"
  },
  {
    "id": "TheAlchemist",
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "price": 660,
    "description": [
      "A philosophical novel about a shepherd named Santiago on a quest to find treasure.",
      "Emphasizes the importance of pursuing one's dreams and self-discovery.",
      "Explores themes of destiny, personal legend, and the interconnectedness of life.",
      "Combines mystical elements with a narrative about perseverance and enlightenment."
  ],
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEvW41YzngO_Bk9V8EgbMwZgMmVYQRKF4PQ&s",
    "rating": 4.7,
    "publishDate": "1988-05-01"
  }
]


export default books;
