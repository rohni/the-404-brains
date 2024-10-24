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
      "text": "What is the capital of the Netherlands?",
      "answers": {
        "a": "Amsterdam",
        "b": "Rotterdam",
        "c": "The Hague",
        "d": "Utrecht"
      },
      "correct": "a",
      "selected": "a",
      "links": [
        {
          "text": "Britannica",
          "href": "https://www.britannica.com/place/Amsterdam"
        },
        {
          "text": "Holland.com",
          "href": "https://www.holland.com/global/tourism/destinations/amsterdam.htm"
        }
      ],
      "image": "https://www.probuilder.com/sites/default/files/pb/amsterdam-canal-house.jpeg"
    },
    {
      "text": "Which of the following is a traditional Dutch food?",
      "answers": {
        "a": "Sushi",
        "b": "Stroopwafel",
        "c": "Tacos",
        "d": "Bitterballen"
      },
      "correct": "b",
      "selected": "b",
      "links": [
        {
          "text": "Dutch Review",
          "href": "https://dutchreview.com/culture/food/the-ultimate-guide-to-dutch-food/"
        },
        {
          "text": "Expatica",
          "href": "https://www.expatica.com/nl/lifestyle/food-drink/dutch-food-100-things-101947/"
        }
      ],
      "image": "https://www.thuisbezorgd.nl/foodwiki/uploads/2020/01/stroopwafel1-1080x960.jpg"
    },
    {
      "text": "What color is typically associated with the Dutch royal family?",
      "answers": {
        "a": "Red",
        "b": "Orange",
        "c": "Blue",
        "d": "White"
      },
      "correct": "b",
      "selected": "b",
      "links": [
        {
          "text": "Netherlandsandyou.nl",
          "href": "https://www.netherlandsandyou.nl/about-the-netherlands/royal-house"
        },
        {
          "text": "Royal House of the Netherlands",
          "href": "https://www.royal-house.nl/"
        }
      ],
      "image": "https://www.holland.com/upload_mm/7/2/2/82988_fullimage_koninklijke%20familie%202021%20%C2%A9mischa%20schoemaker%20via%20rvd.jpg"
    },
    {
      "text": "Which country borders the Netherlands to the south?",
      "answers": {
        "a": "Belgium",
        "b": "Germany",
        "c": "France",
        "d": "Luxembourg"
      },
      "correct": "a",
      "selected": "a",
      "links": [
        {
          "text": "World Atlas",
          "href": "https://www.worldatlas.com/maps/netherlands"
        },
        {
          "text": "Britannica",
          "href": "https://www.britannica.com/place/Netherlands"
        }
      ],
      "image": "https://www.liberationroute.com/pictures/6367/3_borders_2_1280_1280_fit_90.jpg"
    },
    {
      "text": "Which city is known for its international court of justice?",
      "answers": {
        "a": "Rotterdam",
        "b": "Amsterdam",
        "c": "The Hague",
        "d": "Utrecht"
      },
      "correct": "c",
      "selected": "c",
      "links": [
        {
          "text": "International Court of Justice",
          "href": "https://www.icj-cij.org/en"
        },
        {
          "text": "The Hague",
          "href": "https://www.denhaag.com/en/international-city-of-peace-and-justice"
        }
      ],
      "image": "https://www.icj-cij.org/sites/default/files/homebanner.jpg"
    },
    {
      "text": "Which of these is a major river flowing through the Netherlands?",
      "answers": {
        "a": "Thames",
        "b": "Rhine",
        "c": "Seine",
        "d": "Danube"
      },
      "correct": "b",
      "selected": "b",
      "links": [
        {
          "text": "Britannica",
          "href": "https://www.britannica.com/place/Rhine-River"
        },
        {
          "text": "World Atlas",
          "href": "https://www.worldatlas.com/rivers/rhine-river.html"
        }
      ],
      "image": "https://images.ctfassets.net/1u811bvgvthc/2b8tk4ioqcOTFgO9RpeYq2/40effa02d9f710f1b293bae46d0df5c9/ships_on_rhine.jpg?fm=jpg&fl=progressive"
    },
    {
      "text": "What is the name of the Dutch national airline?",
      "answers": {
        "a": "Lufthansa",
        "b": "KLM",
        "c": "Air France",
        "d": "EasyJet"
      },
      "correct": "b",
      "selected": "b",
      "links": [
        {
          "text": "KLM Official Site",
          "href": "https://www.klm.com/home/nl/en"
        },
        {
          "text": "SkyTeam",
          "href": "https://www.skyteam.com/en/about/airlines/klm"
        }
      ],
      "image": "https://www.marketingtribune.nl/design/nieuws/2024/02/klm-zet-ai-in-de-strijd-tegen-voedselverspilling/klm-ai-voedselverspilling.JPG"
    },
    {
      "text": "What is the national flower of the Netherlands?",
      "answers": {
        "a": "Tulip",
        "b": "Rose",
        "c": "Lily",
        "d": "Daffodil"
      },
      "correct": "a",
      "selected": "a",
      "links": [
        {
          "text": "Holland.com",
          "href": "https://www.holland.com/global/tourism/interests/traditional/tulips.htm"
        },
        {
          "text": "Dutch Review",
          "href": "https://dutchreview.com/culture/why-tulips-are-the-national-flower-of-the-netherlands/"
        }
      ],
      "image": "https://cdn.contexttravel.com/image/upload/w_1500,q_60/v1648232421/blog/Tulips%20in%20Amsterdam%20and%20Keukenhof%2C%20the%20Garden%20of%20Europe%20/tulips_hero.jpg"
    },
    {
      "text": "What is the main language spoken in the Netherlands?",
      "answers": {
        "a": "English",
        "b": "French",
        "c": "Dutch",
        "d": "German"
      },
      "correct": "c",
      "selected": "c",
      "links": [
        {
          "text": "Holland.com",
          "href": "https://www.holland.com/global/tourism/information/general/language.htm"
        },
        {
          "text": "Expatica",
          "href": "https://www.expatica.com/nl/living/integration/language-in-the-netherlands-105680/"
        }
      ],
      "image": "https://i.pinimg.com/564x/86/06/cf/8606cf76b4ccabf0cd32a96f487dd40f.jpg"
    },
    {
      "text": "Which famous Dutch artist painted 'The Starry Night'?",
      "answers": {
        "a": "Vincent van Gogh",
        "b": "Rembrandt",
        "c": "Piet Mondrian",
        "d": "Johannes Vermeer"
      },
      "correct": "a",
      "selected": "a",
      "links": [
        {
          "text": "Van Gogh Museum",
          "href": "https://www.vangoghmuseum.nl/en"
        },
        {
          "text": "The Art Story",
          "href": "https://www.theartstory.org/artist/van-gogh-vincent/"
        }
      ],
      "image": "https://m.media-amazon.com/images/I/71goHUmfvqL._AC_SL1008_.jpg"
    }
  ]  
};
