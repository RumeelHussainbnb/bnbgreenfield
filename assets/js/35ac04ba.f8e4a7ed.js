"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[5709],{76783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>k,frontMatter:()=>m,metadata:()=>h,toc:()=>f});var s=n(87462),a=(n(67294),n(3905)),r=n(26389),i=n(94891),c=n(75190),l=n(47507),o=n(24310),d=n(63303),p=(n(75035),n(85162));const m={id:"send-sequence",title:"SendSequence returns the send sequence of the channel",description:"SendSequence returns the send sequence of the channel",sidebar_label:"SendSequence",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"SendSequence",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{sequence:{type:"string",format:"uint64",title:"sequence of the cross chain package"}},description:"QuerySendSequenceResponse is the response type for the Query/SendSequence RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"channel_id",description:"channel id of the cross chain package.",in:"query",required:!1,schema:{type:"integer",format:"int64"}}],tags:["Query"],description:"SendSequence returns the send sequence of the channel",method:"get",path:"/cosmos/crosschain/v1/send_sequence",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"SendSequence returns the send sequence of the channel",description:{type:"text/plain"},url:{path:["cosmos","crosschain","v1","send_sequence"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"channel id of the cross chain package.",type:"text/plain"},key:"channel_id",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},u=void 0,h={unversionedId:"greenfield-api/send-sequence",id:"greenfield-api/send-sequence",title:"SendSequence returns the send sequence of the channel",description:"SendSequence returns the send sequence of the channel",source:"@site/docs/greenfield-api/send-sequence.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/send-sequence",permalink:"/docs/greenfield-api/send-sequence",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"send-sequence",title:"SendSequence returns the send sequence of the channel",description:"SendSequence returns the send sequence of the channel",sidebar_label:"SendSequence",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"SendSequence",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{sequence:{type:"string",format:"uint64",title:"sequence of the cross chain package"}},description:"QuerySendSequenceResponse is the response type for the Query/SendSequence RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"channel_id",description:"channel id of the cross chain package.",in:"query",required:!1,schema:{type:"integer",format:"int64"}}],tags:["Query"],description:"SendSequence returns the send sequence of the channel",method:"get",path:"/cosmos/crosschain/v1/send_sequence",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"SendSequence returns the send sequence of the channel",description:{type:"text/plain"},url:{path:["cosmos","crosschain","v1","send_sequence"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"channel id of the cross chain package.",type:"text/plain"},key:"channel_id",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"ReceiveSequence",permalink:"/docs/greenfield-api/receive-sequence"},next:{title:"Community Pool Queries",permalink:"/docs/greenfield-api/community-pool"}},y={},f=[{value:"SendSequence",id:"sendsequence",level:2}],g={toc:f};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"sendsequence"},"SendSequence"),(0,a.kt)("p",null,"SendSequence returns the send sequence of the channel"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(c.Z,{className:"paramsItem",param:{name:"channel_id",description:"channel id of the cross chain package.",in:"query",required:!1,schema:{type:"integer",format:"int64"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(r.Z,{mdxType:"ApiTabs"},(0,a.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"A successful response.")),(0,a.kt)("div",null,(0,a.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,a.kt)(d.Z,{mdxType:"SchemaTabs"},(0,a.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(o.Z,{collapsible:!1,name:"sequence",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"sequence of the cross chain package"},mdxType:"SchemaItem"})))),(0,a.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "sequence": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(p.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"An unexpected error response.")),(0,a.kt)("div",null,(0,a.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,a.kt)(d.Z,{mdxType:"SchemaTabs"},(0,a.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"details"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(o.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,a.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);