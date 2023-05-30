"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[6268],{99354:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={title:"Get Nonce",order:1},s="GetNonce",d={unversionedId:"api-sdk/storgae-provider-rest/auth/get_nonce",id:"api-sdk/storgae-provider-rest/auth/get_nonce",title:"Get Nonce",description:"RESTful API Description",source:"@site/docs/api-sdk/storgae-provider-rest/auth/get_nonce.md",sourceDirName:"api-sdk/storgae-provider-rest/auth",slug:"/api-sdk/storgae-provider-rest/auth/get_nonce",permalink:"/docs/api-sdk/storgae-provider-rest/auth/get_nonce",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-sdk/storgae-provider-rest/auth/get_nonce.md",tags:[],version:"current",frontMatter:{title:"Get Nonce",order:1},sidebar:"apiReferenceSidebar",previous:{title:"Greenfield SP RESTful APIs Headers",permalink:"/docs/api-sdk/storgae-provider-rest/referenece/gnfd_headers"},next:{title:"Update User Account Key",permalink:"/docs/api-sdk/storgae-provider-rest/auth/update_key"}},p={},o=[{value:"RESTful API Description",id:"restful-api-description",level:2},{value:"HTTP Request Format",id:"http-request-format",level:2},{value:"HTTP Request Header",id:"http-request-header",level:2},{value:"HTTP Request Parameter",id:"http-request-parameter",level:2},{value:"Path Parameter",id:"path-parameter",level:3},{value:"Query Parameter",id:"query-parameter",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Request Syntax",id:"request-syntax",level:2},{value:"Response Header",id:"response-header",level:3},{value:"HTTP Response Parameter",id:"http-response-parameter",level:2},{value:"Response Body",id:"response-body",level:3},{value:"Response Syntax",id:"response-syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Get nonce for a new combination of user address and app domain",id:"example-1-get-nonce-for-a-new-combination-of-user-address-and-app-domain",level:3},{value:"request",id:"request",level:4},{value:"response",id:"response",level:4},{value:"Example 2: Get nonce for a existing combination of user address and app domain",id:"example-2-get-nonce-for-a-existing-combination-of-user-address-and-app-domain",level:3},{value:"response",id:"response-1",level:4}],i={toc:o};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getnonce"},"GetNonce"),(0,r.kt)("h2",{id:"restful-api-description"},"RESTful API Description"),(0,r.kt)("p",null,"This API is used to query the current user account key record."),(0,r.kt)("h2",{id:"http-request-format"},"HTTP Request Format"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Desscription"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Host"),(0,r.kt)("td",{parentName:"tr",align:null},"gnfd-testnet-sp-*.bnbchain.org")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Path"),(0,r.kt)("td",{parentName:"tr",align:null},"/auth/request_nonce")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"GET")))),(0,r.kt)("h2",{id:"http-request-header"},"HTTP Request Header"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"X-Gnfd-User-Address"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"user address for the account key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"X-Gnfd-App-Domain"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"app domain for the account key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"no need to pass in any authorization info")))),(0,r.kt)("h2",{id:"http-request-parameter"},"HTTP Request Parameter"),(0,r.kt)("h3",{id:"path-parameter"},"Path Parameter"),(0,r.kt)("p",null,"The request does not have a path parameter."),(0,r.kt)("h3",{id:"query-parameter"},"Query Parameter"),(0,r.kt)("p",null,"The request does not have a query parameter."),(0,r.kt)("h3",{id:"request-body"},"Request Body"),(0,r.kt)("p",null,"The request does not have a request body."),(0,r.kt)("h2",{id:"request-syntax"},"Request Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET /auth/request_nonce HTTP/1.1\nHost: gnfd-testnet-sp-*.bnbchain.org\nX-Gnfd-User-Address: UserAddress\nX-Gnfd-App-Domain: AppDomain\n")),(0,r.kt)("h3",{id:"response-header"},"Response Header"),(0,r.kt)("p",null,"The response returns the following HTTP headers."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"value is ",(0,r.kt)("inlineCode",{parentName:"td"},"application/json"))))),(0,r.kt)("h2",{id:"http-response-parameter"},"HTTP Response Parameter"),(0,r.kt)("h3",{id:"response-body"},"Response Body"),(0,r.kt)("p",null,"If the request is successful, the service sends back an HTTP 200 response."),(0,r.kt)("p",null,"The following data is returned in JSON format by the service."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"current_nonce"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"current nonce for given account address and app domain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"next_nonce"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"next nonce for given account address and app domain, which will be used for new account key registration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"current_public_key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"current public key for given account address and app domain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expiry_date"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"expire date for the current public key")))),(0,r.kt)("h2",{id:"response-syntax"},"Response Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},"HTTP/1.1 200\nContent-Type: application/json\n\nJSON Body\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"example-1-get-nonce-for-a-new-combination-of-user-address-and-app-domain"},"Example 1: Get nonce for a new combination of user address and app domain"),(0,r.kt)("h4",{id:"request"},"request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET /auth/request_nonce HTTP/1.1\nHost: gnfd-testnet-sp-4.bnbchain.org\nX-Gnfd-User-Address: 0x3d0a49B091ABF8940AD742c0139416cEB30CdEe0\nX-Gnfd-App-Domain: https://greenfield.dapp.io\n")),(0,r.kt)("h4",{id:"response"},"response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "current_nonce": 0,\n    "next_nonce": 1,\n    "current_public_key": "",\n    "expiry_date": "1683885489612"\n}\n')),(0,r.kt)("h3",{id:"example-2-get-nonce-for-a-existing-combination-of-user-address-and-app-domain"},"Example 2: Get nonce for a existing combination of user address and app domain"),(0,r.kt)("h4",{id:"response-1"},"response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "current_nonce": 7,\n    "next_nonce": 8,\n    "current_public_key": "ba149b8e932b38cf4098bad7f5189e23ad59672d5e6cb141c515e0e34ea9652e",\n    "expiry_date": "1683885489612"\n}\n')))}u.isMDXComponent=!0}}]);