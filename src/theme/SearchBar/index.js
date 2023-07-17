import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import SearchBar from '@theme-original/SearchBar';
import React, { useEffect } from 'react';
import '@markprompt/css';

export default function SearchBarWrapper(props) {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    (async () => {
      const markprompt = (await import('@markprompt/web')).markprompt;
      const { projectKey, ...config } = siteConfig.themeConfig
        .markprompt;
      markprompt(projectKey, '#markprompt', {
        ...config,
        references: {
          transformReferenceId: (referenceId) => {
            // Sample code that transforms a reference path to a link.
            // Remove file extension
            const href = referenceId.replace(/\.[^.]+$/, '');
            // Use last part of path for label
            const text = href.split('/').slice(-1)[0];
            return { text, href };
          },
        },
      });
    })();
  }, [siteConfig.themeConfig.markprompt]);

  return (
    React.createElement('div', { style: { display: 'flex', gap: '16px', alignItems: 'center' } },
      React.createElement('div', { id: 'markprompt' }),
      React.createElement(SearchBar, props)
    )
  );
}
