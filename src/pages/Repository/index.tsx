import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
  Header,
  ProfileContainer,
  InfoContainer,
  IssuesContainer,
} from './styles';
import logoImg from '../../assets/app-logo.svg';

interface RouteParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RouteParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer Logo" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>

      <ProfileContainer>
        <img src="https://picsum.photos/200" alt="Nome Sobrenome" />
        <div>
          <h5>{params.repository}</h5>
          <p>Repository description</p>
        </div>
      </ProfileContainer>

      <InfoContainer>
        <div>
          <h5>99</h5>
          <p>Stars</p>
        </div>

        <div>
          <h5>99</h5>
          <p>Forks</p>
        </div>

        <div>
          <h5>99</h5>
          <p>Open Issues</p>
        </div>
      </InfoContainer>

      <IssuesContainer>
        <Link to="google.com">
          <div>
            <h1>Issue Title</h1>
            <p>Issue Owner</p>
          </div>
          <FiChevronRight />
        </Link>

        <Link to="google.com">
          <div>
            <h1>Issue Title</h1>
            <p>Issue Owner</p>
          </div>
          <FiChevronRight />
        </Link>
      </IssuesContainer>
    </>
  );
};

export default Repository;
