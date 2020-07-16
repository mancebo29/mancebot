var axios = require('axios');

const genericConfig = {
    headers: {
        'Content-Type': 'application/json',
    },
};

const jokeService = {
    getRandomJoke: async () => {
        const joke = await axios.get(`https://sv443.net/jokeapi/v2/joke/Any`, genericConfig).then(d => d.data);

        return joke;
    }
};

export default jokeService;
