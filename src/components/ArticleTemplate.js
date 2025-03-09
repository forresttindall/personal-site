import React, { useEffect } from 'react';
import '../Blog-Articles.css';

const ArticleTemplate = ({ article }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) return null;

  const { title, publishDate, readingTime, heroImage, sections } = article;

  return (
    <article className="article-container">
      <header className="article-header">
        <h1 className="article-title gradient-text">{title}</h1>
        <div className="article-meta">
          <time>{publishDate}</time>
          <span className="bullet">•</span>
          <span className="reading-time">{readingTime}</span>
        </div>
      </header>

      {heroImage && (
        <figure className="hero-image">
          <img src={heroImage.src} alt={heroImage.alt} />
          <figcaption>{heroImage.caption}</figcaption>
        </figure>
      )}

      <div className="article-content">
        {sections.map((section, index) => {
          if (section.type === 'lead') {
            return (
              <p key={index} className="lead-paragraph">
                {section.content}
              </p>
            );
          }

          return (
            <section key={index} className="content-section">
              {section.title && <h2>{section.title}</h2>}
              {section.content && <p>{section.content}</p>}
              {section.list && (
                <ul className="content-list">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section.image && (
                <figure className="article-image">
                  <img src={section.image.src} alt={section.image.alt} />
                  <figcaption>{section.image.caption}</figcaption>
                </figure>
              )}
            </section>
          );
        })}
      </div>
    </article>
  );
};

export default ArticleTemplate; 