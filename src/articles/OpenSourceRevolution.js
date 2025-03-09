import React from 'react';
import ArticleTemplate from '../components/ArticleTemplate';
import { articles } from '../data/articleContent';

const OpenSourceRevolution = () => {
  const article = articles.find(a => a.id === 'open-source-revolution');
  return <ArticleTemplate article={article} />;
};

export default OpenSourceRevolution; 