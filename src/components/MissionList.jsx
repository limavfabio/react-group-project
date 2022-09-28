import React from 'react';
import { useSelector } from 'react-redux';
import style from '../styles/MissionList.module.css';

const MissionList = () => {
  const missions = useSelector((state) => state.missions);

  return (
    <table>
      <thead>
        <tr className={style.tableHead}>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((e) => (
          <tr className={style.tableRow} key={e.missions_id}>
            <td>{e.mission_name}</td>
            <td>{e.description}</td>
            <td>
              <div className={style.statusNotMember}>NOT A MEMBER</div>
            </td>
            <td>
              <button className={style.joinBtn} type="button">
                Join Mission
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MissionList;
