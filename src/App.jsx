import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";


function App() {
  const [score, setScore] = useState([]);
  const getScore = async () => {
    const res = await axios("https://demo-server-scoreboard.vercel.app/getScore", {
      method: "GET",
    });
    setScore(res.data.scores);
  };

  useEffect(() => {
    getScore();
  }, []);

  score.sort((a, b) => Number(b.point) - Number(a.point));


  return (
    <div className="App">
      <div className="scoreBoard">
        <table>
          <thead>
            <tr>
              <th scope='col' className='th'>TEAM NAME</th>
              <th scope='col' className='th'>MATCH PLAYED</th>
              <th scope='col' className='th'>TOTAL WIN</th>
              <th scope='col' className='th'>TOTAL LOSE</th>
              <th scope='col' className='th'>SCORE</th>
            </tr>
          </thead>
          <tbody>
            {score.map((elem, index) => {
              return (
                <tr scope='row'>
                  <td>{elem.team}</td>
                  <td>{elem.win + elem.lose}</td>
                  <td>{elem.win}</td>
                  <td>{elem.lose}</td>
                  <td>{elem.point}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
