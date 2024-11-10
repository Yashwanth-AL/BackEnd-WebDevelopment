const emojipedia = [
  {
    id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
  },
  {
    id: 2,
    emoji: "🙏",
    name: "Person With Folded Hands",
    meaning:
      "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
  },
  {
    id: 4,
    emoji: "❤️",
    name: "Red Heart",
    meaning:
      "A classic red heart emoji, used to express love, affection, and positive feelings in general. Often used on social media to show appreciation."
  },
  {
    id: 5,
    emoji: "😎",
    name: "Smiling Face with Sunglasses",
    meaning:
      "I'm cool! A smiley face wearing sunglasses, often used to convey a sense of confidence, calm, and style. Also used in a humorous or ironic sense."
  },
  {
    id: 6,
    emoji: "😢",
    name: "Crying Face",
    meaning:
      "A face with a single tear rolling down. Conveys sadness or regret, often used in moments of genuine sadness or sympathy."
  },
  {
    id: 7,
    emoji: "🎉",
    name: "Party Popper",
    meaning:
      "A party popper, bursting with confetti and streamers. Often used to convey celebration, happiness, or an accomplishment."
  },
  {
    id: 8,
    emoji: "🔥",
    name: "Fire",
    meaning:
      "This is lit! Used to describe something that is amazing, exciting, or energetic. Often used in social media to express approval or excitement."
  },
  {
    id: 9,
    emoji: "✨",
    name: "Sparkles",
    meaning:
      "Shiny stars, often used to indicate something magical or special. Can also represent positivity, cleanliness, and even a sparkle in one’s eye."
  },
  {
    id: 10,
    emoji: "😂",
    name: "Face with Tears of Joy",
    meaning:
      "Something is so funny that it makes you cry! One of the most commonly used emojis, conveying happiness and laughter."
  },
  {
    id: 11,
    emoji: "😴",
    name: "Sleeping Face",
    meaning:
      "A face with closed eyes and mouth, indicating sleep or boredom. Often used to show that something is boring or to say 'good night.'"
  },
  {
    id: 12,
    emoji: "💡",
    name: "Light Bulb",
    meaning:
      "A light bulb, representing an idea, creativity, or intelligence. Used to show that someone has come up with a new idea."
  },
  {
    id: 13,
    emoji: "🤔",
    name: "Thinking Face",
    meaning:
      "A face with a hand on its chin, showing deep thought. Often used to convey thinking or consideration."
  },
  {
    id: 14,
    emoji: "🌟",
    name: "Glowing Star",
    meaning:
      "A bright, shining star, often used to represent positivity, fame, or something magical."
  },
  {
    id: 15,
    emoji: "🎂",
    name: "Birthday Cake",
    meaning:
      "A decorated birthday cake, often used to represent birthdays, celebrations, and special occasions."
  },
  {
    id: 16,
    emoji: "🤯",
    name: "Exploding Head",
    meaning:
      "A face with an exploding head, used to represent shock, amazement, or disbelief."
  },
  {
    id: 17,
    emoji: "💤",
    name: "Sleeping Symbol",
    meaning:
      "A comic book-style symbol of 'zzz,' used to represent sleepiness, tiredness, or boredom."
  },
  {
    id: 18,
    emoji: "🤩",
    name: "Star-Struck",
    meaning:
      "A face with stars in its eyes, showing awe, admiration, or excitement. Often used when something is impressive or amazing."
  },
  {
    id: 19,
    emoji: "😋",
    name: "Face Savoring Food",
    meaning:
      "A face licking its lips, used to represent delicious food or enjoyment of a meal."
  },
  {
    id: 20,
    emoji: "💀",
    name: "Skull",
    meaning:
      "A skull, often used to represent danger, death, or something spooky. Also used humorously to signify something 'killed' or hilarious."
  },
  {
    id: 21,
    emoji: "👀",
    name: "Eyes",
    meaning:
      "A pair of eyes, used to indicate something is interesting or that one is watching something closely. Often used humorously."
  },
  {
    id: 22,
    emoji: "💯",
    name: "Hundred Points",
    meaning:
      "The number 100, written in red, underlined twice. Indicates perfection, approval, or 'keeping it real.'"
  },
  {
    id: 23,
    emoji: "🥳",
    name: "Partying Face",
    meaning:
      "A face with a party hat, blower, and confetti, used to convey celebrations or parties."
  },
  {
    id: 24,
    emoji: "😡",
    name: "Pouting Face",
    meaning:
      "A face with a frown and angry eyes, used to show anger, frustration, or disagreement."
  },
  {
    id: 25,
    emoji: "🤷",
    name: "Person Shrugging",
    meaning:
      "A person shrugging, used to convey confusion, indifference, or not knowing something."
  },
  {
    id: 26,
    emoji: "🌈",
    name: "Rainbow",
    meaning:
      "A colorful rainbow, often used to represent joy, positivity, and sometimes LGBTQ+ pride."
  },
  {
    id: 27,
    emoji: "🎸",
    name: "Guitar",
    meaning:
      "An electric or acoustic guitar, used to represent music, concerts, or rock and roll."
  },
  {
    id: 28,
    emoji: "🥰",
    name: "Smiling Face with Hearts",
    meaning:
      "A smiling face with hearts around it, used to convey affection, happiness, or being in love."
  },
  {
    id: 29,
    emoji: "😇",
    name: "Smiling Face with Halo",
    meaning:
      "A face with a smile and a halo, used to convey innocence, kindness, or angelic intentions."
  },
  {
    id: 30,
    emoji: "😜",
    name: "Winking Face with Tongue",
    meaning:
      "A face with a wink and a tongue sticking out, used playfully or to show joking."
  },
  {
    id: 31,
    emoji: "🤪",
    name: "Zany Face",
    meaning:
      "A face with one eye bigger, tongue out, and wacky expression. Used to convey silliness, craziness, or eccentricity."
  },
  {
    id: 32,
    emoji: "🤮",
    name: "Face Vomiting",
    meaning:
      "A face spewing green vomit, used to show disgust, illness, or something unpleasant."
  },
  {
    id: 33,
    emoji: "🧠",
    name: "Brain",
    meaning:
      "A brain, often used to represent intelligence, creativity, or ideas."
  },
  {
    id: 34,
    emoji: "🌍",
    name: "Earth Globe Europe-Africa",
    meaning:
      "The planet Earth, focused on Europe and Africa. Often used to represent the Earth, nature, and environmental awareness."
  },
  {
    id: 35,
    emoji: "🕊️",
    name: "Dove",
    meaning:
      "A white dove, symbolizing peace, hope, and new beginnings."
  },
  {
    id: 36,
    emoji: "🧘",
    name: "Person in Lotus Position",
    meaning:
      "A person meditating, often used to represent peace, relaxation, or mindfulness."
  },
  {
    id: 37,
    emoji: "🎃",
    name: "Jack-O-Lantern",
    meaning:
      "A carved pumpkin with a face, often used to represent Halloween."
  },
  {
    id: 38,
    emoji: "🏆",
    name: "Trophy",
    meaning:
      "A gold trophy, symbolizing victory, success, or accomplishment."
  },
  {
    id: 39,
    emoji: "🥇",
    name: "1st Place Medal",
    meaning:
      "A gold medal, awarded for first place. Often used to represent victory or achievement."
  },
  {
    id: 40,
    emoji: "🧩",
    name: "Puzzle Piece",
    meaning:
      "A puzzle piece, symbolizing something that needs solving or complexity."
  },
  {
    id: 41,
    emoji: "🌞",
    name: "Sun with Face",
    meaning:
      "A smiling sun, representing warmth, positivity, and good weather."
  },
  {
    id: 42,
    emoji: "🍀",
    name: "Four Leaf Clover",
    meaning:
      "A clover with four leaves, symbolizing luck and good fortune."
  },
  {
    id: 43,
    emoji: "🎅",
    name: "Santa Claus",
    meaning:
      "Santa Claus, used to represent Christmas and holiday cheer."
  },
  {
    id: 44,
    emoji: "🤹",
    name: "Person Juggling",
    meaning:
      "A person juggling, often used to represent multitasking or handling multiple things at once."
  },
  {
    id: 45,
    emoji: "🎭",
    name: "Performing Arts",
    meaning:
      "A pair of theater masks, representing acting, drama, and performing arts."
  },
  {
    id: 46,
    emoji: "🦄",
    name: "Unicorn",
    meaning:
      "A unicorn, representing magic, uniqueness, and rarity."
  },
  {
    id: 47,
    emoji: "🌌",
    name: "Milky Way",
    meaning:
      "The galaxy, used to represent the universe, space, or dreams."
  },
  {
    id: 48,
    emoji: "💍",
    name: "Ring",
    meaning:
      "A ring with a gemstone, used to represent engagement, marriage, or preciousness."
  },
  {
    id: 49,
    emoji: "🕹️",
    name: "Joystick",
    meaning:
      "A joystick, used to represent gaming, video games, and fun."
  },
  {
    id: 50,
    emoji: "🍕",
    name: "Pizza",
    meaning:
      "A slice of pizza, often used to represent food, cravings, or pizza parties."
  }
];

export default emojipedia;
