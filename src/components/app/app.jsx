import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';

const welcomeButtonHandler = () => {};

const App = (props) => {

  const {errorsCount, questions} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen
            errorsCount={errorsCount}
            onWelcomeButtonClick={welcomeButtonHandler}
          />
        </Route>
        <Route exact path="/dev-artist">
          <ArtistQuestionScreen
            question={questions[1]}
            onAnswer={() =>{}}
          />
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreen
            question={questions[0]}
            onAnswer={() => {}}
          />
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
