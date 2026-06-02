import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Insights from './components/insights';
import LogForm from './components/logform';
import HistoryLog from './components/HistoryLog';
import Tips from './components/tips';

export default function App() {
  const [entries, setEntries] = useState([
    { date: '2026-05-24', bed: '01:00', wake: '08:30', quality: 5, mood: 'Tired', duration: 7.5, woken: 3 },
    { date: '2026-05-23', bed: '23:45', wake: '07:15', quality: 7, mood: 'Calm', duration: 7.5, woken: 1 },
    { date: '2026-05-22', bed: '22:30', wake: '06:30', quality: 9, mood: 'Energized', duration: 8.0, woken: 0 },
    { date: '2026-05-21', bed: '00:00', wake: '07:30', quality: 6, mood: 'Groggy', duration: 7.5, woken: 2 },
    { date: '2026-05-20', bed: '23:15', wake: '07:00', quality: 8, mood: 'Refreshed', duration: 7.75, woken: 0 },
  ]);

  const [showToast, setShowToast] = useState(false);

  const handleSaveEntry = (newEntry) => {
    setEntries([newEntry, ...entries]);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <Header />
      <Hero />
      <Insights entries={entries} />
      <hr className="divider" />
      <LogForm onSaveEntry={handleSaveEntry} />
      <hr className="divider" />
      <HistoryLog entries={entries} />
      <hr className="divider" />
      <Tips />
      
      <footer>
        Made with 🌙 · <strong>Sleep Diary</strong> · Your nights, your data, always private.
      </footer>

      <div id="toast" className={showToast ? 'show' : ''}>
        ✓ Entry saved successfully — sleep well! 🌙
      </div>
    </>
  );
}