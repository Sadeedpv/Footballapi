import React, { useEffect } from 'react';
import {Table} from 'react-bootstrap';
import './league.css';
import axios from 'axios'

function League(props) {

  const [team, setteam] = React.useState();

    useEffect(() =>{
        axios.get(`https://api-football-standings.azharimm.site/leagues/${props.id}/standings?season=${props.season}&sort=asc`)
        .then(res => {
            console.log(res.data.data.standings)
            setteam(res.data.data.standings)
        }).catch(err =>{
            console.log(err);
        })
    },[props.id, props.season])

  return (
    <div>

        <div className='tournament'>{props.tournament} - Season {props.season}</div>

        <div className='tables'><Table striped hover responsive >
  <thead>
    <tr>
      <th>#</th>
      <th>Logo</th>
      <th>Name</th>
      <th ></th>

      <th>Wins</th>
      <th>Loss</th>
      <th>Draws</th>
      <th>Games</th>
      <th>GF</th>
      <th>GA</th>
    </tr>
  </thead>
  <tbody>
    {team && team.map((team, key) =>{
      return <tr key={key}>
        <td>{key + 1}</td>
        <td><img src={team.team.logos[0].href} alt='team logo' width={40} height={40}/></td>
        <td >{team.team.name}</td>
        <td>{team.stats[0].value}</td>
        <td>{team.stats[1].value}</td>
        <td>{team.stats[2].value}</td>
        <td>{team.stats[3].value}</td>
        <td>{team.stats[4].value}</td>
        <td>{team.stats[5].value}</td>
      </tr>
    })}
  </tbody>
</Table>
</div>
    </div>
  )
}

export default League