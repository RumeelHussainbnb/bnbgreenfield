"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[5740],{89250:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>k,frontMatter:()=>u,metadata:()=>g,toc:()=>f});var i=a(87462),r=(a(67294),a(3905)),s=a(26389),n=a(94891),l=a(75190),o=a(47507),p=a(24310),m=a(63303),d=(a(75035),a(85162));const u={id:"head-group-nft",title:"Queries a group with EIP712 standard metadata info",description:"Queries a group with EIP712 standard metadata info",sidebar_label:"Queries a group with EIP712 standard metadata info",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"HeadGroupNFT",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{meta_data:{type:"object",properties:{description:{type:"string",title:"description"},external_url:{type:"string",title:"externalUrl a link to external site to view NFT"},group_name:{type:"string",title:"name of group NFT"},image:{type:"string",title:"image is the link to image"},attributes:{type:"array",items:{type:"object",properties:{trait_type:{type:"string"},value:{type:"string"}}},title:"attributes"}}}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"token_id",in:"path",required:!0,schema:{type:"string"}}],tags:["Query"],description:"Queries a group with EIP712 standard metadata info",method:"get",path:"/greenfield/storage/head_group_nft/{token_id}",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Queries a group with EIP712 standard metadata info",description:{type:"text/plain"},url:{path:["greenfield","storage","head_group_nft",":token_id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"token_id"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},c=void 0,g={unversionedId:"greenfield-api/head-group-nft",id:"greenfield-api/head-group-nft",title:"Queries a group with EIP712 standard metadata info",description:"Queries a group with EIP712 standard metadata info",source:"@site/docs/greenfield-api/head-group-nft.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/head-group-nft",permalink:"/docs/greenfield-api/head-group-nft",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"head-group-nft",title:"Queries a group with EIP712 standard metadata info",description:"Queries a group with EIP712 standard metadata info",sidebar_label:"Queries a group with EIP712 standard metadata info",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"HeadGroupNFT",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{meta_data:{type:"object",properties:{description:{type:"string",title:"description"},external_url:{type:"string",title:"externalUrl a link to external site to view NFT"},group_name:{type:"string",title:"name of group NFT"},image:{type:"string",title:"image is the link to image"},attributes:{type:"array",items:{type:"object",properties:{trait_type:{type:"string"},value:{type:"string"}}},title:"attributes"}}}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"token_id",in:"path",required:!0,schema:{type:"string"}}],tags:["Query"],description:"Queries a group with EIP712 standard metadata info",method:"get",path:"/greenfield/storage/head_group_nft/{token_id}",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Queries a group with EIP712 standard metadata info",description:{type:"text/plain"},url:{path:["greenfield","storage","head_group_nft",":token_id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"token_id"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Queries a list of HeadGroupMember items.",permalink:"/docs/greenfield-api/head-group-member"},next:{title:"Queries a object with specify name.",permalink:"/docs/greenfield-api/head-object"}},y={},f=[{value:"Queries a group with EIP712 standard metadata info",id:"queries-a-group-with-eip712-standard-metadata-info",level:2}],h={toc:f};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"queries-a-group-with-eip712-standard-metadata-info"},"Queries a group with EIP712 standard metadata info"),(0,r.kt)("p",null,"Queries a group with EIP712 standard metadata info"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"token_id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"A successful response.")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"meta_data"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"description",qualifierMessage:void 0,schema:{type:"string",title:"description"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"external_url",required:!1,schemaName:"externalUrl a link to external site to view NFT",qualifierMessage:void 0,schema:{type:"string",title:"externalUrl a link to external site to view NFT"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"group_name",required:!1,schemaName:"name of group NFT",qualifierMessage:void 0,schema:{type:"string",title:"name of group NFT"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"image",required:!1,schemaName:"image is the link to image",qualifierMessage:void 0,schema:{type:"string",title:"image is the link to image"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"attributes"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(p.Z,{collapsible:!1,name:"trait_type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "meta_data": {\n    "description": "string",\n    "external_url": "string",\n    "group_name": "string",\n    "image": "string",\n    "attributes": [\n      {\n        "trait_type": "string",\n        "value": "string"\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(d.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"An unexpected error response.")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"details"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(p.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);