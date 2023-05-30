"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[647],{53238:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={title:"Overview",order:1},o="Overview",s={unversionedId:"guide/dapp/overview",id:"guide/dapp/overview",title:"Overview",description:"Pre-requisite Readings",source:"@site/docs/guide/dapp/overview.md",sourceDirName:"guide/dapp",slug:"/guide/dapp/overview",permalink:"/docs/guide/dapp/overview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/dapp/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",order:1},sidebar:"guideSidebar",previous:{title:"Run Mainnet SP node",permalink:"/docs/guide/storage-provider/run-book/run-mainnet-SP-node"},next:{title:"Quick Start",permalink:"/docs/guide/dapp/quick-start"}},l={},d=[{value:"Resource Mirror",id:"resource-mirror",level:2},{value:"Resource Operating Primitives",id:"resource-operating-primitives",level:2},{value:"SDK and Examples",id:"sdk-and-examples",level:2},{value:"What is more",id:"what-is-more",level:2}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("h4",{parentName:"admonition",id:"pre-requisite-readings"},"Pre-requisite Readings"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/guide/greenfield-blockchain/modules/cross-chain"},"Native cross chain communication protocol")))),(0,n.kt)("p",null,"The real power of the Greenfield ecosystem lies in that the platform is not only designed to store the data, but also to\nsupport the creation of value based on the data assets and its related economy."),(0,n.kt)("p",null,"The asset traits of the data are firstly established on the permissions, e.g. the permission to read the data. When\nthis right is disconnected from the data itself, they become tradable assets and enlarge the value of the data.\nThe data permissions can be transferred cross-chain onto BSC and become digital assets there. This creates a\nvariety of possibilities to integrate these assets with the existing DeFi protocols and models on BSC."),(0,n.kt)("p",null,"This gets even further enhanced by the smart contracts on BSC, which enjoy the same address format as accounts on the\nGreenfield blockchain and can be the owners of the data objects and inherit different permissions. This will unleash\nmany new business opportunities based on the data and its operations."),(0,n.kt)("h2",{id:"resource-mirror"},"Resource Mirror"),(0,n.kt)("p",null,"The Greenfield Blockchain provides a comprehensive set of resources that can be mirrored on the BNB Smart Chain (BSC).\nThis includes buckets, objects, and groups, which can be stored and managed on the BSC as non-fungible tokens (NFTs)\nconforming to the ERC-721 standard."),(0,n.kt)("p",null,"A bucket is a logical container for storing objects in Greenfield. An object, on the other hand, is a fundamental unit\nof storage in Greenfield that represents a file consisting of data and its associated metadata.\nLastly, a group is a collection of accounts with the same permissions."),(0,n.kt)("p",null,"These resources can be mirrored on the BSC as ERC-721 NFTs, along with the members within a group, which represent\npermissions to specify resources, that can be mirrored as ERC-1155 token. At present, the NFTs are not transferable,\nbut the transferability feature will be added in the near future."),(0,n.kt)("p",null,"Once these resources are mirrored on BSC, they can be directly managed by smart contracts on BSC.\nThese operations will directly affect the storage format, access permissions, and other aspects of the data on greenfield.\nIn other words, any changes made to the decentralized application on BSC will also reflect changes on Greenfield.\nThis integration between Greenfield Blockchain and BNB Smart Chain allows for greater flexibility and accessibility\nwhen it comes to accessing and manipulating data, ultimately leading to a more streamlined and efficient\ndata management process."),(0,n.kt)("h2",{id:"resource-operating-primitives"},"Resource Operating Primitives"),(0,n.kt)("p",null,"A number of cross-chain primitives have been defined on BSC to enable developers to manage greenfield resources on the\nBSC directly, without the need for intermediaries."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"BNB"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"transfer BNB bidirectionally between BSC and Greenfield")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Bucket"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"create a bucket on BSC"),(0,n.kt)("li",{parentName:"ul"},"delete a bucket on BSC"),(0,n.kt)("li",{parentName:"ul"},"mirror bucket from Greenfield to BSC")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Object"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"delete an object on BSC "),(0,n.kt)("li",{parentName:"ul"},"mirror object from Greenfield to BSC"),(0,n.kt)("li",{parentName:"ul"},"grant/revoke permissions of objects on BSC to accounts/groups"),(0,n.kt)("li",{parentName:"ul"},"create an object on BSC (pending)"),(0,n.kt)("li",{parentName:"ul"},"copy objects on BSC (pending)"),(0,n.kt)("li",{parentName:"ul"},"Kick off the execution of an object on BSC (pending)")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Group"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"create a group on BSC"),(0,n.kt)("li",{parentName:"ul"},"delete a group on BSC"),(0,n.kt)("li",{parentName:"ul"},"change group members on BSC"),(0,n.kt)("li",{parentName:"ul"},"mirror group from Greenfield to BSC")),(0,n.kt)("p",null,"Users can also approve smart contracts to operate the aforementioned resources instead, check the ",(0,n.kt)("a",{parentName:"p",href:"/docs/guide/dapp/permisson-control"},"design")," for more details."),(0,n.kt)("p",null,"Greenfield's cross-chain programming capability is based on these minimum resource operation interface.\nDapp smart contracts can flexibly combine and call these cross-chain interfaces to achieve more complex application logic."),(0,n.kt)("p",null,"For more detailed interface, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/guide/dapp/primitive-interface"},"here"),",\nand for the deployment address of cross-chain smart contracts on BSC, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/guide/dapp/contract-list"},"here"),"."),(0,n.kt)("h2",{id:"sdk-and-examples"},"SDK and Examples"),(0,n.kt)("p",null,"Greenfield provides a convenient ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-contracts-sdk"},"SDK")," for DApps to integrate quickly,\nwhich includes several sample codes of different paradigms."),(0,n.kt)("h2",{id:"what-is-more"},"What is more"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/guide/dapp/quick-start"},"Quick Start"),": editing permission through BSC smart contract."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/guide/dapp/primitive-interface"},"Primitives Interface"),": lean more about the primitives interfaces."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/guide/dapp/permisson-control"},"Permission Control"),": learn more about the permission control."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/guide/dapp/dapp-integration"},"Smart Contract Integration"),": learn more about how to integrate with smart contracts."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/guide/dapp/showcases"},"Showcases"),": learn more about the showcases.")))}p.isMDXComponent=!0}}]);