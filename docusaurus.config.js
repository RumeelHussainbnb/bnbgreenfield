// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "BNB Greenfield",
  tagline: "Decentralized Data Storage and Economy",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/bnbgreenfield/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "RumeelHussainbnb", // Usually your GitHub org/user name.
  projectName: "bnbgreenfield", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/RumeelHussainbnb/bnbgreenfield",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://www.bnbchain.org/en/blog/",

        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],
  themes: ['@markprompt/docusaurus-theme-search', "docusaurus-theme-openapi-docs"],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig & import('@markprompt/docusaurus-theme-search').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true
        }
      },
      markprompt: {
        projectKey: '4WCECyB9L6gYJbSuvfvQ3zwG5aMRzLN6',
        prompt: {
          label: 'Ask me anything…',
          placeholder: 'Ask me anything…',
          cta: 'Ask Docs AI…',
          tabLabel: 'Ask BNB Chain Bot',
        },
        search: {
          cta: 'Search docs…',
          enabled: true,
          tabLabel: 'Search the Docs',
          provider: {
            name: 'algolia',
            apiKey: 'dbc11ec6638f9c767ef6ed2856871f58',
            appId: '3LF005YNGZ',
            indexName: 'bnbchain',
          },
        },
        title: {
          text: 'Ask me anything…',
        },
      },
      navbar: {
        title: "BNB Greenfield",
        logo: {
          alt: "Greenfield Logo",
          src: "img/logo.svg"
        },
        items: [
          {
            label: "Guide",
            position: "left",
            to: "/docs/guide/introduction/overview"
          },
          {
            //type: 'dropdown',
            label: "API",
            position: "left",
            to: "/docs/api-sdk/grpc-rest",
            /*items:[
              {
                type: 'doc',
                label: 'API Reference',
                //sidebarid: 'apiReferenceSidebar',
                docId: 'api-sdk/grpc-rest',

              },
              {
                type: 'doc',
                label: "Greenfield Blockchain API",
                docId: 'greenfield-api/grpc-rest'
              },
            ]*/
          },
          
          {
            label: "Release Notes",
            position:"left",
            to: "/docs/release-notes/releaseNotes"
          },
         // {to: 'blog', label: 'Changelog', position: 'left'},
          {
            label: "FAQs",
            position: "left",
            to: "/docs/faq/greenfield-faqs"
          },
          {
            href: 'https://github.com/RumeelHussainbnb/bnbgreenfield',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ]
      },
      footer: {
        /*style: "dark",
        logo: {
          alt: 'BNB Chain Logo',
          src: 'img/logo.svg',
          width: 160,
          height: 51,
        },
        links: [
          {
            title:"Learn",
            items:[              
              { 
                label: "Whitepaper",
                to: "https://github.com/bnb-chain/greenfield-whitepaper"
              },
              { 
                label: "Official Website",
                to: "http://greenfield.bnbchain.org/"
              },
            ]
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/QRTQvfhADQ"
              },
              {
                label: "Twitter",
                href: "https://twitter.com/BNBChain"
              },
              {
                label: 'Telegram',
                href: 'http://t.me/bnbchain',              
              }
            ]
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "https://www.bnbchain.org/en/blog/"
              },
              {
                label:"Youtube",
                to: "https://www.youtube.com/channel/UCG9fZu6D4I83DStktBV0Ryw"
              },
              {
                label: "GitHub",
                href: "https://github.com/bnb-chain"
              },
            ]
          }
        ],
        
        copyright: `Copyright © ${new Date().getFullYear()} BNB Chain`
      */
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php"]
      }
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          greenfield: {
            specPath: "swagger/greenfield-api.yaml",
            outputDir: "docs/greenfield-api",
            downloadUrl:
              "https://raw.githubusercontent.com/PaloAltoNetworks/docusaurus-template-openapi-docs/main/examples/petstore.yaml",
           sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          }
        }
      }
    ]
  ],
};

module.exports = config;
