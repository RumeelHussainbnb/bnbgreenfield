"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[6430],{8842:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=a(87462),o=(a(67294),a(3905));const s={title:"TaskNode",order:12},n="TaskNode",i={unversionedId:"guide/storage-provider/services/tasknode",id:"guide/storage-provider/services/tasknode",title:"TaskNode",description:"TaskNode is the execution unit of SP background tasks. It is a resource consuming service, for which we introduce a",source:"@site/docs/guide/storage-provider/services/tasknode.md",sourceDirName:"guide/storage-provider/services",slug:"/guide/storage-provider/services/tasknode",permalink:"/docs/guide/storage-provider/services/tasknode",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/storage-provider/services/tasknode.md",tags:[],version:"current",frontMatter:{title:"TaskNode",order:12},sidebar:"guideSidebar",previous:{title:"Garbage Collection",permalink:"/docs/guide/storage-provider/services/gc"},next:{title:"BSDB",permalink:"/docs/guide/storage-provider/services/bsdb"}},c={},l=[{value:"Resource manager",id:"resource-manager",level:2},{value:"Example",id:"example",level:3},{value:"Task",id:"task",level:2},{value:"Replicate task",id:"replicate-task",level:3},{value:"Key Workflow",id:"key-workflow",level:4},{value:"Ask secondary SP Approval",id:"ask-secondary-sp-approval",level:5},{value:"Load and encode object segments data",id:"load-and-encode-object-segments-data",level:5},{value:"Replicate piece data to secondary SP",id:"replicate-piece-data-to-secondary-sp",level:5},{value:"GC task",id:"gc-task",level:3}],d={toc:l};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tasknode"},"TaskNode"),(0,o.kt)("p",null,"TaskNode is the execution unit of SP background tasks. It is a resource consuming service, for which we introduce a\nresource manager, which will stop pulling(supported in the future) or accept tasks when the resource limit is reached."),(0,o.kt)("h2",{id:"resource-manager"},"Resource manager"),(0,o.kt)("p",null,"ResourceManager is the subsystem of SP, it tracks and accounts for resource usage in the stack, from the internals to\nthe application, and provides a mechanism to limit resource usage according to a user configurable policy. The basic\nresources accounted by the ResourceManager include memory, connections, and file  descriptors. These account for both\nspace and time used by the stack, as each resource has a direct effect on the system availability and performance. The\nmodus operandi of the resource manager is to restrict resource usage at the time of reservation. When a component of\nthe stack needs to use a resource, it reserves it in the appropriate scope. The resource manager gates the reservation\nagainst the scope applicable limits; if the limit is exceeded, then an error is up the component to act accordingly.\nAt the lower levels of the stack, this will normally signal a failure of some sorts, like failing to opening a connection,\nwhich will propagate to the programmer. Some components may be able to handle resource reservation failure more gracefully."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"    scope, err := serviceScope.BeginSpan()\n    if err != nil { ... }\n    defer scope.Done()\n\n    if err := scope.ReserveMemory(...); err != nil { ... }\n    // ... use memory\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"refer to")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/libp2p/go-libp2p/blob/master/core/network/"},"go-libp2p")),(0,o.kt)("h2",{id:"task"},"Task"),(0,o.kt)("h3",{id:"replicate-task"},"Replicate task"),(0,o.kt)("h4",{id:"key-workflow"},"Key Workflow"),(0,o.kt)("h5",{id:"ask-secondary-sp-approval"},"Ask secondary SP Approval"),(0,o.kt)("p",null,"TaskNode receives the replicate task, it will call the P2P ",(0,o.kt)("a",{parentName:"p",href:"/docs/guide/storage-provider/services/p2p"},"GetApprovalRequest")," to send requests to all SPs,\nand do basic preparations, includes begin resource span, get SP storage params(segment size, replication number etc.),\nand generates replicate context for replication."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// ReplicateContext defines the context of replicating object\ntype ReplicateContext struct {\n    object           *storagetypes.ObjectInfo\n    scope            rcmgr.ResourceScopeSpan\n    storageParams    *storagetypes.Params\n    sp               map[uint32]*ApprovalSP\n    backupSP         []*ApprovalSP\n    replicating      map[uint32]struct{} // the replicate idx being replicated\n    replicateRetry   map[uint32]struct{} // the replicate idx has been failed, and waiting to try again\n    replicateCh      chan *ReplicateMessage\n    mux              sync.RWMutex\n    loadSegmentRetry int\n    logger           context.Context\n    innerErr         error\n}\n")),(0,o.kt)("h5",{id:"load-and-encode-object-segments-data"},"Load and encode object segments data"),(0,o.kt)("p",null,"Start the background goroutine to serially load object's segments from the piece store and encodes segment by EC,\ntransfers the result of EC to foreground goroutine by ReplicateMessage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// ReplicateMessage defines the replication info between load/encode and replicate goroutines\ntype ReplicateMessage struct {\n    segment    uint32    // the index of segment \n    replicates []uint32  // the index set of replication\n    data       [][]byte  // the replication piece data\n}\n")),(0,o.kt)("h5",{id:"replicate-piece-data-to-secondary-sp"},"Replicate piece data to secondary SP"),(0,o.kt)("p",null,"Foreground goroutine receives the replicate message and replicates the piece data to the different secondary SPs.\nIf some of SPs fails, it will load and encode segments again from the piece store, it will consume less memory. "),(0,o.kt)("h3",{id:"gc-task"},"GC task"),(0,o.kt)("p",null,"We'll introduce a gc system for SP to delete the payload data and metadata of SP."))}p.isMDXComponent=!0}}]);