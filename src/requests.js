const API_KEY = "d10d9bfef21bdfd9854ac5e721590f06";

// 14:20
const requests = {
  fetchNetflixOriginal: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,

  // What movies are in theatres?
  // URL: /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22

  // What are the most popular movies?
  // URL: /discover/movie?sort_by=popularity.desc

  // What are the highest rated movies rated R?
  // URL: /discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc

  // What are the most popular kids movies?
  // URL: /discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc

  // What is are the best movies from 2010?
  // URL: /discover/movie?primary_release_year=2010&sort_by=vote_average.desc

  // What are the best dramas that were released this year?
  // URL: /discover/movie?with_genres=18&primary_release_year=2014

  // What are the highest rated science fiction movies that Tom Cruise has been in?
  // URL: /discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc

  // What are the Will Ferrell's highest grossing comedies?
  // URL: /discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc

  // Have Brad Pitt and Edward Norton ever been in a movie together?
  // URL: /discover/movie?with_people=287,819&sort_by=vote_average.desc

  // Has David Fincher ever worked with Rooney Mara?
  // URL: /discover/movie?with_people=108916,7467&sort_by=popularity.desc

  // What are the best drama's?
  // URL: /discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10

  // What are Liam Neeson's highest grossing rated 'R' movies?
  // URL: /discover/movie?certification_country=US&certification=R&sort_by=revenue.desc&with_cast=3896
};

export default requests;
