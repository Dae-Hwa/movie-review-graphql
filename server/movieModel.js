const movies = [
  {
    title: "Iron Man",
    imdbID: "tt0371746",
    year: 2008,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
    plot:
      "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    actors: [
      "Robert Downey Jr.",
      "Terrence Howard",
      "Jeff Bridges",
      "Gwyneth Paltrow"
    ],
    released: "02 May 2008",
    director: "Jon Favreau",
    ratings: []
  },
  {
    title: "Iron Man 2",
    imdbID: "tt1228705",
    year: 2010,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg",
    plot:
      "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
    actors: [
      "Robert Downey Jr.",
      "Gwyneth Paltrow",
      "Don Cheadle",
      "Scarlett Johansson"
    ],
    released: "07 May 2010",
    director: "Jon Favreau",
    ratings: []
  },
  {
    title: "Iron Man 3",
    imdbID: "tt1300854",
    year: 2013,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg",
    plot:
      "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    actors: [
      "Robert Downey Jr.",
      "Gwyneth Paltrow",
      "Don Cheadle",
      "Guy Pearce"
    ],
    released: "03 May 2013",
    director: "Shane Black",
    ratings: []
  },
  {
    title: "The Avengers",
    imdbID: "tt0848228",
    year: 2012,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    plot:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    actors: [
      "Robert Downey Jr.",
      "Chris Evans",
      "Mark Ruffalo",
      "Chris Hemsworth"
    ],
    released: "04 May 2012",
    director: "Joss Whedon",
    ratings: []
  },
  {
    title: "Avengers: Age of Ultron",
    imdbID: "tt2395427",
    year: 2015,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    plot:
      "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
    actors: [
      "Robert Downey Jr.",
      "Chris Hemsworth",
      "Mark Ruffalo",
      "Chris Evans"
    ],
    released: "01 May 2015",
    director: "Joss Whedon",
    ratings: []
  },
  {
    title: "Avengers: Infinity War",
    imdbID: "tt4154756",
    year: 2018,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    plot:
      "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    actors: [
      "Robert Downey Jr.",
      "Chris Hemsworth",
      "Mark Ruffalo",
      "Chris Evans"
    ],
    released: "27 Apr 2018",
    director: "Anthony Russo, Joe Russo",
    ratings: []
  },
  {
    title: "Avengers: Endgame",
    imdbID: "tt4154796",
    year: 2019,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    plot:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
    actors: [
      "Robert Downey Jr.",
      "Chris Evans",
      "Mark Ruffalo",
      "Chris Hemsworth"
    ],
    released: "26 Apr 2019",
    director: "Anthony Russo, Joe Russo",
    ratings: []
  },
  {
    title: "Captain America: The First Avenger",
    imdbID: "tt0458339",
    year: 2011,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg",
    plot:
      'Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.',
    actors: [
      "Chris Evans",
      "Hayley Atwell",
      "Sebastian Stan",
      "Tommy Lee Jones"
    ],
    released: "22 Jul 2011",
    director: "Joe Johnston",
    ratings: []
  },
  {
    title: "Captain America: The Winter Soldier",
    imdbID: "tt1843866",
    year: 2014,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_SX300.jpg",
    plot:
      "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.",
    actors: [
      "Chris Evans",
      "Samuel L. Jackson",
      "Scarlett Johansson",
      "Robert Redford"
    ],
    released: "04 Apr 2014",
    director: "Anthony Russo, Joe Russo",
    ratings: []
  },
  {
    title: "Captain America: Civil War",
    imdbID: "tt3498820",
    year: 2016,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg",
    plot:
      "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
    actors: [
      "Chris Evans",
      "Robert Downey Jr.",
      "Scarlett Johansson",
      "Sebastian Stan"
    ],
    released: "06 May 2016",
    director: "Anthony Russo, Joe Russo",
    ratings: []
  },
  {
    title: "Thor",
    imdbID: "tt0800369",
    year: 2011,
    poster:
      "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    plot:
      "The powerful, but arrogant god Thor, is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
    actors: [
      "Chris Hemsworth",
      "Natalie Portman",
      "Tom Hiddleston",
      "Anthony Hopkins"
    ],
    released: "06 May 2011",
    director: "Kenneth Branagh",
    ratings: []
  },
  {
    title: "Thor: The Dark World",
    imdbID: "tt1981115",
    year: 2013,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg",
    plot:
      "When Dr. Jane Foster gets cursed with a powerful entity known as the Aether, Thor is heralded of the cosmic event known as the Convergence and the genocidal Dark Elves.",
    actors: [
      "Chris Hemsworth",
      "Natalie Portman",
      "Tom Hiddleston",
      "Anthony Hopkins"
    ],
    released: "08 Nov 2013",
    director: "Alan Taylor",
    ratings: []
  },
  {
    title: "Thor: Ragnarok",
    imdbID: "tt3501632",
    year: 2017,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg",
    plot:
      "Thor is imprisoned on the planet Sakaar, and must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
    actors: [
      "Chris Hemsworth",
      "Tom Hiddleston",
      "Cate Blanchett",
      "Idris Elba"
    ],
    released: "03 Nov 2017",
    director: "Taika Waititi",
    ratings: []
  },
  {
    title: "Guardians of the Galaxy",
    imdbID: "tt2015381",
    year: 2014,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg",
    plot:
      "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    actors: ["Chris Pratt", "Zoe Saldana", "Dave Bautista", "Vin Diesel"],
    released: "01 Aug 2014",
    director: "James Gunn",
    ratings: []
  },
  {
    title: "Guardians of the Galaxy Vol. 2",
    imdbID: "tt3896198",
    year: 2017,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg",
    plot:
      "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
    actors: ["Chris Pratt", "Zoe Saldana", "Dave Bautista", "Vin Diesel"],
    released: "05 May 2017",
    director: "James Gunn",
    ratings: []
  },
  {
    title: "Ant-Man",
    imdbID: "tt0478970",
    year: 2015,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg",
    plot:
      "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
    actors: ["Paul Rudd", "Michael Douglas", "Evangeline Lilly", "Corey Stoll"],
    released: "17 Jul 2015",
    director: "Peyton Reed",
    ratings: []
  },
  {
    title: "Ant-Man and the Wasp",
    imdbID: "tt5095030",
    year: 2018,
    poster:
      "https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    plot:
      "As Scott Lang balances being both a Super Hero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.",
    actors: ["Paul Rudd", "Evangeline Lilly", "Michael Peña", "Walton Goggins"],
    released: "06 Jul 2018",
    director: "Peyton Reed",
    ratings: []
  },
  {
    title: "Spider-Man: Homecoming",
    imdbID: "tt2250912",
    year: 2017,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg",
    plot:
      "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
    actors: [
      "Tom Holland",
      "Michael Keaton",
      "Robert Downey Jr.",
      "Marisa Tomei"
    ],
    released: "07 Jul 2017",
    director: "Jon Watts",
    ratings: []
  }
];

function findAll() {
  return Promise.resolve(movies);
}

function findById(imdbID) {
  return Promise.resolve(movies.find(m => m.imdbID === imdbID));
}

const minMax = (min, max, value) => Math.max(Math.min(value, max), min);

function addRating(imdbID, rating, comment) {
  const movie = movies.find(m => m.imdbID === imdbID);
  if (!movie || !movie.ratings) {
    return Promise.resolve(null);
  }

  movie.ratings.push({ rating: minMax(1, 5, rating), comment });
  return Promise.resolve(movie);
}

module.exports = {
  findAll,
  findById,
  addRating
};
