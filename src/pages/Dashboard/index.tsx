import React, { FormEvent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories, Error } from './styles';
import api from '../../services/api';
import appLogoImg from '../../assets/app-logo.svg';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>(
    getReposFromLocalStorage,
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    localStorage.setItem(
      '@GitHubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  function getReposFromLocalStorage(): Repository[] {
    const dehydtratedRepos = localStorage.getItem(
      '@GitHubExplorer:repositories',
    );

    return JSON.parse(dehydtratedRepos || '[]');
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!searchQuery) {
      setInputError('Please type a repository name above.');
    } else {
      try {
        const response = await api.get<Repository>(`/repos/${searchQuery}`);
        setRepositories([...repositories, response.data]);
        setInputError('');
        setSearchQuery('');
      } catch (err) {
        setInputError('Please type the repo in this format: [owner]/[repo]');
      }
    }
  }

  return (
    <>
      <img src={appLogoImg} alt="GitHub Explorer logo" />

      <Title>Explore GitHub repositories.</Title>

      <Form hasError={!inputError} onSubmit={handleSubmit}>
        <input
          onChange={e => setSearchQuery(e.target.value)}
          value={searchQuery}
          type="text"
          name="search"
          placeholder="Type Here"
        />
        <button type="submit">Search</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <Link
            key={repository.full_name}
            to={`repository/${repository.full_name}`}
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

            <FiChevronRight />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
