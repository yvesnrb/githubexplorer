import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
import {
  Header,
  ProfileContainer,
  InfoContainer,
  IssuesContainer,
} from './styles';
import logoImg from '../../assets/app-logo.svg';
import fabricImg from '../../assets/fabric.png';

interface RouteParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  html_url: string;
  title: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RouteParams>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const [repoRequest, issuesRequest] = await Promise.all([
        api.get(`/repos/${params.repository}`),
        api.get(`/repos/${params.repository}/issues`),
      ]);

      setRepository(repoRequest.data || null);
      setIssues(issuesRequest.data || []);
      setLoading(false);
    })();
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer Logo" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>

      <>
        <ProfileContainer>
          <img
            className={loading ? 'loading-shimmer' : ''}
            src={loading ? fabricImg : repository?.owner.avatar_url}
            alt="Nome Sobrenome"
          />
          <div>
            <h5 className={loading ? 'loading-shimmer' : ''}>
              {repository?.full_name || 'AAAAAAAAAAAAAAAAAAAAA'}
            </h5>
            <p className={loading ? 'loading-shimmer' : ''}>
              {repository?.description || 'AAAAAAAAAAAAAAAAAAAAAAAAAAA'}
            </p>
          </div>
        </ProfileContainer>

        <InfoContainer>
          <div>
            <h5 className={loading ? 'loading-shimmer' : ''}>
              {repository?.stargazers_count || '0000'}
            </h5>
            <p>Stars</p>
          </div>

          <div>
            <h5 className={loading ? 'loading-shimmer' : ''}>
              {repository?.forks_count || '0000'}
            </h5>
            <p>Forks</p>
          </div>

          <div>
            <h5 className={loading ? 'loading-shimmer' : ''}>
              {repository?.open_issues_count || '0000'}
            </h5>
            <p>Open Issues</p>
          </div>
        </InfoContainer>
      </>

      <IssuesContainer>
        {issues.map((issue: Issue) => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <h1>{issue.title}</h1>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight />
          </a>
        ))}
      </IssuesContainer>
    </>
  );
};

export default Repository;
