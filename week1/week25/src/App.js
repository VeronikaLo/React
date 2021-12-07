
import './App.css';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const myData = {
  labels: ['Angela', 'Bob', 'Alex', 'Grey', 'Miranda', 'Jens'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 14, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


function Cap() {
  
  return (
  
    <span className ="span">Hello world of React</span>
  );
}




function App() {
  
  
  return (
  
    <div className="App">
      <h1 className="header">Meine Erfahrung mit React </h1>
     
    <Cap></Cap>

    <h2 className ="header_2">Working Hours</h2>
    <Pie className="pie"
  
  data={myData}
 
/>
</div>  
     
  
  );
}

export default App;










