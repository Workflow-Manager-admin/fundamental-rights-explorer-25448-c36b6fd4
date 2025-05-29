//
// Fundamental Rights Data Structure for Fundamental Rights Explorer
// This file exports an array of objects, each representing a fundamental right.
// Each object includes a title, detailed explanation, real-life example/case,
// and an array of quiz questions (each with options and the correct answer).
// This structure is easily extensible for future rights.
//
/**
 * Example quiz question object:
 * {
 *   question: "What is the main objective of Right to Equality?",
 *   options: [
 *     "To ensure all citizens are treated equally before the law.",
 *     "To provide free education to all children.",
 *     "To protect cultural interests of minorities.",
 *     "To set up Panchayati Raj institutions."
 *   ],
 *   answer: 0 // index of correct option in options[]
 * }
 */

const fundamentalRights = [
  {
    title: "Right to Equality",
    explanation:
      "Prohibits discrimination on grounds of religion, race, caste, sex, or place of birth, and guarantees equality before law and equal protection of the laws.",
    example:
      "In the landmark case of Indra Sawhney v. Union of India (1992), the Supreme Court upheld reservations for socially and educationally backward classes, balancing equality with affirmative action.",
    quiz: [
      {
        question: "Which Article of the Constitution primarily deals with the Right to Equality?",
        options: [
          "Article 14",
          "Article 19",
          "Article 21",
          "Article 32"
        ],
        answer: 0
      },
      {
        question: "What is prohibited by the Right to Equality?",
        options: [
          "Discrimination on the grounds of gender, race, religion, caste, place of birth",
          "Freedom of speech",
          "Right to constitutional remedies",
          "Abolition of untouchability only"
        ],
        answer: 0
      },
      {
        question: "Which landmark case discussed the validity of reservations and equality?",
        options: [
          "Indra Sawhney v. Union of India",
          "Kesavananda Bharati v. State of Kerala",
          "Golaknath v. State of Punjab",
          "ADM Jabalpur v. Shivakant Shukla"
        ],
        answer: 0
      }
    ]
  },
  {
    title: "Right to Freedom",
    explanation:
      "Encompasses several freedoms including speech and expression, assembly, association, movement, residence, and the right to practice any profession.",
    example:
      "The Supreme Court in Maneka Gandhi v. Union of India (1978) broadened the scope of personal liberty under Article 21, ensuring greater protection to freedom of movement and travel.",
    quiz: [
      {
        question: "Which Articles cover the Right to Freedom?",
        options: [
          "Articles 19 to 22",
          "Articles 14 to 18",
          "Articles 25 to 28",
          "Articles 32 to 35"
        ],
        answer: 0
      },
      {
        question: "Which right allows you to start any legal business in India?",
        options: [
          "Right to Practice any Profession (Article 19(1)(g))",
          "Right against Exploitation",
          "Cultural and Educational Rights",
          "Right to Constitutional Remedies"
        ],
        answer: 0
      },
      {
        question: "What was significant about Maneka Gandhi v. Union of India?",
        options: [
          "It expanded the scope of personal liberty.",
          "It defined basic structure doctrine.",
          "It legalized reservations for OBCs.",
          "It restricted freedom of religion."
        ],
        answer: 0
      }
    ]
  },
  {
    title: "Right against Exploitation",
    explanation:
      "Prohibits human trafficking, forced labor (begar), and employment of children in hazardous jobs.",
    example:
      "In People's Union for Democratic Rights v. Union of India (1982), the Supreme Court held that non-payment of minimum wages amounts to forced labor.",
    quiz: [
      {
        question: "Which articles relate to Right against Exploitation?",
        options: [
          "Articles 23 and 24",
          "Articles 19 and 20",
          "Articles 15 and 16",
          "Articles 29 and 30"
        ],
        answer: 0
      },
      {
        question: "What practice is abolished under Article 23?",
        options: [
          "Human trafficking and bonded labor",
          "Untouchability",
          "Child labor only",
          "Freedom of speech"
        ],
        answer: 0
      },
      {
        question: "Which Supreme Court case linked minimum wages to forced labor?",
        options: [
          "People's Union for Democratic Rights v. Union of India",
          "Indra Sawhney v. Union of India",
          "Minerva Mills v. Union of India",
          "MC Mehta v. Union of India"
        ],
        answer: 0
      }
    ]
  },
  {
    title: "Right to Freedom of Religion",
    explanation:
      "Guarantees religious freedom, allowing all individuals to practice, profess, and propagate any religion, and ensures equality of all religions.",
    example:
      "The Supreme Court in Shirur Mutt case (1954) defined the extent of religious freedom for denominations and the meaning of 'essential religious practices.'",
    quiz: [
      {
        question: "Articles related to Right to Freedom of Religion span which range?",
        options: [
          "Articles 25 to 28",
          "Articles 14 to 18",
          "Articles 32 to 35",
          "Articles 21 to 24"
        ],
        answer: 0
      },
      {
        question: "What is NOT protected under the Right to Freedom of Religion?",
        options: [
          "Compelling others to convert by force",
          "Choosing to profess any religion",
          "Building a place of worship",
          "Participating in religious ceremonies"
        ],
        answer: 0
      },
      {
        question: "Which case is famous regarding religious denomination rights?",
        options: [
          "The Shirur Mutt case",
          "Kesavananda Bharati case",
          "Golaknath case",
          "Indira Gandhi v. Raj Narain"
        ],
        answer: 0
      }
    ]
  },
  {
    title: "Cultural and Educational Rights",
    explanation:
      "Protect the rights of cultural, religious, and linguistic minorities to preserve their culture and establish/manage educational institutions of their choice.",
    example:
      "The Supreme Court in T.M.A. Pai Foundation v. State of Karnataka (2002) clarified the rights of minorities to establish and administer educational institutions.",
    quiz: [
      {
        question: "Articles related to Cultural and Educational Rights are?",
        options: [
          "Articles 29 and 30",
          "Articles 32 and 33",
          "Articles 19 and 20",
          "Articles 36 and 37"
        ],
        answer: 0
      },
      {
        question: "Who benefits most directly from Article 30?",
        options: [
          "Minority groups (religious and linguistic)",
          "Only SC/ST groups",
          "Child laborers",
          "Business owners"
        ],
        answer: 0
      },
      {
        question: "Which case relates to minority education rights?",
        options: [
          "T.M.A. Pai Foundation v. State of Karnataka",
          "Kesavananda Bharati v. State of Kerala",
          "ADM Jabalpur v. Shivakant Shukla",
          "MC Mehta v. Union of India"
        ],
        answer: 0
      }
    ]
  },
  {
    title: "Right to Constitutional Remedies",
    explanation:
      "Empowers citizens to move the courts for the enforcement of fundamental rights, including through writs such as habeas corpus, mandamus, prohibition, quo warranto, and certiorari.",
    example:
      "In Kesavananda Bharati v. State of Kerala (1973), the Supreme Court reaffirmed that the right to constitutional remedies is a part of the basic structure of the Constitution.",
    quiz: [
      {
        question: "Which Article is called the 'heart and soul' of the Constitution?",
        options: [
          "Article 32",
          "Article 21",
          "Article 14",
          "Article 19"
        ],
        answer: 0
      },
      {
        question: "Who described Article 32 as the 'heart and soul' of the Constitution?",
        options: [
          "Dr. B. R. Ambedkar",
          "Jawaharlal Nehru",
          "Sardar Patel",
          "Rajendra Prasad"
        ],
        answer: 0
      },
      {
        question: "Which writ is issued to release a person from illegal detention?",
        options: [
          "Habeas Corpus",
          "Mandamus",
          "Certiorari",
          "Prohibition"
        ],
        answer: 0
      }
    ]
  }
];

// PUBLIC_INTERFACE
export default fundamentalRights;
