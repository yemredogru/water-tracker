import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';


const HistoryScreen = () => {
  const [selected, setSelected] = useState('');

  return (
    <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
    />

  );
};

export default HistoryScreen;