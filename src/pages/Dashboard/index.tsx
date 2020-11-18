import React from 'react';
import { Title, Form, Repositories } from './styles';
import appLogoImg from '../../assets/app-logo.svg';
import arrowImg from '../../assets/arrow.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={appLogoImg} alt="GitHub Explorer logo" />

      <Title>Explore GitHub repositories.</Title>

      <Form>
        <input type="text" name="search" placeholder="Type Here" />
        <button type="button">Search</button>
      </Form>

      <Repositories>
        <a href="https://github.com/Rocketseat/unform">
          <img
            className="avatar-img"
            src="https://picsum.photos/200"
            alt="Nome Sobrenome"
          />
          <div>
            <h5>Rocketseat/unform</h5>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <img
            className="right-arrow"
            src={arrowImg}
            alt="Right facing arrow"
          />
        </a>

        <a href="https://github.com/Rocketseat/unform">
          <img
            className="avatar-img"
            src="https://picsum.photos/200"
            alt="Nome Sobrenome"
          />
          <div>
            <h5>Rocketseat/unform</h5>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <img
            className="right-arrow"
            src={arrowImg}
            alt="Right facing arrow"
          />
        </a>

        <a href="https://github.com/Rocketseat/unform">
          <img
            className="avatar-img"
            src="https://picsum.photos/200"
            alt="Nome Sobrenome"
          />
          <div>
            <h5>Rocketseat/unform</h5>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <img
            className="right-arrow"
            src={arrowImg}
            alt="Right facing arrow"
          />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
