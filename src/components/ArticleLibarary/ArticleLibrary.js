import React from 'react';
import './ArticleLibrary.css';

const ArticleLibrary = () => {
  // Example data, replace with actual data fetching logic
  const articles = [
    { id: 1, title: 'Article 1', content: 'Content of Article 1' },
    { id: 2, title: 'Article 2', content: 'Content of Article 2' },
  ];

  return (
    <div className="article-library">
      {articles.map(article => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleLibrary;
