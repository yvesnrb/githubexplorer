import React, { FormEvent, useState } from 'react';
import { Title, Form, Repositories } from './styles';
import api from '../../services/api';
import appLogoImg from '../../assets/app-logo.svg';
import arrowImg from '../../assets/arrow.svg';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const response = await api.get<Repository>(`/repos/${searchQuery}`);
    setRepositories([...repositories, response.data]);
  }

  return (
    <>
      <img src={appLogoImg} alt="GitHub Explorer logo" />

      <Title>Explore GitHub repositories.</Title>

      <Form onSubmit={handleSubmit}>
        <input
          onChange={e => setSearchQuery(e.target.value)}
          type="text"
          name="search"
          placeholder="Type Here"
        />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        {repositories.map(repository => (
          <a
            key={repository.full_name}
            href={`https://github.com/${repository.full_name}`}
          >
            <img
              className="avatar-img"
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <h5>{repository.full_name}</h5>
              <p>{repository.description}</p>
            </div>
            <img
              className="right-arrow"
              src={arrowImg}
              alt="Right facing arrow"
            />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
