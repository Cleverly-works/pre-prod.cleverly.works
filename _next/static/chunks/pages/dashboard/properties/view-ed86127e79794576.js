(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8521],{13625:function(e,n,t){"use strict";var o,i=t(51174),a=t(67294),s=t(45697),l=t(5152),r=t.n(l),d=t(10367),c=t(76312),u=t(18645),m=r()(function(){return Promise.all([t.e(4870),t.e(6403),t.e(4411)]).then(t.bind(t,80617))},{ssr:!1,loading:function(){return a.createElement(u.Z,{indicator:a.createElement(c.Z,null)})}}),v=function(e){var n=e.businessHours,t=e.buttonIcons,o=e.dateClick,i=e.dayMaxEvents,s=e.editable,l=e.expandRows,r=e.eventClick,d=e.eventContent,c=e.events,u=(e.hasLoading,e.headerToolbar),v=e.height,h=e.initialDate,p=e.initialView,f=e.navLinks,b=e.nowIndicator,g=e.selectable,j=e.weekNumbers;return a.createElement(x,null,a.createElement(m,{businessHours:n,buttonIcons:t,dateClick:o,dayMaxEvents:i,editable:s,expandRows:l,eventClick:r,eventContent:d,events:c,height:v,headerToolbar:u,initialDate:h,initialView:p,navLinks:f,nowIndicator:b,selectable:g,weekNumbers:j}))};v.displayName="Calendar";var x=d.ZP.div(o||(o=(0,i.Z)(["\n  @media (max-width: 700px) {\n    .fc-header-toolbar {\n      flex-direction: column;\n    }\n  }\n"])));v.propTypes={businessHours:s.bool,buttonIcons:s.bool,dateClick:s.func,dayMaxEvents:s.bool,editable:s.bool,expandRows:s.bool,eventClick:s.func,eventContent:s.func,events:(0,s.oneOfType)([s.array,s.func]),hasLoading:s.bool,headerToolbar:s.object,height:(0,s.oneOfType)([s.number,s.string]),initialDate:s.string,initialView:s.string,navLinks:s.bool,nowIndicator:s.bool,selectable:s.bool,weekNumbers:s.bool},v.defaultProps={businessHours:!1,buttonIcons:!0,dayMaxEvents:!0,editable:!1,expandRows:!1,hasLoading:!0,headerToolbar:{center:"title",end:"listWeek,dayGridMonth,timeGridWeek,timeGridDay",start:"prevYear,prev,next,nextYear today"},height:"auto",initialView:"listWeek",navLinks:!0,nowIndicator:!0,selectable:!1,weekNumbers:!1},n.Z=v},23233:function(e,n){"use strict";n.Z={camelize:function(e){return e.replace(/(?:^\w|[A-Z]|\b\w)/g,function(e,n){return 0===n?e.toLowerCase():e.toUpperCase()}).replace(/\s+/g,"")},decamelize:function(e){return e.split(/(?=[A-Z])/).join(" ")}}},44174:function(e){e.exports=function(e,n,t,o){for(var i=-1,a=null==e?0:e.length;++i<a;){var s=e[i];n(o,s,t(s),e)}return o}},81119:function(e,n,t){var o=t(89881);e.exports=function(e,n,t,i){return o(e,function(e,o,a){n(i,e,t(e),a)}),i}},89881:function(e,n,t){var o=t(47816),i=t(99291)(o);e.exports=i},55189:function(e,n,t){var o=t(44174),i=t(81119),a=t(67206),s=t(1469);e.exports=function(e,n){return function(t,l){var r=s(t)?o:i,d=n?n():{};return r(t,e,a(l,2),d)}}},99291:function(e,n,t){var o=t(98612);e.exports=function(e,n){return function(t,i){if(null==t)return t;if(!o(t))return e(t,i);for(var a=t.length,s=n?a:-1,l=Object(t);(n?s--:++s<a)&&!1!==i(l[s],s,l););return t}}},7739:function(e,n,t){var o=t(89465),i=t(55189),a=Object.prototype.hasOwnProperty,s=i(function(e,n,t){a.call(e,t)?e[t].push(n):o(e,t,[n])});e.exports=s},36381:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/properties/view",function(){return t(85117)}])},85117:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return e2}});var o=t(85893),i=t(26042),a=t(69396),s=t(67294),l=t(6812),r=t(52210),d=t(11163),c=t.n(d),u=t(9270),m=t(62140),v=t(17974),x=t(8059),h=t(6924),p=t(93243),f=t(66854),b=t(67259),g=t(55862),j=t(47568),Z=t(97582),y=t(18586),I=t(78289),k=t(52019),w=t(73987),C=t(1306),_=t(85113),T=t(30016),S=t(71225),$=t(7297),E=t(45697),A=t(10367),L=t(11585),M=t(51466),q=t(30430);function F(){var e=(0,$.Z)(["\n  cursor: pointer;\n  text-decoration: none;\n"]);return F=function(){return e},e}var N=function(e){var n=e.compliances,t=e.id,i=function(e){e.stopPropagation(),c().push("/dashboard/properties/view?id=".concat(t,"&tab=compliance"))},a=n.length;if(a<=0)return(0,o.jsx)(L.Z,{open:!0,title:"Compliance Score",children:(0,o.jsx)(R,{onClick:i,children:(0,o.jsx)(M.Z,{content:"No compliance records, please add."})})});var s=(0,q.JB)(n),l=(0,q.CV)(n),r=(0,q.kW)(l);return(0,o.jsxs)(L.Z,{open:!0,title:"Compliance Score",children:[a<=0&&(0,o.jsx)(M.Z,{content:"No compliance records, please add."}),(0,o.jsx)(R,{onClick:i,children:(0,o.jsx)(M.Z,{content:l&&"Score ".concat(l," %"),context:r})}),(0,o.jsx)(M.Z,{content:"".concat(a," compliance item").concat(1!==a?"s":"")}),s>0&&(0,o.jsx)(M.Z,{context:"danger",content:"".concat(s," expired")})]})},R=A.ZP.a.withConfig({displayName:"rating__StyledLink",componentId:"sc-97ffeb70-0"})(F());N.propTypes={compliances:E.array.isRequired,id:E.number.isRequired};var B=t(76225),O=t(35418),P=t(4380),D=t(25993),U=t(41890),W=t(30381),H=t.n(W),V=t(36641),z=function(e){var n,t,i,a,s,l,r=e.property,d=e.offCanvas,u=e.refetch,m="/dashboard/properties/",v=(0,_.WE)(r,"registered"),x=(0,_.WE)(r,"invoice"),h=function(e){e&&u()};return[{id:1,label:"Create location",date:r.createdAt,content:[{id:1,active:r.createdAt&&r.name,data:"Name: ".concat(r.name)},{id:2,active:r.createdAt,data:"Access: ".concat(r.access)}]},{id:2,label:"Complete profile",info:"",date:(null==v?void 0:v.createdAt)||null,actions:[{id:1,active:!0,content:"Main address",context:"secondary",handleClick:function(){var e;d.show({content:(0,o.jsx)(V.H,{addressId:(null==v?void 0:null===(e=v.address)||void 0===e?void 0:e.id)||null,entity:"Location",entityId:r.id,id:(null==v?void 0:v.id)||null,onSubmit:h,type:"registered"}),submit:!1,title:"Manage addresses"})},type:"button"},{id:2,active:!0,content:"Invoice address",context:"secondary",handleClick:function(){var e;d.show({content:(0,o.jsx)(V.H,{addressId:(null==x?void 0:null===(e=x.address)||void 0===e?void 0:e.id)||null,entity:"Location",entityId:r.id,id:(null==x?void 0:x.id)||null,onSubmit:h,type:"invoice"}),submit:!1,title:"Manage addresses"})},type:"button"}]},{id:3,label:"Add assets",info:"",date:(null===(n=r.assets)||void 0===n?void 0:n.length)?r.assets[0].createdAt:null,content:[{id:1,active:(null===(t=r.assets)||void 0===t?void 0:t.length)>0,data:"".concat(null===(i=r.assets)||void 0===i?void 0:i.length," assets added")}],actions:[{id:1,active:!0,content:"Submit sublocations",context:"secondary",handleClick:function(){c().push("".concat(m,"view?id=").concat(r.id,"&tab=assets"))},type:"button"},{id:2,active:!0,content:"Submit products",context:"secondary",handleClick:function(){c().push("".concat(m,"view?id=").concat(r.id,"&tab=assets"))},type:"button"},{id:3,active:!0,content:"Submit sensors",context:"secondary",handleClick:function(){c().push("".concat(m,"view?id=").concat(r.id,"&tab=assets"))},type:"button"}]},{id:6,label:"Start issuing work orders",info:"submit work orders",date:(null===(a=r.bookings)||void 0===a?void 0:a.length)?r.bookings[0].createdAt:null,content:[{id:1,active:(null===(s=r.assets)||void 0===s?void 0:s.length)>0,data:"".concat(null===(l=r.assets)||void 0===l?void 0:l.length," jobs created")}]}]},Q=function(e,n,t){var o=z({property:e,offCanvas:n,refetch:t});return o.forEach(function(e){e.date&&(e.date=H()(e.date).format("D MMM YYYY HH:mm"))}),o},Y=t(64872),G=function(e){var n=e.location,t=e.refetch,i=(0,Y.a)();return(0,o.jsx)(L.Z,{open:!0,title:"Profile",children:(0,o.jsx)(U.Z,{items:Q(n,i,t),summary:[]},"stepper-".concat(n.id))})},J=t(98571),X=t(41255),K=t(46003),ee=function(e){var n,t,i,a,l,r,c,v,x,h,p=e.location,f=e.refetch,b=(0,y.q)(),g=(0,s.useContext)(I.Z),$=(0,s.useContext)(k.Z).hasRole,E=(0,s.useContext)(w.Z).user,A=(0,d.useRouter)().query,L=(0,s.useState)([]),M=L[0],q=L[1],F=(0,s.useState)(!1),R=F[0],U=F[1],W=(0,X.RM)(E.accountId),H="".concat(K.C1.issueReportUrl,"?locationId=").concat(p.id,"&locationName=").concat(p.name,"&customerId=").concat(null===(n=p.customer[0])||void 0===n?void 0:n.account.id),V=(0,X.BR)({adminId:E.id,xeroClientId:null==A?void 0:A.clientId},[b.admin]),z=V.onCallAuthorize,Q=V.onGetXeroContacts;(0,s.useEffect)(function(){var e,n=(e=(0,j.Z)(function(e){var n,t;return(0,Z.__generator)(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,Q(e)];case 1:return t=n.sent().map(function(e){return{label:"".concat(e.name," - ").concat(e.contactID),value:e.contactID}}),U(!1),q(t),[3,3];case 2:return n.sent(),U(!0),[3,3];case 3:return[2]}})}),function(n){return e.apply(this,arguments)});(null==W?void 0:W.companyId)&&n(W.companyId)},[null==W?void 0:W.companyId]);var Y,ee=p.createdAt,en=p.compliances,et=p.customer,eo=p.id,ei=p.supplier,ea=p.user,es=(0,_.WE)(p,"registered"),el=(0,_.WE)(p,"invoice"),er=function(){z(window.location.href)},ed=function(e){var n,t,i,a;e.stopPropagation(),g.show({content:(0,o.jsx)(D.V,{data:p,refetch:f,xeroContactId:null===(n=p.customer)||void 0===n?void 0:null===(t=n[0])||void 0===t?void 0:null===(i=t.account)||void 0===i?void 0:null===(a=i.meta)||void 0===a?void 0:a.xeroContactId,displayXeroContacts:!!(null==W?void 0:W.clientId),xeroContacts:M,displaySignin:R,handleXeroAuthorize:er,onClose:g.close}),title:"Edit property"})};return(0,o.jsxs)(u.Z,{children:[(0,o.jsxs)(m.Z,{md:4,children:[(0,o.jsx)(P.g,{avatar:(0,S.Q)(null===(t=p.customer[0].account)||void 0===t?void 0:t.media),entity:{id:p.id,description:p.customer[0].account.name,name:p.name||"Not Specified"},entityName:"Location",icons:[{icon:"edit",onClick:ed}]}),(0,o.jsx)(B.J,{data:{accountName:et.length&&et[0].account.name||ei.length&&ei[0].account.name,country:null==es?void 0:null===(i=es.address)||void 0===i?void 0:null===(a=i.country)||void 0===a?void 0:a.name,createdAt:ee,fullName:null==ea?void 0:ea.fullName,position:null==ea?void 0:ea.position,phone:null==ea?void 0:ea.phone,permitsRequired:null==p?void 0:p.permitsRequired,xeroContactId:null===(l=p.customer)||void 0===l?void 0:null===(r=l[0])||void 0===r?void 0:null===(c=r.account)||void 0===c?void 0:null===(v=c.meta)||void 0===v?void 0:v.xeroContactId}}),es&&(0,o.jsx)(C.f,{address:es.address,entity:"Location",entityId:p.id,id:es.id,refetch:f,showMap:!0,title:"Address",type:"registered"}),el&&(0,o.jsx)(C.f,{address:el.address,entity:"Location",entityId:p.id,id:el.id,refetch:f,title:"Invoice Address",type:"invoice"}),$("admin")&&(0,o.jsx)(T.E,{entity:"Location",entityId:p.id,open:!0,title:"Notes"})]}),(0,o.jsx)(m.Z,{md:4,children:(0,o.jsx)(G,{refetch:f,location:p})}),(0,o.jsxs)(m.Z,{md:4,children:[(0,o.jsx)(O.G,{details:!0,entity:"Location",entityId:eo}),(0,o.jsx)(N,{compliances:en,id:eo}),(null==b?void 0:null===(x=b.admin)||void 0===x?void 0:null===(h=x.modules)||void 0===h?void 0:h.nonLoggedUser)&&(0,o.jsx)(J.UH,{id:"location-qr-".concat(p.id),value:H,isExpandedByDefault:!0})]})]})},en=t(59577),et=function(e){var n,t,i,a,s,l=e.location;return(0,o.jsx)(en.b,{type:"customer",accountId:null===(n=l.customer[0])||void 0===n?void 0:null===(t=n.account)||void 0===t?void 0:t.id,locationId:l.id,meta:null!==(s=null===(i=null==l?void 0:l.customer[0])||void 0===i?void 0:null===(a=i.account)||void 0===a?void 0:a.meta)&&void 0!==s?s:{}})},eo=t(14924),ei=t(828),ea=t(50319),es=t(75063);function el(){var e=(0,$.Z)(['\n  query GetTenantBookings(\n    $limit: Int\n    $locationId: Int\n    $offset: Int\n    $orderBy: TenantBooking_order_by!\n    $q: Int\n    $userId: Int\n  ) {\n    tenantBookings: TenantBooking(\n      limit: $limit\n      offset: $offset\n      where: { id: { _eq: $q }, locationId: { _eq: $locationId }, userId: { _eq: $userId } }\n      order_by: [$orderBy]\n    ) {\n      id\n      bookingStart\n      bookingEnd\n      notes\n      status\n      createdAt\n      location: Location {\n        id\n        name\n        customer: Account_Locations {\n          id\n          account: Account {\n            id\n            name\n            admin: Admins {\n              id: adminId\n            }\n            manager: Manager {\n              id\n              fullName\n            }\n            contactUsers: Account_Users(where: { isContact: { _eq: true } }) {\n              id\n              user: User {\n                id\n                fullName\n              }\n            }\n          }\n        }\n      }\n      user: User {\n        id\n        fullName\n        email\n        phone\n        accountUsers: Account_Users(where: { Account: { type: { _eq: "tenant" } } }) {\n          id\n          accountId\n          modules\n        }\n      }\n    }\n    meta: TenantBooking_aggregate(\n      where: { id: { _eq: $q }, locationId: { _eq: $locationId }, userId: { _eq: $userId } }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n']);return el=function(){return e},e}var er=(0,es.Ps)(el());function ed(){var e=(0,$.Z)(["\n  mutation AddTenantBooking(\n    $nameFirst: String\n    $nameLast: String\n    $email: String\n    $phone: String\n    $bookingStart: timestamptz\n    $bookingEnd: timestamptz\n    $notes: String\n    $status: String\n    $locationId: Int!\n    $userId: Int\n    $modules: jsonb\n  ) {\n    createTenant(\n      nameFirst: $nameFirst\n      nameLast: $nameLast\n      email: $email\n      phone: $phone\n      bookingStart: $bookingStart\n      bookingEnd: $bookingEnd\n      notes: $notes\n      status: $status\n      locationId: $locationId\n      userId: $userId\n      modules: $modules\n    ) {\n      data\n      success\n    }\n  }\n"]);return ed=function(){return e},e}function ec(){var e=(0,$.Z)(['\n  mutation UpdateTenantBooking(\n    $id: Int!\n    $changes: TenantBooking_set_input\n    $userId: Int!\n    $accountUser: Account_User_set_input\n  ) {\n    update_TenantBooking_by_pk(pk_columns: { id: $id }, _set: $changes) {\n      id\n    }\n    update_Account_User(\n      where: { userId: { _eq: $userId }, Account: { type: { _eq: "tenant" } } }\n      _set: $accountUser\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n']);return ec=function(){return e},e}function eu(){var e=(0,$.Z)(["\n  mutation DeleteTenantBooking($id: Int!) {\n    delete_TenantBooking_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return eu=function(){return e},e}var em=(0,es.Ps)(ed()),ev=(0,es.Ps)(ec());(0,es.Ps)(eu());var ex=t(68956),eh=t(26186),ep=t(77439),ef=t(91272),eb=t(42283),eg=t(79665),ej=t(76600),eZ=t(49501),ey=t(55563),eI=t(6710),ek=t(95103),ew=t(21300),eC=t(66812),e_=t(74231),eT=(0,e_.Ry)().shape({bookingStart:(0,e_.hT)(),bookingEnd:(0,e_.hT)().nullable(),notes:(0,e_.Z_)(),status:(0,e_.Z_)().oneOf(["active","inactive"]).required()}),eS=t(21789),e$=t(50480),eE=t(69368),eA=t(15861),eL=t(5616),eM=t(51233),eq=function(e){var n=e.name,t=e.control,i=e.permissions,a=e.styles;return(0,o.jsxs)(eL.Z,{sx:a,children:[(0,o.jsx)(eA.Z,{variant:"h6",color:"dark.main",sx:{fontFamily:"Arial, sans-serif, sans-serif",fontWeight:"normal"},children:"Permissions"}),(0,o.jsx)(eM.Z,{spacing:1,direction:"row",children:i.map(function(e){return(0,o.jsx)(eb.Qr,{name:"".concat(n?n+".":"").concat(e.name),control:t,render:function(n){var t=n.value,i=n.onChange;return(0,o.jsx)(e$.Z,{color:"dark.main",control:(0,o.jsx)(eE.Z,{color:"secondary",checked:t,onChange:function(e){return i(e.target.checked)}}),label:e.label})}})})})]})};eq.defaultProps={permissions:[]},eq.propTypes={name:E.string,control:E.object.isRequired,permissions:E.object,styles:E.object};var eF=[{label:"Job reports",name:"jobReports"},{label:"Quotes",name:"quotes"},{label:"Finances",name:"finances"}],eN=function(e){var n,t,l,r=e.defaultValues,d=e.submit,c=(0,s.useState)(!1),v=c[0],x=c[1],h=(0,eb.cI)({defaultValues:r&&r,resolver:(0,eg.S)(eT)}),p=h.control,f=h.errors,b=h.handleSubmit,g=h.register,j=h.watch,Z={control:p,errors:f,register:g},y=j("tenantSelected");return(0,o.jsxs)(ej.Z,{id:"offCanvasForm",handleSubmit:b(d),children:[(0,o.jsx)(L.Z,{open:!0,title:"Tenant information",children:v?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(u.Z,{children:[(0,o.jsx)(m.Z,{md:6,children:(0,o.jsx)(eZ.Z,{label:"First name",children:(0,o.jsx)(ey.Z,(0,a.Z)((0,i.Z)({},Z),{name:"nameFirst"}))})}),(0,o.jsx)(m.Z,{md:6,children:(0,o.jsx)(eZ.Z,{label:"Last name",children:(0,o.jsx)(ey.Z,(0,a.Z)((0,i.Z)({},Z),{name:"nameLast"}))})}),(0,o.jsx)(m.Z,{md:6,children:(0,o.jsx)(eZ.Z,{label:"Email",children:(0,o.jsx)(ey.Z,(0,a.Z)((0,i.Z)({},Z),{name:"email",type:"email"}))})}),(0,o.jsx)(m.Z,{md:6,children:(0,o.jsx)(eZ.Z,{label:"Mobile",children:(0,o.jsx)(ey.Z,(0,a.Z)((0,i.Z)({},Z),{name:"phone"}))})})]}),(0,o.jsx)(ep.Z,{content:"Cancel",context:"secondary",onClick:function(){return x(!1)},size:"sm"})]}):(null==r?void 0:r.id)?(0,o.jsxs)("div",{children:[null==r?void 0:null===(n=r.user)||void 0===n?void 0:n.fullName," ",(0,o.jsx)("br",{}),null==r?void 0:null===(t=r.user)||void 0===t?void 0:t.email," ",(0,o.jsx)("br",{}),null==r?void 0:null===(l=r.user)||void 0===l?void 0:l.phone," ",(0,o.jsx)("br",{})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(eC.P,(0,a.Z)((0,i.Z)({},Z),{errors:(0,i.Z)({},f),label:"Tenant",name:"tenantSelected",type:"tenant"})),y&&(0,o.jsxs)("div",{children:[y.label," ",(0,o.jsx)("br",{}),y.email," ",(0,o.jsx)("br",{}),y.phone," ",(0,o.jsx)("br",{}),(0,o.jsx)("br",{})]}),"or"," ",(0,o.jsx)(ep.Z,{content:"Add new tenant",context:"secondary",onClick:function(){return x(!0)},size:"sm"})]})}),(0,o.jsxs)(L.Z,{open:!0,title:"Booking information",children:[(0,o.jsxs)(u.Z,{children:[(0,o.jsxs)(m.Z,{md:6,children:[(0,o.jsx)(eZ.Z,{label:"Booked from"}),(0,o.jsx)(ew.M,(0,a.Z)((0,i.Z)({},Z),{name:"bookingStart",placeholderText:"Click to select date"}))]}),(0,o.jsxs)(m.Z,{md:6,children:[(0,o.jsx)(eZ.Z,{label:"Booked to"}),(0,o.jsx)(ew.M,(0,a.Z)((0,i.Z)({},Z),{name:"bookingEnd",placeholderText:"Click to select date"}))]})]}),(0,o.jsx)(eZ.Z,{label:"Notes",children:(0,o.jsx)(eI.Z,(0,a.Z)((0,i.Z)({},Z),{name:"notes",rows:3}))}),(0,o.jsx)(eZ.Z,{label:"Status",children:(0,o.jsx)(ek.Z,(0,a.Z)((0,i.Z)({},Z),{name:"status",options:eS.bg}))})]}),(0,o.jsx)(eq,{name:"modules",control:p,permissions:eF,styles:{mb:2}}),(null==r?void 0:r.id)&&(0,o.jsx)(ey.Z,(0,a.Z)((0,i.Z)({},Z),{name:"id",type:"hidden"})),(null==r?void 0:r.userId)&&(0,o.jsx)(ey.Z,(0,a.Z)((0,i.Z)({},Z),{name:"userId",type:"hidden"})),(null==r?void 0:r.locationId)&&(0,o.jsx)(ey.Z,(0,a.Z)((0,i.Z)({},Z),{name:"locationId",type:"hidden"}))]})};eN.propTypes={defaultValues:E.object,submit:E.func.isRequired};var eR=function(e,n){var t,o,i={id:(null==e?void 0:e.id)||null,bookingStart:(null==e?void 0:e.bookingStart)?new Date(e.bookingStart):null,bookingEnd:(null==e?void 0:e.bookingEnd)?new Date(e.bookingEnd):null,notes:(null==e?void 0:e.notes)||"",locationId:n,status:(null==e?void 0:e.status)||"active"};return(null==e?void 0:e.id)&&(null==e?void 0:e.user)?(i.user={id:e.user.id,fullName:e.user.fullName,email:e.user.email,phone:e.user.phone},i.userId=e.user.id,i.modules=(null===(t=e.user.accountUsers)||void 0===t?void 0:null===(o=t[0])||void 0===o?void 0:o.modules)||{}):(i.email="",i.nameFirst="",i.nameLast="",i.phone=""),i},eB=function(e){var n,t,r,d=e.filters,c=(0,s.useRef)(),u=(0,s.useContext)(I.Z),m=d.locationId,v=(0,l.a)(er,{variables:(0,a.Z)((0,i.Z)({},d),{limit:K.C1.paginationSize,offset:((null===(n=c.current)||void 0===n?void 0:n.currentPage)-1||0)*K.C1.paginationSize,orderBy:(0,eo.Z)({},null===(t=c.current)||void 0===t?void 0:t.sort.item,null===(r=c.current)||void 0===r?void 0:r.sort.order)})}),x=v.data,h=void 0===x?{tenantBookings:[],meta:{aggregate:{totalCount:0}}}:x,p=h.tenantBookings,f=h.meta,b=v.loading,g=v.refetch,j=(0,ei.Z)((0,ea.D)(em,{onCompleted:function(e){u.close(),g()}}),1)[0],Z=(0,ei.Z)((0,ea.D)(ev,{onCompleted:function(e){u.close(),g()}}),1)[0],y=function(e){e.id?Z({variables:{id:e.id,changes:{bookingStart:e.bookingStart,bookingEnd:e.bookingEnd,notes:e.notes,status:e.status},userId:e.userId,accountUser:{modules:e.modules}}}):j({variables:{nameFirst:e.nameFirst,nameLast:e.nameLast,email:e.email,phone:e.phone,bookingStart:e.bookingStart,bookingEnd:e.bookingEnd,notes:e.notes,status:e.status,locationId:e.locationId,userId:e.userId,modules:e.modules}})},k=function(e,n){e.stopPropagation();var t=eR(p.find(function(e){return e.id===(null==n?void 0:n.id)}),m);u.show({title:n?"Edit tenant":"Add tenant",content:(0,o.jsx)(eN,{defaultValues:t,submit:y})})},w=[{text:"ID"},{text:"Tenant"},{text:"Email Address"},{text:"Booked from"},{text:"Booked to"},{text:"Status"},{text:"Date Added",sortable:!0,sortName:"createdAt"},{formatter:ex.Z,formatterData:[{context:"secondary",icon:["fas","edit"],onClick:k,tooltip:"Edit"}],text:"Actions"},{hidden:!0}];return(0,o.jsx)(L.Z,{fitParentHeight:!0,open:!0,title:"Tenant bookings",toolbar:m&&(0,o.jsx)(ep.Z,{content:"Add tenant",context:"secondary",onClick:k,size:"sm"}),children:(0,o.jsx)(ef.t,{columns:w,loading:b,meta:f,ref:c,refetch:g,rows:p.map(function(e){var n=null==e?void 0:e.user;return{id:e.id,name:null==n?void 0:n.fullName,email:null==n?void 0:n.email,bookingStart:e.bookingStart,bookingEnd:e.bookingEnd?e.bookingEnd:"-",status:"active"===e.status?"Active":"Inactive",createdAt:(0,eh.Z)(e.createdAt),actions:"",locationId:e.locationId}})})})};eB.propTypes={filters:E.object};var eO=t(2845),eP=t(66264),eD=t(98456),eU=t(61730),eW=t(10925),eH=t(23377),eV=t(23914),ez=t(4790),eQ=t(97824),eY=t(10545),eG=t(5201),eJ=function(e){var n,t,j,Z,I,k,w,C,_,T,S=e.propertyId,$=(0,eU.Z)("(max-width:600px)"),E=(0,eO.x)().hasRole,A=(0,d.useRouter)().query,L=(0,y.q)(),M=L.admin,q=L.hasUserModule,F=(0,s.useMemo)(function(){return A.tab||"details"},[A.tab]),N=null==M?void 0:null===(n=M.modules)||void 0===n?void 0:n.assets,R=E("admin"),B=E("tenant"),O=E("customer"),P=E("customer_user"),D=q("ppmSchedules"),U=q("finances"),W=q("quotes"),H=(0,s.useState)(F),V=H[0],z=H[1],Q=(0,s.useState)("slas-work-order"),Y=Q[0],G=Q[1],J=function(e,n){z(n)},X=function(e,n){G(n)},K=(0,l.a)(r.tl,{variables:{id:S}}),en=K.loading,eo=K.data,ei=(void 0===eo?{location:{}}:eo).location,ea=K.refetch;if(en)return(0,o.jsx)(eM.Z,{height:"100%",width:"100%",justifyContent:"center",alignItems:"center",children:(0,o.jsx)(eD.Z,{color:"secondary"})});if(!ei)return c().push("/404"),!1;var es=(0,a.Z)((0,i.Z)({marginTop:$?"20px":0,maxWidth:$?"100%":"calc(100vw - 280px)",height:"auto","& .MuiTabs-scroller":{height:"auto",overflowY:$?"visible":"auto"}},$&&{"& .MuiTabs-flexContainer>.MuiButtonBase-root":{marginBottom:"10px"}}),{"& .MuiTabs-flexContainer":$&&{flexWrap:"wrap"},"& .MuiTabs-flexContainer>.MuiTab-root:first-child":(0,i.Z)({},!$&&{borderTopLeftRadius:0,borderBottomLeftRadius:0})});return(0,o.jsxs)(eL.Z,{sx:{width:"100%",height:"100%"},children:[(0,o.jsxs)(eM.Z,{direction:$?"column":"row",children:[(0,o.jsx)(eY.c,{withoutRightBorderRadius:!$,fullWidth:$,locationId:ei.id,locationName:ei.name}),(0,o.jsxs)(eV.m,{value:V,onChange:J,changeQuery:!0,sx:es,children:[(0,o.jsx)(ez.O,{value:"details",label:"Details",sx:{borderTopLeftRadius:0,borderBottomLeftRadius:0}}),!(!U&&(B||P))&&(0,o.jsx)(ez.O,{value:"finances",label:"Finances"}),(0,o.jsx)(ez.O,{value:"sublocations",label:"Sublocations"}),N&&(0,o.jsx)(ez.O,{value:"assets",label:"Assets"}),(0,o.jsx)(ez.O,{value:"slas",label:"SLAs"}),(0,o.jsx)(ez.O,{value:"services",label:"Services"}),(0,o.jsx)(ez.O,{value:"work-orders",label:"Work Orders"}),!(!W&&P)&&(0,o.jsx)(ez.O,{value:"quotes",label:"Quotes"}),(0,o.jsx)(ez.O,{value:"compliance",label:"Compliance"}),(0,o.jsx)(ez.O,{value:"tenants",label:"Tenants"}),!(!D&&P)&&(0,o.jsx)(ez.O,{value:"planned-maintenance",label:"Planned Maintenance"})]})]}),(0,o.jsx)(eQ.x,(0,a.Z)((0,i.Z)({value:V,index:"details"},eX),{children:(0,o.jsx)(ee,{location:ei,refetch:ea})})),!(!U&&(B||P))&&(0,o.jsx)(eQ.x,(0,a.Z)((0,i.Z)({value:V,index:"finances"},eX),{children:(0,o.jsx)(et,{location:ei})})),(0,o.jsx)(eQ.x,(0,a.Z)((0,i.Z)({value:V,index:"sublocations"},eX),{children:(0,o.jsx)(eP.E,{editable:!B&&!O,location:ei,customer:null===(t=ei.customer[0])||void 0===t?void 0:t.account})})),N&&(0,o.jsx)(eQ.x,(0,a.Z)((0,i.Z)({value:V,index:"assets"},eX),{children:(0,o.jsx)(v.E,{editable:R,hideLocationInfo:!0,hideCustomerInfo:!0,showHeader:!1,initialFilters:{locationId:ei.id,filterType:"location_assets"},createFormDefaultValues:{customer:{label:null===(j=ei.customer[0])||void 0===j?void 0:null===(Z=j.account)||void 0===Z?void 0:Z.name,value:null===(I=ei.customer[0])||void 0===I?void 0:null===(k=I.account)||void 0===k?void 0:k.id},location:{label:ei.name,value:ei.id}}})})),(0,o.jsxs)(eQ.x,(0,a.Z)((0,i.Z)({value:V,index:"slas"},eX),{children:[(0,o.jsxs)(eV.m,{value:Y,onChange:X,children:[(0,o.jsx)(ez.O,{value:"slas-work-order",label:"Details"}),(0,o.jsx)(ez.O,{value:"slas-quote",label:"Finances"})]}),(0,o.jsx)(eQ.x,(0,a.Z)((0,i.Z)({value:Y,index:"slas-work-order"},eX),{children:(0,o.jsx)(eW.H,{title:"Work Order SLAs",subtype:"reactive",isEntity:!0,isLocation:!0,customerId:null===(w=ei.customer[0])||void 0===w?void 0:null===(C=w.account)||void 0===C?void 0:C.id,entity:"Location",entityId:ei.id,containerHeight:"calc(100vh - 180px)"})})),(0,o.jsx)(eQ.x,(0,a.Z)((0,i.Z)({value:Y,index:"slas-quote"},eX),{children:(0,o.jsx)(eW.H,{title:"Quote SLAs",subtype:"quote",isEntity:!0,isLocation:!0,customerId:null===(_=ei.customer[0])||void 0===_?void 0:null===(T=_.account)||void 0===T?void 0:T.id,entity:"Location",entityId:ei.id,containerHeight:"calc(100vh - 180px)"})}))]})),(0,o.jsx)(eQ.x,(0,a.Z)((0,i.Z)({value:V,index:"services"},eX),{children:(0,o.jsx)(eH.J,{entity:"Location",entityId:ei.id})})),(0,o.jsx)(eQ.x,(0,a.Z)((0,i.Z)({value:V,index:"work-orders"},eX),{children:(0,o.jsx)(b.A,{columnVisibilityModel:{customerNet:!P||U,amountOutstanding:!P||U},filtersVisibilityModel:{customer:!1,user:E("customer"),supplier:E("admin"),location:!1,manager:!1,customerManager:!1,accountManager:!1},entityRelationToFetch:{locationId:ei.id},initialFilters:{startDate:null,endDate:null,status:null,locationId:null,supplierId:null,filterType:"locations_work_orders_tab"}})})),!(!W&&P)&&(0,o.jsx)(eQ.x,(0,a.Z)((0,i.Z)({value:V,index:"quotes"},eX),{children:(0,o.jsx)(g.J,{FiltersComp:h.r,initialFilters:{customerId:null,supplierId:null,status:null,id:null,locationId:ei.id,filterType:"location_quotes"},TableComp:p.v})})),(0,o.jsx)(eQ.x,(0,a.Z)((0,i.Z)({value:V,index:"compliance"},eX),{children:(0,o.jsxs)(u.Z,{children:[(0,o.jsx)(m.Z,{md:6,children:(0,o.jsx)(x.M,{data:ei.compliances,entity:"Location",entityId:ei.id,refetch:ea,showOverallRating:!0})}),(0,o.jsx)(m.Z,{md:6,children:(0,o.jsx)(f.F,{compliance:!0,locationId:ei.id,showFilters:!1})})]})})),(0,o.jsx)(eQ.x,(0,a.Z)((0,i.Z)({value:V,index:"tenants"},eX),{children:(0,o.jsx)(eB,{filters:{locationId:ei.id}})})),!(!D&&P)&&(0,o.jsx)(eQ.x,(0,a.Z)((0,i.Z)({value:V,index:"planned-maintenance"},eX),{label:"Planned Maintenance",children:(0,o.jsx)(eG.A,{locationId:ei.id,locationName:ei.name,calendarInitialFilters:{filterType:"location_".concat(ei.id),locationId:ei.id},hideCalendarFilters:["location"],tableInitialFilters:{filterType:"location_".concat(ei.id),locationId:ei.id},hideTableFilters:["location"],itemsInitialFilters:{locationId:ei.id,filterType:"location_".concat(ei.id)},hideItemsFilters:["location"]})}))]})},eX={sx:{height:"calc(100% - 32px)"},boxSx:{height:"100%"}},eK=function(e){var n=e.propertyId,t=(0,eU.Z)("(max-width:600px)"),u=(0,d.useRouter)().query,m=(0,s.useMemo)(function(){return u.tab||"planned-maintenance"},[u.tab]),v=(0,s.useState)(m),x=v[0],h=v[1],p=function(e,n){h(n)},f=(0,l.a)(r.SC,{variables:{id:n}}),b=f.loading,g=f.data,j=(void 0===g?{location:{}}:g).location;if(b)return(0,o.jsx)(eM.Z,{height:"100%",width:"100%",justifyContent:"center",alignItems:"center",children:(0,o.jsx)(eD.Z,{color:"secondary"})});if(!j)return c().push("/404"),!1;var Z={maxWidth:t?"100%":"calc(100vw - 280px)","& .MuiTabs-flexContainer>.MuiTab-root:first-child":(0,i.Z)({},!t&&{borderTopLeftRadius:0,borderBottomLeftRadius:0})};return(0,o.jsxs)(eL.Z,{sx:{width:"100%",height:"100%"},children:[(0,o.jsxs)(eM.Z,{direction:t?"column":"row",children:[(0,o.jsx)(eY.c,{withoutRightBorderRadius:!t,fullWidth:t,locationId:j.id,locationName:j.name}),(0,o.jsx)(eV.m,{value:x,onChange:p,changeQuery:!0,sx:Z,children:(0,o.jsx)(ez.O,{value:"planned-maintenance",label:"Planned Maintenance"})})]}),(0,o.jsx)(eQ.x,(0,a.Z)((0,i.Z)({value:x,index:"planned-maintenance"},e0),{label:"Planned Maintenance",children:(0,o.jsx)(eG.A,{locationId:j.id,locationName:j.name,calendarInitialFilters:{filterType:"location_".concat(j.id),locationId:j.id},hideCalendarFilters:["location"],tableInitialFilters:{filterType:"location_".concat(j.id),locationId:j.id},hideTableFilters:["location"],itemsInitialFilters:{locationId:j.id,filterType:"location_".concat(j.id)},hideItemsFilters:["location"]})}))]})},e0={sx:{height:"calc(100% - 32px)"},boxSx:{height:"100%"}},e1=t(58849),e6=function(){var e=(0,eO.x)().user,n=(0,d.useRouter)().query;return n.id?"supplier"===e.accountType?(0,o.jsx)(eK,{propertyId:n.id}):(0,o.jsx)(eJ,{propertyId:n.id}):c().push("/404")},e2=e6;e6.getLayout=function(e){return(0,o.jsx)(e1.Z,{children:e})}}},function(e){e.O(0,[3662,367,6898,9809,2283,212,619,8890,2583,4135,8579,6043,1564,4244,1336,3911,3776,5370,2329,778,6540,4046,1023,9957,1870,2797,9241,653,8062,1207,2429,4061,597,4211,8948,1121,1303,6127,3723,7548,3977,6656,8344,8849,6733,1741,7305,2781,8151,2629,1675,6625,5656,1105,5201,8004,397,4342,2622,9774,2888,179],function(){return e(e.s=36381)}),_N_E=e.O()}]);