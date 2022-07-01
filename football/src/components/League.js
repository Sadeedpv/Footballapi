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
    <>

        <div className='tournament'>{props.tournament} - Season {props.season}</div>

  <Table striped hover responsive className='points-table' size={window.innerWidth > 556?'lg':'sm'}>
  <thead>
    <tr>
      <th>#</th>
      <th>Logo</th>
      <th>Name</th>
      <th>Wins</th>
      <th>Loss</th>
      <th>Draws</th>
      <th>Games</th>
      <th>GF</th>
      <th>GA</th>
      <th>Points</th>
    </tr>
  </thead>
  <tbody>
    {team && team.map((team, key) =>{
      return <tr key={key}>
        <td>{key + 1}</td>
        <td><img src={team.team.logos[0].href} alt='team logo' width={window.innerWidth > 556?40:15} height={window.innerWidth > 556?40:15}/></td>
        <td >{team.team.name}</td>
        <td>{team.stats[0].value}</td> {/* wins */}
        <td>{team.stats[1].value}</td> {/* loss */}
        <td>{team.stats[2].value}</td> {/* draws */}
        <td>{team.stats[3].value}</td> {/* games */}
        <td>{team.stats[4].value}</td> {/* GF */}
        <td>{team.stats[5].value}</td> {/* GA */}
        <td style={{
          fontWeight: 'bold'
        }}>{team.stats[6].value}</td> {/* points */}
      </tr>
    })}
  </tbody>
</Table>
</>
  )
}

export default League