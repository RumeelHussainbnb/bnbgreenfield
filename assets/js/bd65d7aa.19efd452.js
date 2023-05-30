"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[1196],{92537:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var r=s(87462),a=(s(67294),s(3905));const n={title:"Signer",order:5},i="Signer",o={unversionedId:"guide/storage-provider/services/signer",id:"guide/storage-provider/services/signer",title:"Signer",description:"Signer uses the SP's private keys to sign the message, the messages to form a transaction and sign the transaction to",source:"@site/docs/guide/storage-provider/services/signer.md",sourceDirName:"guide/storage-provider/services",slug:"/guide/storage-provider/services/signer",permalink:"/docs/guide/storage-provider/services/signer",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/storage-provider/services/signer.md",tags:[],version:"current",frontMatter:{title:"Signer",order:5},sidebar:"guideSidebar",previous:{title:"Piece Store",permalink:"/docs/guide/storage-provider/services/piece-store"},next:{title:"Gateway",permalink:"/docs/guide/storage-provider/services/gateway"}},d={},p=[{value:"CreateBucketMsg",id:"createbucketmsg",level:2},{value:"MsgCreateObject",id:"msgcreateobject",level:2},{value:"IntegrityHash",id:"integrityhash",level:2},{value:"MsgSealObject",id:"msgsealobject",level:2},{value:"GetApprovalRequest",id:"getapprovalrequest",level:2},{value:"GetApprovalResponse",id:"getapprovalresponse",level:2}],c={toc:p};function g(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"signer"},"Signer"),(0,a.kt)("p",null,"Signer uses the SP's private keys to sign the message, the messages to form a transaction and sign the transaction to\nbroadcast it to the Greenfield BlockChain, or the messages exchanged between SPs."),(0,a.kt)("h2",{id:"createbucketmsg"},"CreateBucketMsg"),(0,a.kt)("p",null,"Before the client creates a bucket, it needs to send the MsgCreateBucket to the primary SP to obtain approval. If the SP\nis willing to serve the bucket, it will sign it by ApprovalPrivateKey, and the client broadcasts the message signed by\nthe SP's ApprovalPrivateKey to the chain."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'message MsgCreateBucket {\n    option (cosmos.msg.v1.signer) = "creator";\n    \n    // creator defines the account address of bucket creator, it is also the bucket owner.\n    string creator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n    // bucket_name defines a globally unique name of bucket\n    string bucket_name = 2;\n    // visibility means the bucket is private or public. if private, only bucket owner or grantee can read it,\n    // otherwise every greenfield user can read it.\n    VisibilityType visibility = 3;\n    // payment_address defines an account address specified by bucket owner to pay the read fee. Default: creator\n    string payment_address = 4 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n    // primary_sp_address defines the address of primary sp.\n    string primary_sp_address = 6 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n    // primary_sp_approval defines the approval info of the primary SP which indicates that primary sp confirm the user\'s request.\n    Approval primary_sp_approval = 7;\n    // charged_read_quota defines the read data that users are charged for, measured in bytes.\n    // The available read data for each user is the sum of the free read data provided by SP and\n    // the ChargeReadQuota specified here.\n    uint64 charged_read_quota = 8;\n}\n\n// Approval is the signature information returned by the Primary Storage Provider (SP) to the user\n// after allowing them to create a bucket or object, which is then used for verification on the chain\n// to ensure agreement between the Primary SP and the user."\nmessage Approval {\n  // expired_height is the block height at which the signature expires.\n  uint64 expired_height = 1;\n  // The signature needs to conform to the EIP 712 specification.\n  bytes sig = 2;\n}\n')),(0,a.kt)("h2",{id:"msgcreateobject"},"MsgCreateObject"),(0,a.kt)("p",null,"Before the client creates a object, it needs to send the MsgCreateObject to the primary SP to obtain approval. If the SP\nis willing to serve the bucket, it will sign it by ApprovalPrivateKey, and the client broadcasts the message signed by\nthe SP's ApprovalPrivateKey to the chain. SP fills the ExpiredHeight of PrimarySpApproval."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'message MsgCreateBucket {\n    option (cosmos.msg.v1.signer) = "creator";\n    \n    // creator defines the account address of bucket creator, it is also the bucket owner.\n    string creator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n    // bucket_name defines a globally unique name of bucket\n    string bucket_name = 2;\n    // visibility means the bucket is private or public. if private, only bucket owner or grantee can read it,\n    // otherwise every greenfield user can read it.\n    VisibilityType visibility = 3;\n    // payment_address defines an account address specified by bucket owner to pay the read fee. Default: creator\n    string payment_address = 4 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n    // primary_sp_address defines the address of primary sp.\n    string primary_sp_address = 6 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n    // primary_sp_approval defines the approval info of the primary SP which indicates that primary sp confirm the user\'s request.\n    Approval primary_sp_approval = 7;\n    // charged_read_quota defines the read data that users are charged for, measured in bytes.\n    // The available read data for each user is the sum of the free read data provided by SP and\n    // the ChargeReadQuota specified here.\n    uint64 charged_read_quota = 8;\n}\n\n// Approval is the signature information returned by the Primary Storage Provider (SP) to the user\n// after allowing them to create a bucket or object, which is then used for verification on the chain\n// to ensure agreement between the Primary SP and the user."\nmessage Approval {\n  // expired_height is the block height at which the signature expires.\n  uint64 expired_height = 1;\n  // The signature needs to conform to the EIP 712 specification.\n  bytes sig = 2;\n}\n')),(0,a.kt)("h2",{id:"integrityhash"},"IntegrityHash"),(0,a.kt)("p",null,"SP stores object payload data, it also saves the integrity hash and signs it, which will be used for seal object, and\nthese integrity hashes and signatures will also be used for challenge."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"// SignIntegrityHashRequest is request type for the SignIntegrityHash RPC method.\nmessage SignIntegrityHashRequest {\n    // data defines the Hash set that would be calculated to IntegrityHash and signed by the PrimarySP approval address.\n    repeated bytes data = 1;\n    // object_id defines the unique id of the object.\n    uint64 object_id = 2;\n}\n\n// SignIntegrityHashResponse is response type for the SignIntegrityHash RPC method.\nmessage SignIntegrityHashResponse {\n    // integrity_hash defines the a Hash val that calculated by the input.\n    bytes integrity_hash = 1;\n    // signature defines the MsgCreateObject signature that signed by the PrimarySP approval address.\n    bytes signature = 2;\n}\n")),(0,a.kt)("h2",{id:"msgsealobject"},"MsgSealObject"),(0,a.kt)("p",null,"Primary SP signs the MsgSealObject and broadcasts it on Greenfield BlockChain."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'message MsgSealObject {\n    option (cosmos.msg.v1.signer) = "operator";\n    \n    // operator defines the account address of primary SP\n    string operator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n    // bucket_name defines the name of the bucket where the object is stored.\n    string bucket_name = 2;\n    // object_name defines the name of object to be sealed.\n    string object_name = 3;\n    // secondary_sp_addresses defines a list of storage provider which store the redundant data.\n    repeated string secondary_sp_addresses = 4 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n    // secondary_sp_signatures defines the signature of the secondary sp that can\n    // acknowledge that the payload data has received and stored.\n    repeated bytes secondary_sp_signatures = 5;\n}\n')),(0,a.kt)("h2",{id:"getapprovalrequest"},"GetApprovalRequest"),(0,a.kt)("p",null,"Primary SP sends GetApprovalRequest to other SPs, asking if they are willing to serve as obeject's secondary SP through\nthe p2p protocol."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"// GetApprovalRequest defines the request of getting approval\nmessage GetApprovalRequest {\n    // object_info define the object info for getting approval\n    bnbchain.greenfield.storage.ObjectInfo object_info = 1;\n    // sp_operator_address define sp operator public key\n    string sp_operator_address = 2;\n    // signature define the signature of sp sign the msg\n    bytes signature = 4;\n}\n")),(0,a.kt)("h2",{id:"getapprovalresponse"},"GetApprovalResponse"),(0,a.kt)("p",null,"SP ack the GetApprovalRequest by GetApprovalResponse with its signature."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"// GetApprovalResponse defines the response of getting approval\nmessage GetApprovalResponse {\n  // object_info define the object info for getting approval\n  bnbchain.greenfield.storage.ObjectInfo object_info = 1;\n  // sp_operator_address define sp operator public key\n  string sp_operator_address = 2;\n  // expired_time defines the approval valid deadline\n  int64 expired_time = 3;\n  // refused_reason defines the reason of refusing\n  string refused_reason = 4;\n  // signature define the signature of sp sign the msg\n  bytes signature = 5;\n}\n")))}g.isMDXComponent=!0}}]);