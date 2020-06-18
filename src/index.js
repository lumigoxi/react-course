import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

const container = document.getElementById('app');
ReactDOM.render(
  <Badge
    firstName="Miguel"
    lastName="Xiap"
    jobTitle="Systems Engineer and Computer Science"
    twitter="lumigoxi"
    avatarUrl="https://s.gravatar.com/avatar/0b693cbf8378f5a5e0f5c534ddd47b65?s=80"
  />,
  container
);
