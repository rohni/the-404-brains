/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
      {
        text: 'What is the capital of the Netherlands?',
        answers: {
          a: 'Amsterdam',
          b: 'Rotterdam',
          c: 'The Hague',
        },
        correct: 'a',
        selected: null,
        links: [
          {
            text: 'Britannica',
            href: 'https://www.britannica.com/place/Amsterdam',
          },
          {
            text: 'Holland.com',
            href: 'https://www.holland.com/global/tourism/destinations/amsterdam.htm',
          },
        ],
      },
      {
        text: 'Which of the following is a traditional Dutch food?',
        answers: {
          a: 'Sushi',
          b: 'Stroopwafel',
          c: 'Tacos',
        },
        correct: 'b',
        selected: null,
        links: [
          {
            text: 'Dutch Review',
            href: 'https://dutchreview.com/culture/food/the-ultimate-guide-to-dutch-food/',
          },
          {
            text: 'Expatica',
            href: 'https://www.expatica.com/nl/lifestyle/food-drink/dutch-food-100-things-101947/',
          },
        ],
      },
      {
        text: 'What color is typically associated with the Dutch royal family?',
        answers: {
          a: 'Red',
          b: 'Orange',
          c: 'Blue',
        },
        correct: 'b',
        selected: null,
        links: [
          {
            text: 'Netherlandsandyou.nl',
            href: 'https://www.netherlandsandyou.nl/about-the-netherlands/royal-house',
          },
          {
            text: 'Royal House of the Netherlands',
            href: 'https://www.royal-house.nl/',
          },
        ],
      },
      {
        text: 'Which country borders the Netherlands to the south?',
        answers: {
          a: 'Belgium',
          b: 'Germany',
          c: 'France',
        },
        correct: 'a',
        selected: null,
        links: [
          {
            text: 'World Atlas',
            href: 'https://www.worldatlas.com/maps/netherlands',
          },
          {
            text: 'Britannica',
            href: 'https://www.britannica.com/place/Netherlands',
          },
        ],
      },
      {
        text: 'Which city is known for its international court of justice?',
        answers: {
          a: 'Rotterdam',
          b: 'Amsterdam',
          c: 'The Hague',
        },
        correct: 'c',
        selected: null,
        links: [
          {
            text: 'International Court of Justice',
            href: 'https://www.icj-cij.org/en',
          },
          {
            text: 'The Hague',
            href: 'https://www.denhaag.com/en/international-city-of-peace-and-justice',
          },
        ],
      },
      {
        text: 'Which of these is a major river flowing through the Netherlands?',
        answers: {
          a: 'Thames',
          b: 'Rhine',
          c: 'Seine',
        },
        correct: 'b',
        selected: null,
        links: [
          {
            text: 'Britannica',
            href: 'https://www.britannica.com/place/Rhine-River',
          },
          {
            text: 'World Atlas',
            href: 'https://www.worldatlas.com/rivers/rhine-river.html',
          },
        ],
      },
      {
        text: 'What is the name of the Dutch national airline?',
        answers: {
          a: 'Lufthansa',
          b: 'KLM',
          c: 'Air France',
        },
        correct: 'b',
        selected: null,
        links: [
          {
            text: 'KLM Official Site',
            href: 'https://www.klm.com/home/nl/en',
          },
          {
            text: 'SkyTeam',
            href: 'https://www.skyteam.com/en/about/airlines/klm',
          },
        ],
      },
      {
        text: 'What is the national flower of the Netherlands?',
        answers: {
          a: 'Tulip',
          b: 'Rose',
          c: 'Lily',
        },
        correct: 'a',
        selected: null,
        links: [
          {
            text: 'Holland.com',
            href: 'https://www.holland.com/global/tourism/interests/traditional/tulips.htm',
          },
          {
            text: 'Dutch Review',
            href: 'https://dutchreview.com/culture/why-tulips-are-the-national-flower-of-the-netherlands/',
          },
        ],
      },
      {
        text: 'What is the main language spoken in the Netherlands?',
        answers: {
          a: 'English',
          b: 'French',
          c: 'Dutch',
        },
        correct: 'c',
        selected: null,
        links: [
          {
            text: 'Holland.com',
            href: 'https://www.holland.com/global/tourism/information/general/language.htm',
          },
          {
            text: 'Expatica',
            href: 'https://www.expatica.com/nl/living/integration/language-in-the-netherlands-105680/',
          },
        ],
      },
      {
        text: 'Which famous Dutch artist painted "The Starry Night"?',
        answers: {
          a: 'Vincent van Gogh',
          b: 'Rembrandt',
          c: 'Piet Mondrian',
        },
        correct: 'a',
        selected: null,
        links: [
          {
            text: 'Van Gogh Museum',
            href: 'https://www.vangoghmuseum.nl/en',
          },
          {
            text: 'The Art Story',
            href: 'https://www.theartstory.org/artist/van-gogh-vincent/',
          },
        ],
      }
    ]
};
