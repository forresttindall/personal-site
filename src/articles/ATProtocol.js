import React from 'react';
import ArticleTemplate from '../components/ArticleTemplate';
import { articles } from '../data/articleContent';

const ATProtocol = () => {
  const article = articles.find(a => a.id === 'atprotocol');
  return <ArticleTemplate article={article} />;
};

export default ATProtocol; 