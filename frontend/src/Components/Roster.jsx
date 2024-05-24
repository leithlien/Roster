import React from 'react';

import rosterStyles from './Roster.module.css';

function Roster ({ roster }) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const periods = ['early', 'mid', 'late']

  const abrev = (d) => {
    return d.substring(0, 3).toLowerCase();
  }

  return (
    <>
      <div className={rosterStyles['roster-container']}>
        <div className={rosterStyles['roster-column']}>
          Time
          <div className={`${rosterStyles['roster-cell']} ${rosterStyles['time-cell']}`}>Early</div>
          <div className={`${rosterStyles['roster-cell']} ${rosterStyles['time-cell']}`}>Mid</div>
          <div className={`${rosterStyles['roster-cell']} ${rosterStyles['time-cell']}`}>Late</div>
        </div>
        {
          days.map(d => (
            <div key={abrev(d)} className={rosterStyles['roster-column']}>
              {d}
              {
                periods.map(p => (
                  <div key={p} className={rosterStyles['roster-cell']}>
                    { 
                      roster.roster[`${abrev(d)}-${p}`].map(n => (
                        <p key={n}>{n}</p>
                      ))
                    }
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Roster;
