import React, { useState } from 'react';
import './Guides.css';

const guidesData = [
  {
    title: 'How to Start a Social Justice Campaign',
    description: 'This guide covers the basics of starting your own social justice campaign, including planning, outreach, and execution.',
    link: 'https://commonslibrary.org/campaigning-for-social-change-beyond-just-protesting-for-it/'
  },
  {
    title: 'Using Social Media for Activism',
    description: 'Learn how to effectively use social media platforms to spread awareness and mobilize support for your cause.',
    link: 'https://www.humanrightscareers.com/issues/social-media-activism'
  },
  {
    title: 'Organizing a Local Campaign',
    description: 'This guide emphasizes the importance of local grassroots campaigns and provides replicable tactics for organizing effective local actions.',
    link: 'https://activisthandbook.org/organise-a-campaign'
  },
  {
    title: 'Campaigning for Human Rights',
    description: 'Focused on human rights, this guide covers building a strong foundation, setting clear goals, and collaborating with other organizations and activists.',
    link: 'https://www.humanrightscareers.com/campaigning-for-human-rights-ideas-to-get-started'
  },
  {
    title: 'Comprehensive Guide to Social Justice Principles and Practices',
    description: 'This guide offers insights into effective social justice practices, the role of individuals, organizations, and governments, and strategies for overcoming challenges.',
    link: 'https://diversity.social/social-justice-guide'
  },
  {
    title: 'Running a Grassroots Political Campaign: A Blueprint for Success',
    description: 'This guide provides a comprehensive plan for running an effective grassroots political campaign.',
    link: 'https://theschoolofpolitics.com/running-an-effective-grassroots-campaign'
  },
  {
    title: '8 Techniques for Running a Grassroots Political Campaign',
    description: 'Learn eight essential techniques for running a successful grassroots political campaign.',
    link: 'https://goodparty.org/8-techniques-for-running-a-grassroots-political-campaign'
  },
  {
    title: 'How to Start a Grassroots Advocacy Campaign',
    description: 'This guide walks you through the steps of starting a grassroots advocacy campaign.',
    link: 'https://callhub.io/how-to-start-a-grassroots-advocacy-campaign'
  },
  {
    title: 'Activist Handbook: Campaigning Guides for Activists',
    description: 'A collection of guides for activists covering topics like community organizing and developing campaign strategies.',
    link: 'https://activisthandbook.org/'
  },
  {
    title: 'Running an Effective Grassroots Campaign',
    description: 'Learn about the key elements of running a grassroots campaign, including engaging your community and mobilizing supporters.',
    link: 'https://www.ngpvan.com/blog/running-an-effective-grassroots-campaign'
  },
];

const guidesDataFrench = [
  {
    title: 'Comment lancer une campagne de justice sociale',
    description: 'Ce guide couvre les bases du lancement de votre propre campagne de justice sociale, y compris la planification, la sensibilisation et l\'exécution.',
    link: 'https://commonslibrary.org/campaigning-for-social-change-beyond-just-protesting-for-it/'
  },
  {
    title: 'Utiliser les médias sociaux pour le militantisme',
    description: 'Apprenez à utiliser efficacement les plateformes de médias sociaux pour sensibiliser et mobiliser le soutien pour votre cause.',
    link: 'https://www.humanrightscareers.com/issues/social-media-activism'
  },
  {
    title: 'Organiser une campagne locale',
    description: 'Ce guide met l\'accent sur l\'importance des campagnes locales de base et fournit des tactiques reproductibles pour organiser des actions locales efficaces.',
    link: 'https://activisthandbook.org/organise-a-campaign'
  },
  {
    title: 'Faire campagne pour les droits de l\'homme',
    description: 'Axé sur les droits de l\'homme, ce guide couvre la construction d\'une base solide, la définition d\'objectifs clairs et la collaboration avec d\'autres organisations et militants.',
    link: 'https://www.humanrightscareers.com/campaigning-for-human-rights-ideas-to-get-started'
  },
  {
    title: 'Guide complet des principes et pratiques de la justice sociale',
    description: 'Ce guide offre des informations sur les pratiques efficaces de justice sociale, le rôle des individus, des organisations et des gouvernements, et les stratégies pour surmonter les défis.',
    link: 'https://diversity.social/social-justice-guide'
  },
  {
    title: 'Conduire une campagne politique de base : Un plan pour réussir',
    description: 'Ce guide fournit un plan complet pour mener une campagne politique de base efficace.',
    link: 'https://theschoolofpolitics.com/running-an-effective-grassroots-campaign'
  },
  {
    title: '8 techniques pour mener une campagne politique de base',
    description: 'Apprenez huit techniques essentielles pour mener une campagne politique de base réussie.',
    link: 'https://goodparty.org/8-techniques-for-running-a-grassroots-political-campaign'
  },
  {
    title: 'Comment lancer une campagne de plaidoyer de base',
    description: 'Ce guide vous guide à travers les étapes de lancement d\'une campagne de plaidoyer de base.',
    link: 'https://callhub.io/how-to-start-a-grassroots-advocacy-campaign'
  },
  {
    title: 'Manuel de l\'activiste : Guides de campagne pour les activistes',
    description: 'Une collection de guides pour les activistes couvrant des sujets comme l\'organisation communautaire et le développement de stratégies de campagne.',
    link: 'https://activisthandbook.org/'
  },
  {
    title: 'Conduire une campagne de base efficace',
    description: 'Apprenez les éléments clés pour mener une campagne de base, y compris l\'engagement de votre communauté et la mobilisation des supporters.',
    link: 'https://www.ngpvan.com/blog/running-an-effective-grassroots-campaign'
  },
];

const Guides = () => {
  const [language, setLanguage] = useState('EN');

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'FR' : 'EN');
  };

  const currentGuides = language === 'EN' ? guidesData : guidesDataFrench;

  return (
    <div className="guides-container">
      <div className="guides-header">
        <button onClick={toggleLanguage} className="toggle-language-btn">
          {language === 'EN' ? 'French' : 'English'}
        </button>
      </div>
      {currentGuides.map((guide, index) => (
        <div key={index} className="guide-item">
          <h3>{guide.title}</h3>
          <p>{guide.description}</p>
          <a href={guide.link} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      ))}
    </div>
  );
};

export default Guides;
