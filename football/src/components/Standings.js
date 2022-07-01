import React, { useEffect } from 'react';
import axios from 'axios';
import {Dropdown} from 'react-bootstrap';
import './standings.css'
import League from './League';

function Standings() {
const [league, setLeague] = React.useState();
const [id, setId] = React.useState('eng.1');
const [season, setseason] = React.useState('2022');
const [tournament, setTournament] = React.useState('Premier League');

useEffect(() =>{
    axios.get('https://api-football-standings.azharimm.site/leagues').then(res => {
        setLeague(res.data.data)
    }).catch(err =>{
        console.log(err)
    })
},[])

const year = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];

  return (
    <div className='grid'>

      {/* League drop down menu */}
    <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap'
    }}>
    <Dropdown className='drop'>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Select League
      </Dropdown.Toggle>

    <Dropdown.Menu>
      {league && league.map((league, key) =>{
        return <Dropdown.Item key={key} onClick={() =>{
          setId(league.id)
          setTournament(league.name)
        }}>{league.name}</Dropdown.Item>
      } )}
      
    </Dropdown.Menu>
  </Dropdown>

      {/* Year dropdown menu */}
    <Dropdown className='drop'>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Select Season
      </Dropdown.Toggle>

    <Dropdown.Menu>
      {year && year.map((year, key) =>{
        return <Dropdown.Item key={key} onClick={() =>{
          setseason(year)
        }}>{year}</Dropdown.Item>
      })}
    </Dropdown.Menu>
  </Dropdown>
  </div>

      {/* Table */}

    <div className='tables'>
      <League season={season} id={id} tournament={tournament}/>
    </div>
  </div>
  )
}

export default Standings;