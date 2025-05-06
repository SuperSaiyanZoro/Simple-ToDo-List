import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { TaskProvider } from './contexts/TaskContext';
import { AudioProvider } from './contexts/AudioContext';
import Layout from './components/Layout';
import Header from './components/Header';
import TaskContainer from './components/TaskContainer';
import AnimeCharacter from './components/AnimeCharacter';

function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <AudioProvider>
          <Layout>
            <Header />
            <TaskContainer />
            <AnimeCharacter />
          </Layout>
        </AudioProvider>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
