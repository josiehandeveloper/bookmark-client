import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Bookmark from './Bookmark';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    id: '123',
    title: 'test title',
    url: 'test url',
    desciption: 'test desciption',
    rating: 1,
    onClickDelete: () => {},
  }
  ReactDOM.render(
    <BrowserRouter>
      <Bookmark {...props} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});