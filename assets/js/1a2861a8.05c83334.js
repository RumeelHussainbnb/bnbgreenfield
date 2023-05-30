"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9799],{98449:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=o(87462),n=(o(67294),o(3905));const a={title:"Governance",order:7},r="Governance",l={unversionedId:"guide/greenfield-blockchain/modules/governance",id:"guide/greenfield-blockchain/modules/governance",title:"Governance",description:"Since Greenfield Governance is derived from Cosmos, The majority of the content in this page is copied from the",source:"@site/docs/guide/greenfield-blockchain/modules/governance.md",sourceDirName:"guide/greenfield-blockchain/modules",slug:"/guide/greenfield-blockchain/modules/governance",permalink:"/docs/guide/greenfield-blockchain/modules/governance",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/greenfield-blockchain/modules/governance.md",tags:[],version:"current",frontMatter:{title:"Governance",order:7},sidebar:"guideSidebar",previous:{title:"Consensus and Staking",permalink:"/docs/guide/greenfield-blockchain/modules/consensus-and-staking"},next:{title:"Data Availability Challenge",permalink:"/docs/guide/greenfield-blockchain/modules/data-availability-challenge"}},s={},d=[{value:"Governance Parameters",id:"governance-parameters",level:2},{value:"Submit proposal:",id:"submit-proposal",level:2},{value:"Deposit:",id:"deposit",level:2},{value:"Voting period:",id:"voting-period",level:2},{value:"Tally",id:"tally",level:2}],p={toc:d};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"governance"},"Governance"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Since Greenfield Governance is derived from Cosmos, The majority of the content in this page is copied from the\n",(0,n.kt)("a",{parentName:"p",href:"hhttps://hub.cosmos.network/main/governance/process.html"},"Cosmos SDK"),".")),(0,n.kt)("p",null,"The Greenfield BlockChain utilizes on-chain governance, which achieved by steps listed below:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Proposal submission"),": Proposal is submitted to the blockchain with a deposit;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Vote"),": Once deposit reaches threshold ",(0,n.kt)("inlineCode",{parentName:"li"},"MinDeposit"),", proposal is confirmed and vote opens. Bonded BNB holders can vote on the proposal;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Execution"),": After voting period, the votes are tallied and if proposal ",(0,n.kt)("inlineCode",{parentName:"li"},"passed"),", the messages in the proposal will be executed.")),(0,n.kt)("p",null,"There are various types of proposals. This includes, but is not limited to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Proposals for creating and editing validators, staking rewards distribution, details as described in ",(0,n.kt)("a",{parentName:"li",href:"/docs/guide/greenfield-blockchain/modules/consensus-and-staking"},"staking module"),";"),(0,n.kt)("li",{parentName:"ul"},"Proposals for creating and removing storage provider which specified in ",(0,n.kt)("a",{parentName:"li",href:"/docs/guide/greenfield-blockchain/modules/storage-provider"},"storage provider module"),";"),(0,n.kt)("li",{parentName:"ul"},"Parameters change proposal for ",(0,n.kt)("inlineCode",{parentName:"li"},"Greenfield")," modules;"),(0,n.kt)("li",{parentName:"ul"},"Parameters change proposals for ",(0,n.kt)("inlineCode",{parentName:"li"},"BSC")," smart contracts;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"BSC")," smart contracts upgrade proposals.")),(0,n.kt)("h2",{id:"governance-parameters"},"Governance Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Minimum deposit"),": The threshold for transiting a proposal from deposit period to vote period;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Maximum deposit period"),": The most lasting time for depositing a proposal. If it reaches ",(0,n.kt)("inlineCode",{parentName:"li"},"min_deposit"),", this period ends immediately;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Voting period"),": The time lasted for validators and delegators to vote on a proposal;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Quorum"),": Minimum proportion of participating voting power, measured by number of bonded BNB tokens;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pass threshold"),": Minimum proportion of ",(0,n.kt)("inlineCode",{parentName:"li"},"Yes")," votes (excluding Abstain votes), measured by number of bonded BNB;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Veto threshold"),": Maximum proportion of ",(0,n.kt)("inlineCode",{parentName:"li"},"NoWithVeto")," (counts as No but also adds a Veto vote).")),(0,n.kt)("h2",{id:"submit-proposal"},"Submit proposal:"),(0,n.kt)("p",null,"In ",(0,n.kt)("inlineCode",{parentName:"p"},"Greenfield"),", any account can submit proposals by sending ",(0,n.kt)("inlineCode",{parentName:"p"},"MsgSubmitProposal")," transaction."),(0,n.kt)("h2",{id:"deposit"},"Deposit:"),(0,n.kt)("p",null,"Proposals must be submitted with a deposit in ",(0,n.kt)("inlineCode",{parentName:"p"},"BNB")," defined by the ",(0,n.kt)("inlineCode",{parentName:"p"},"MinDeposit")," param, the deposit is required as spam\nprotection. Any BNB holder can contribute to this deposit to support proposal, the submitter is not mandatory to provide\nthe deposit itself, thought it is usually filled by proposal maker. To transit a newly created proposal into active status,\n",(0,n.kt)("inlineCode",{parentName:"p"},"MinDeposit")," need to be met, otherwise proposal will stay inactive. Once deposit end time comes, the proposal will be\ndestroyed and all deposits will be burned. For\nproposals which deposits reaches minimum threshold, status turn into active and ",(0,n.kt)("inlineCode",{parentName:"p"},"voting period")," starts."),(0,n.kt)("h2",{id:"voting-period"},"Voting period:"),(0,n.kt)("p",null,"All bonded BNB holders get the right to vote on proposals with one of following options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Yes"),": Approval of the proposal in its current form;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"No"),": Disapproval of the proposal in its current form;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"NoWithVeto"),": Which indicates a proposal either (1) spam (2) infringes on minority interests (3) violates rules of engagement;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Abstain"),": The voter wishes to contribute to quorum without voting for or against a proposal.")),(0,n.kt)("p",null,"Voters may change their vote at any time before voting period ends. Be aware that voting power is measured in terms\nof bonded BNB, and delegators inherit the vote of validators they are delegated to. If a delegator votes after their validator,\nthe delegator's vote will override the validator's vote."),(0,n.kt)("h2",{id:"tally"},"Tally"),(0,n.kt)("p",null,"Following requirements need to be met for a proposal to be accepted by the end of voting period:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Quorum"),": A minimal of 33.40% of total bonded BNB(voting power) need to be participated in the vote;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Threshold"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"Yes")," votes should be more than 50% excluding ",(0,n.kt)("inlineCode",{parentName:"li"},"Abstain")," votes;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Veto"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"NoWithVeto")," votes is less than 33.40%, including Abstain votes.")),(0,n.kt)("p",null,"If a proposal is approved or rejected without ",(0,n.kt)("inlineCode",{parentName:"p"},"NoWithVeto"),", deposit will be refunded to depositor. In the case where\n",(0,n.kt)("inlineCode",{parentName:"p"},"NoWithVeto")," exceed 33.40% , deposits will be burned and proposal information will be removed from state."),(0,n.kt)("p",null,"Validators not in the active set can cast a vote, but their voting power (including their delegators)\nwill not count toward the vote if they are not in the active set when the voting period ends. That means that if BNB\nis delegated to a validator that is jailed, tombstone, or outside the active set at the time that the voting period\nends, that BNB's stake-weight will not count in the vote."))}m.isMDXComponent=!0}}]);