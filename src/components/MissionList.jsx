import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission } from '../redux/Missions/missionsReducer';
import style from '../styles/MissionList.module.css';

const MissionList = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  const handleMission = (id) => {
    dispatch(joinMission(id));
  };

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
              {!e.reserved ? (
                <div className={style.statusNotMember}>NOT A MEMBER</div>
              ) : (
                <div className={style.statusNotMember}>YES A MEMBER</div>
              )}
            </td>
            <td>
              {!e.reserved ? (
                <button
                  className={style.joinBtn}
                  onClick={() => {
                    handleMission(e.mission_id);
                  }}
                  type="button"
                >
                  Join Mission
                </button>
              ) : (
                <button
                  className={style.joinBtn}
                  onClick={() => {
                    handleMission(e.mission_id);
                  }}
                  type="button"
                >
                  Cancel Mission
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MissionList;
