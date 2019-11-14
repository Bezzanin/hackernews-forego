// file for API calls

var apiURI = "https://hacker-news.firebaseio.com/v0/";

// Function to get news Ids, returns another function that gets news
export const getNewsIDs = () => {
  return fetch(apiURI + "beststories.json")
    .then(response => {
      return response.json();
    })
    .then(res => {
      return getNews(res.slice(0, 20));
    })
    .catch(e => {
      throw new Error(e);
    });
};

// Function to get news from list of Ids
export const getNews = newsIDs => {
  return newsIDs.map(id => {
    return fetch(apiURI + "item/" + id + ".json")
      .then(response => {
        return response.json();
      })
      .then(res => {
        return res;
      })
      .catch(e => {
        throw new Error(e);
      });
  });
};

// Function to get user by his Id(name)
export const getUserById = id => {
  return fetch(apiURI + "user/" + id + ".json")
    .then(response => {
      return response.json();
    })
    .then(res => {
      return res;
    })
    .catch(e => {
      throw new Error(e);
    });
};
