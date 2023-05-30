"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[7618],{63896:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={title:"Get Approval",order:1},s="GetApproval",p={unversionedId:"api-sdk/storgae-provider-rest/get_approval",id:"api-sdk/storgae-provider-rest/get_approval",title:"Get Approval",description:"RESTful API Description",source:"@site/docs/api-sdk/storgae-provider-rest/get_approval.md",sourceDirName:"api-sdk/storgae-provider-rest",slug:"/api-sdk/storgae-provider-rest/get_approval",permalink:"/docs/api-sdk/storgae-provider-rest/get_approval",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-sdk/storgae-provider-rest/get_approval.md",tags:[],version:"current",frontMatter:{title:"Get Approval",order:1},sidebar:"apiReferenceSidebar",previous:{title:"Blockchain GRPC REST",permalink:"/docs/api-sdk/grpc-rest"},next:{title:"Put Object",permalink:"/docs/api-sdk/storgae-provider-rest/put_object"}},i={},d=[{value:"RESTful API Description",id:"restful-api-description",level:2},{value:"HTTP Request Format",id:"http-request-format",level:2},{value:"HTTP Request Header",id:"http-request-header",level:2},{value:"HTTP Request Parameter",id:"http-request-parameter",level:2},{value:"Path Parameter",id:"path-parameter",level:3},{value:"Query Parameter",id:"query-parameter",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Request Syntax",id:"request-syntax",level:2},{value:"HTTP Response Header",id:"http-response-header",level:2},{value:"HTTP Response Parameter",id:"http-response-parameter",level:2},{value:"Response Body",id:"response-body",level:3},{value:"Response Syntax",id:"response-syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Create bucket",id:"example-1-create-bucket",level:3},{value:"Sample Response: Create bucket successfully",id:"sample-response-create-bucket-successfully",level:3},{value:"Example 2: Create object",id:"example-2-create-object",level:2},{value:"Sample Response: Create object successfully",id:"sample-response-create-object-successfully",level:3},{value:"Example 3: Failed to create bucket",id:"example-3-failed-to-create-bucket",level:2},{value:"Sample Response: There is an internal error in SP server",id:"sample-response-there-is-an-internal-error-in-sp-server",level:2}],o={toc:d};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getapproval"},"GetApproval"),(0,n.kt)("h2",{id:"restful-api-description"},"RESTful API Description"),(0,n.kt)("p",null,"This API is used to sign an approval for creating a bucket action or creating an object action. And it only supports ",(0,n.kt)("inlineCode",{parentName:"p"},"path-style")," requests."),(0,n.kt)("h2",{id:"http-request-format"},"HTTP Request Format"),(0,n.kt)("p",null,"This API only supports path-style requests."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Desscription"),(0,n.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Host(path-style)"),(0,n.kt)("td",{parentName:"tr",align:null},"gnfd-testnet-sp-*.bnbchain.org")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Path(path-style)"),(0,n.kt)("td",{parentName:"tr",align:null},"/greenfield/admin/v1/get-approval")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Method"),(0,n.kt)("td",{parentName:"tr",align:null},"GET")))),(0,n.kt)("h2",{id:"http-request-header"},"HTTP Request Header"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"X-Gnfd-Unsigned-Msg"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"defines unsigned msg")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api-sdk/storgae-provider-rest/referenece/gnfd_headers#authorization-header"},"Authorization")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"The authorization string of the HTTP request")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"X-Gnfd-Unsigned-Msg: ",(0,n.kt)("a",{parentName:"li",href:"/docs/api-sdk/storgae-provider-rest/referenece/gnfd_headers#createbucket-approval"},"CreateBucketApproval")),(0,n.kt)("li",{parentName:"ul"},"X-Gnfd-Unsigned-Msg: ",(0,n.kt)("a",{parentName:"li",href:"/docs/api-sdk/storgae-provider-rest/referenece/gnfd_headers#createobject-approval"},"CreateObjectApproval"))),(0,n.kt)("h2",{id:"http-request-parameter"},"HTTP Request Parameter"),(0,n.kt)("h3",{id:"path-parameter"},"Path Parameter"),(0,n.kt)("p",null,"The request does not have a path parameter."),(0,n.kt)("h3",{id:"query-parameter"},"Query Parameter"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"action"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"The action of approval:",(0,n.kt)("inlineCode",{parentName:"td"},"CreateBucket")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"CreateObject"))))),(0,n.kt)("h3",{id:"request-body"},"Request Body"),(0,n.kt)("p",null,"The request does not have a request body."),(0,n.kt)("h2",{id:"request-syntax"},"Request Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET /greenfield/admin/v1/get-approval?action=action HTTP/1.1\nHost: gnfd-testnet-sp-*.bnbchain.org\nContent-Type: ContentType\nX-Gnfd-Unsigned-Msg: UnsignedMsg\nAuthorization: Authorization\n")),(0,n.kt)("h2",{id:"http-response-header"},"HTTP Response Header"),(0,n.kt)("p",null,"The response returns the following HTTP headers."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"X-Gnfd-Request-ID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"defines trace id, trace request in sp")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api-sdk/storgae-provider-rest/referenece/gnfd_headers#x-gnfd-signed-msg"},"X-Gnfd-Signed-Msg")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"defines signed msg")))),(0,n.kt)("h2",{id:"http-response-parameter"},"HTTP Response Parameter"),(0,n.kt)("h3",{id:"response-body"},"Response Body"),(0,n.kt)("p",null,"If the request is successful, the service sends back an HTTP 200 response."),(0,n.kt)("p",null,"If you failed to send request to get approval, you will get error response body in ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-sdk/storgae-provider-rest/common/error#sp-error-response-parameter"},"XML"),"."),(0,n.kt)("h2",{id:"response-syntax"},"Response Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"HTTP/1.1 200\nX-Gnfd-Request-ID: RequestID\nX-Gnfd-Signed-Msg: SignedMsg\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"The examples given all use path-style."),(0,n.kt)("h3",{id:"example-1-create-bucket"},"Example 1: Create bucket"),(0,n.kt)("p",null,"The following request sends ",(0,n.kt)("inlineCode",{parentName:"p"},"CreateBucket")," action to get approval."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET /greenfield/admin/v1/get-approval?action=CreateBucket HTTP/1.1\nHost: gnfd-testnet-sp-*.bnbchain.org\nDate: Fri, 31 March 2023 17:32:00 GMT\nX-Gnfd-Unsigned-Msg: unsigned msg string\nAuthorization: authorization string\n")),(0,n.kt)("h3",{id:"sample-response-create-bucket-successfully"},"Sample Response: Create bucket successfully"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"HTTP/1.1 200 OK\nX-Gnfd-Request-ID: 14779951378820359452\nX-Gnfd-Signed-Msg: df5857b2ac67b491ba6d9c6632618be7fb22de13662356b593d74103408cf1af46eed90edaa77bdb65b12fc63ee3bec8314ad7bb0f3ae099ccf7dafe22abff2e01\n")),(0,n.kt)("h2",{id:"example-2-create-object"},"Example 2: Create object"),(0,n.kt)("p",null,"The following request sends ",(0,n.kt)("inlineCode",{parentName:"p"},"CreateObject")," action to get approval."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET /greenfield/admin/v1/get-approval?action=CreateObject HTTP/1.1\nHost: gnfd-testnet-sp-*.bnbchain.org\nDate: Fri, 31 March 2023 17:32:00 GMT\nX-Gnfd-Unsigned-Msg: unsigned msg string\nAuthorization: authorization string\n")),(0,n.kt)("h3",{id:"sample-response-create-object-successfully"},"Sample Response: Create object successfully"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"HTTP/1.1 200 OK\nX-Gnfd-Request-ID: 4208447844380058399\nX-Gnfd-Signed-Msg: f00daace3251076f270984e596bbd72b1b1f2a1ae0443e6f32f37cef73d541d568a542333f6a9af2f235724d2a763b3cdc0b370d978d0315b8414fa51fc32a2e00\n")),(0,n.kt)("h2",{id:"example-3-failed-to-create-bucket"},"Example 3: Failed to create bucket"),(0,n.kt)("p",null,"The following request sends ",(0,n.kt)("inlineCode",{parentName:"p"},"CreateBucket")," action to get approval."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET /greenfield/admin/v1/get-approval?action=CreateBucket HTTP/1.1\nHost: gnfd-testnet-sp-*.bnbchain.org\nDate: Fri, 31 March 2023 17:32:00 GMT\nX-Gnfd-Unsigned-Msg: unsigned msg string\nAuthorization: authorization string\n")),(0,n.kt)("h2",{id:"sample-response-there-is-an-internal-error-in-sp-server"},"Sample Response: There is an internal error in SP server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"HTTP/1.1 403 Forbidden\n\n<Error>\n    <Code>InvalidUnsignedMsg</Code>\n    <Message>The uinsigned message is not valid for creating bucket</Message>\n    <RequestId>14379357152578345503</RequestId>\n</Error>\n")))}u.isMDXComponent=!0}}]);