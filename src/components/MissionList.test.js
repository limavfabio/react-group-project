import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import MissionList from './MissionList';
import store from '../redux/configureStore';

it('Render table element on screen', () => {
  render(
    <Provider store={store}>
      <MissionList />
    </Provider>
  );
  const missionListTable = document.querySelector('table');
  expect(missionListTable).toBeTruthy();
});
