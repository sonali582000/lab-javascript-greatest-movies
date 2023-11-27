// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorArray = moviesArray.map((currentMovie) => {
    return currentMovie.director;
  });
  return directorArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let countGenre = 0;
  if (moviesArray.length !== 0) {
    const stevenDramaMovie = moviesArray.filter((currectMovie) => {
      if (currectMovie.director === "Steven Spielberg") {
        if (currectMovie.genre.indexOf("Drama") >= 0) {
          countGenre += 1;
        }
        return countGenre;
      }
    });
    // console.log(countGenre, "+", stevenDramaMovie);
    if (countGenre === 2) {
      return 2;
    } else if (countGenre === 4) {
      return 4;
    }
    return countGenre;
    // return stevenDramaMovie;
  }
  if (!moviesArray.isArray || moviesArray.length === 0) {
    return 0;
  }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let avg = 0;
  const movieScores = moviesArray.reduce((accumulator, currentValue) => {
    if (currentValue.score >= 0) {
      return accumulator + currentValue.score;
    }
    if (currentValue.score === undefined) {
      return accumulator;
    }
  }, 0);
  // console.log(movieScores);
  avg = movieScores / moviesArray.length;
  return Number(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let avg = 0,
    count = 0;
  const dramaScore = moviesArray
    .filter((currectMovie) => {
      if (currectMovie.genre.includes("Drama")) {
        //console.log(currectMovie);
        count += 1;
        return true;
      }
    })
    .reduce((accumulator, currentValue) => {
      if (currentValue.score >= 0) {
        return accumulator + currentValue.score;
      }
      if (currentValue.score === undefined) {
        return accumulator;
      }
    }, 0);

  if (dramaScore === 0) {
    return 0;
  }

  avg = dramaScore / count;
  return Number(avg.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const movieYear = moviesArray.slice();
  movieYear.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return a.title.localeCompare(b.title);
  });
  return movieYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sorted = moviesArray.slice();
  sorted.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  const movieTitle = sorted.slice(0, 20).map((currectMovie) => {
    return currectMovie.title;
  });
  //console.log(sorted);
  return movieTitle;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
