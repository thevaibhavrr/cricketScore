const ApiKey = "7408f37e-a49c-4399-82c3-015f93767a50";

export const getMatches = () => {
  const url = `https://api.cricapi.com/v1/currentMatches?apikey=${ApiKey}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((err) => {
      console.log({ err: err });
    });
};

export const getMatchDetail = (id)=>{
  const url = `https://api.cricapi.com/v1/match_info?apikey=${ApiKey}&offset=0&id=${id}`;
 return (
   fetch(url)
     // .then((response) => response.json())
     .then((response) => response.json())

     .catch((err) => {
       console.log({ err: err });
     })
 );
}
