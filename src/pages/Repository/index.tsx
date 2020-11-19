import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RouteParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RouteParams>();

  return (
    <>
      <h1>Repository</h1>
      <p>{params.repository}</p>
    </>
  );
};

export default Repository;
