import React from 'react';
import ArticleTemplate from '../components/ArticleTemplate';
import { articles } from '../data/articleContent';

const SolutionParadox = () => {
  const article = articles.find(a => a.id === 'solution-paradox');
  return <ArticleTemplate article={article} />;
};

export default SolutionParadox; 