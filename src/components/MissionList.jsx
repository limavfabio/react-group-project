import React from 'react';
import style from '../styles/MissionList.module.css';

function MissionList() {
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
        <tr className={style.tableRow}>
          <td>Thaicom</td>
          <td>
            Thaicom is the name of a series of communications satellites
            operated from Thailand, and also the name of Thaicom Public Company
            Limited, which is the company that owns and operates the Thaicom
            satellite fleet and other telecommunication businesses in Thailand
            and throughout the Asia-Pacific region. The satellite projects were
            named Thaicom by the King of Thailand, His Majesty the King Bhumibol
            Adulyadej, as a symbol of the linkage between Thailand and modern
            communications technology.
          </td>
          <td>
            {' '}
            <div className={style.statusNotMember}>NOT A MEMBER</div>
          </td>
          <td>
            <button className={style.joinBtn} type="button">
              Join Mission
            </button>
          </td>
        </tr>
        <tr className={style.tableRow}>
          <td>Thaicom</td>
          <td>
            Thaicom is the name of a series of communications satellites
            operated from Thailand, and also the name of Thaicom Public Company
            Limited, which is the company that owns and operates the Thaicom
            satellite fleet and other telecommunication businesses in Thailand
            and throughout the Asia-Pacific region. The satellite projects were
            named Thaicom by the King of Thailand, His Majesty the King Bhumibol
            Adulyadej, as a symbol of the linkage between Thailand and modern
            communications technology.
          </td>
          <td>
            <div className={style.statusNotMember}>NOT A MEMBER</div>
          </td>
          <td>
            <button className={style.joinBtn} type="button">
              Join Mission
            </button>
          </td>
        </tr>
        <tr className={style.tableRow}>
          <td>Thaicom</td>
          <td>
            Thaicom is the name of a series of communications satellites
            operated from Thailand, and also the name of Thaicom Public Company
            Limited, which is the company that owns and operates the Thaicom
            satellite fleet and other telecommunication businesses in Thailand
            and throughout the Asia-Pacific region. The satellite projects were
            named Thaicom by the King of Thailand, His Majesty the King Bhumibol
            Adulyadej, as a symbol of the linkage between Thailand and modern
            communications technology.
          </td>
          <td>
            {' '}
            <div className={style.statusNotMember}>NOT A MEMBER</div>
          </td>
          <td>
            <button className={style.joinBtn} type="button">
              Join Mission
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default MissionList;
