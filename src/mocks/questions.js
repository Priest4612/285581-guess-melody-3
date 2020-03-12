const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/3/3d/Maawal.ogg`,
      genre: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/7/7f/Passion_and_Choice.ogg`,
      genre: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/6/62/Zero-project_Metamorphosis_-_04_-_The_light_of_truth.ogg?uselang=ru`,
      genre: `rock`,
    }],
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/6/62/Zero-project_Metamorphosis_-_04_-_The_light_of_truth.ogg?uselang=ru`,
    },
    answers: [{
      picture: `${AVATAR_URL}/A`,
      artist: `John Snow`,
    }, {
      picture: `${AVATAR_URL}/AB`,
      artist: `Jack Daniels`,
    }, {
      picture: `${AVATAR_URL}/AC`,
      artist: `Jim Beam`,
    }],
  }
];
