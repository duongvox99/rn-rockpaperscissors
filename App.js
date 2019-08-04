import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Status from './components/Status';
import Card from './components/Card';
import Button from './components/Button';
import History from './components/History';

import randomComputerChoice from './external_function/randomComputerChoice';

// Constants data
import { CHOICES, RULES } from './constants';

// SCALE: ratio to zoom in or zoom out elements in all devices
import Scale from './components/Scale';
const SCALE = Scale.scale;

export default function App() {
  // HOOK
  const [playerChoice, setplayerChoice] = useState(CHOICES[0]);
  const [computerChoice, setComputerChoice] = useState(CHOICES[0]);
  const [result, setResult] = useState('Let start!');
  const [numOfWinGame, setNumOfWinGame] = useState(0);
  const [numOfLoseGame, setNumOfLoseGame] = useState(0);
  const [numOfTieGame, setNumOfTieGame] = useState(0);
  const [numOfTotalGame, setNumOfTotalGame] = useState(0);

  const  onPressFunction = (playerChoiceName) => {
    let newPlayerChoice = CHOICES.find(choice => choice.name === playerChoiceName);
    setplayerChoice(newPlayerChoice);

    let newComputerChoice = randomComputerChoice(CHOICES);
    setComputerChoice(newComputerChoice);

    newResult = RULES(newPlayerChoice.name, newComputerChoice.name);
    setNumOfWinGame(numOfWinGame + (1 ? newResult === 'Victory!' : 0));
    setNumOfLoseGame(numOfLoseGame + (1 ? newResult === 'Defeat!' : 0));
    setNumOfTieGame(numOfTieGame + (1 ? newResult === 'Tie game!' : 0));
    setNumOfTotalGame(numOfTotalGame + 1);
    setResult(newResult);
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusArea}>
        <Status result={result} />
      </View>

      <View style={styles.historyArea}>
        <History
          total={numOfTotalGame}
          win={numOfWinGame}
          lose={numOfLoseGame}
          tie={numOfTieGame}
        />
      </View>

      <View style={styles.cardArea}>
        <Card typePlayer={'You'} choice={playerChoice} />
        <Text style={styles.textVs}>vs</Text>
        <Card typePlayer={'Computer'} choice={computerChoice} />
      </View>

      <View style={styles.buttonArea}>
        {CHOICES.map(item => {
          return <Button key={item.name} name={item.name} onPress={onPressFunction} />;
        })}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#e9ebee',
    paddingTop: StatusBar.currentHeight,
  },
  statusArea: {
    flex: 0.1,
  },
  historyArea: {
    flex: 0.2,
  },
  cardArea: {
    flex: 0.4,
    flexDirection: 'row',
    margin: 10,
    borderWidth: 2,
    shadowRadius: 5,
    borderColor: 'grey',
    shadowOpacity: 0.90,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { height: 5, width: 5 },
    backgroundColor: '#E1E1E1',
  },
  buttonArea: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  textVs: {

  }
});
