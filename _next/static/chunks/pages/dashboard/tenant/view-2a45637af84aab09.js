(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5355],{24903:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/tenant/view",function(){return t(14381)}])},2173:function(e,n,t){"use strict";t.d(n,{W:function(){return c}});var o=t(47568),r=t(7297),i=t(97582),a=t(75063),l=t(63139),u=t(13777);function s(){var e=(0,r.Z)(["\n  mutation CreateSupplierPpmInvoicePdf($accountEntryId: Int!) {\n    invoice: createSupplierPpmInvoicePdf(accountEntryId: $accountEntryId) {\n      success\n      key\n    }\n  }\n"]);return s=function(){return e},e}var d,c=(d=(0,o.Z)(function(e){var n,t,o,r,a,s,d,c,p,m,h,y;return(0,i.__generator)(this,function(i){switch(i.label){case 0:n=e.client,t=e.accountEntryId,o=e.getUrl,i.label=1;case 1:return i.trys.push([1,3,,4]),a="",(0,l.a)()||o||(r=window.open("/download","_blank")),[4,n.mutate({mutation:v,variables:{accountEntryId:t}})];case 2:return c=i.sent().data.invoice.key,o?a="".concat("https://cleverly-pre-prod-media.s3.eu-west-2.amazonaws.com","/").concat(c):(null==r||null===(p=r.location)||void 0===p||p.assign("".concat("https://cleverly-pre-prod-media.s3.eu-west-2.amazonaws.com","/").concat(c)),(null==window?void 0:null===(m=window.Capacitor)||void 0===m?void 0:null===(h=m.Plugins)||void 0===h?void 0:h.Browser)&&window.Capacitor.Plugins.Browser.open({url:"".concat("https://cleverly-pre-prod-media.s3.eu-west-2.amazonaws.com","/").concat(c)})),[2,a];case 3:return y=i.sent(),(0,u.Tb)({message:y,section:"fetch"}),[3,4];case 4:return[2]}})}),function(e){return d.apply(this,arguments)}),v=(0,a.Ps)(s())},9489:function(e,n,t){"use strict";t.d(n,{I:function(){return v}});var o=t(26042),r=t(69396),i=t(99534),a=t(85893),l=t(5616),u=t(51233),s=t(50135),d=t(90948),c=t(15861),v=function(e){var n=e.leftLabel,t=e.rightLabel,l=e.error,s=(0,i.Z)(e,["leftLabel","rightLabel","error"]);return(0,a.jsxs)(u.Z,{direction:"row",alignItems:"center",children:[(0,a.jsx)(p,{sx:{borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"},error:l,children:(0,a.jsx)(c.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",whiteSpace:"nowrap"},children:n})}),(0,a.jsx)(m,(0,r.Z)((0,o.Z)({},s),{variant:"outlined",size:"small",error:l})),(0,a.jsx)(p,{sx:{borderTopRightRadius:"5px",borderBottomRightRadius:"5px"},error:l,children:(0,a.jsx)(c.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",whiteSpace:"nowrap"},variant:"body2",fontWeight:700,children:t})})]})},p=(0,d.ZP)(l.Z)(function(e){var n=e.theme;return{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:e.error?n.palette.danger.main:"#D9D9D9",minwidth:"28px",height:"28px",padding:"0 5px"}}),m=(0,d.ZP)(s.Z)(function(e){var n=e.theme,t=e.error;return{height:"28px","& .MuiInputBase-root ":{borderRadius:"0px","&.Mui-focused":{"& .MuiOutlinedInput-notchedOutline":{borderColor:t?n.palette.danger.main:"#D9D9D9"}},"& .MuiInputBase-input":{padding:"2px 14px",borderColor:t?n.palette.danger.main:"#D9D9D9",borderStyle:"solid",borderBottomWidth:"2.5px",borderTopWidth:"2px"},"& .MuiOutlinedInput-notchedOutline":{border:"none"}}}})},78232:function(e,n,t){"use strict";t.d(n,{F:function(){return P}});var o=t(14924),r=t(26042),i=t(69396),a=t(85893),l=t(45697),u=t.n(l),s=t(10166),d=t(80482),c=t(23776),v=t(98456),p=t(16143),m=t(50135),h=t(99534),y=t(29815),f=t(74061),b=t(6498),I=t(75438),x=t(15861),g=t(61730),j=t(67294),Z=(0,j.createContext)({}),q=(0,j.forwardRef)(function(e,n){var t=(0,j.useContext)(Z);return(0,a.jsx)("div",(0,r.Z)({ref:n},e,t))}),w=(0,j.forwardRef)(function(e,n){var t=e.children,o=(0,h.Z)(e,["children"]),r=[];t.forEach(function(e){r.push(e),r.push.apply(r,(0,y.Z)(e.children||[]))});var i,l,u=(0,b.u)(),s=(0,g.Z)(u.breakpoints.up("sm"),{noSsr:!0}),d=r.length,c=s?36:48,v=function(e){return e.hasOwnProperty("group")?48:c},p=(l=(0,j.useRef)(null),(0,j.useEffect)(function(){null!=l.current&&l.current.resetAfterIndex(0,!0)},[d]),l);return(0,a.jsx)("div",{ref:n,children:(0,a.jsx)(Z.Provider,{value:o,children:(0,a.jsx)(f.S_,{itemData:r,height:(d>8?8*c:r.map(v).reduce(function(e,n){return e+n},0))+16,width:"100%",ref:p,outerElementType:q,innerElementType:"ul",itemSize:function(e){return v(r[e])},overscanCount:5,itemCount:d,children:C})})})});function C(e){var n=e.data,t=e.index,o=e.style,l=n[t],u=(0,i.Z)((0,r.Z)({},o),{top:o.top+8});return l.hasOwnProperty("group")?(0,a.jsx)(I.Z,{component:"div",style:u,children:l.group},l.key):(0,a.jsx)(x.Z,(0,i.Z)((0,r.Z)({component:"li"},l[0]),{noWrap:!0,style:u,children:l[1].label}))}var P=function(e){var n=e.label,t=e.loading,o=e.placeholder,l=e.error,u=e.helperText,s=e.inputProps;return(0,a.jsx)(k,(0,i.Z)((0,r.Z)({},e),{disableListWrap:!0,PopperComponent:_,ListboxComponent:w,renderInput:function(e){return(0,a.jsx)(m.Z,(0,i.Z)((0,r.Z)({},e,s),{error:l,helperText:u,label:n,placeholder:o,color:"secondary",variant:"standard",InputProps:(0,i.Z)((0,r.Z)({},e.InputProps,(null==s?void 0:s.InputProps)||{}),{endAdornment:(0,a.jsxs)(a.Fragment,{children:[t?(0,a.jsx)(v.Z,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))},renderOption:function(e,n,t){return[e,n,t.index]},renderGroup:function(e){return e}}))};P.defaultProps={value:null,onChange:function(){},label:"",loading:!1,error:!1,onOpen:function(){},options:[],inputProps:{},withoutSelectIcon:!1},P.propTypes={value:u().shape({value:u().any,label:u().string}),onChange:u().func,label:u().string,loading:u().bool,onOpen:u().func,options:u().arrayOf(u().shape({value:u().any,label:u().string})),inputProps:u().object,withoutSelectIcon:u().bool,inputValue:u().string,onInputChange:u().func};var _=(0,s.Z)(p.Z)((0,o.Z)({zIndex:"12000 !important"},"& .".concat(d.Z.listbox),{boxSizing:"border-box","& ul":{padding:0,margin:0}})),k=(0,s.Z)(c.Z)(function(e){var n=e.withoutSelectIcon;return{"& .MuiAutocomplete-root":{cursor:"pointer"},"& .MuiAutocomplete-popper":{zIndex:"12000 "},"& .MuiAutocomplete-endAdornment":{"& .MuiButtonBase-root.MuiIconButton-root.MuiAutocomplete-popupIndicator":{"& .MuiSvgIcon-root":(0,r.Z)({},n&&{display:"none"})}}}})},35381:function(e,n,t){"use strict";t.d(n,{il:function(){return i},j$:function(){return o},wo:function(){return r}});var o=function(e,n){if(Array.isArray(n)){var t,o,r=null;return n.forEach(function(n){var t,o,i=null===(t=e.timings)||void 0===t?void 0:t.find(function(e){return e.status===n});r=(null==i?void 0:null===(o=i.user)||void 0===o?void 0:o.fullName)||r}),r}var i=null===(t=e.timings)||void 0===t?void 0:t.find(function(e){return e.status===n});return(null==i?void 0:null===(o=i.user)||void 0===o?void 0:o.fullName)||null},r=function(e,n){if(Array.isArray(n)){var t,o=null;return n.forEach(function(n){var t,r=null===(t=e.timings)||void 0===t?void 0:t.find(function(e){return e.status===n});o=(null==r?void 0:r.id)||o}),o}var r=null===(t=e.timings)||void 0===t?void 0:t.find(function(e){return e.status===n});return(null==r?void 0:r.id)||null},i=function(e,n){return!e||e>n}},66321:function(e,n,t){"use strict";t.d(n,{E:function(){return y}});var o=t(26042),r=t(69396),i=t(85893),a=t(45697),l=t.n(a),u=t(94054),s=t(50480),d=t(56815),c=t(40476),v=t(79717),p=t(36872),m=t(51233),h=t(15861),y=function(e){var n=e.label,t=e.options,a=e.error,l=e.helperText,y=e.stackProps,b=e.formControlProps,I=e.labelLeft,x=function(e){var n=e.children;return(0,i.jsx)(i.Fragment,{children:n})};return(0,i.jsxs)(u.Z,(0,r.Z)((0,o.Z)({sx:{m:3},error:a,variant:"standard"},void 0===b?{}:b),{children:[(0,i.jsxs)(m.Z,(0,r.Z)((0,o.Z)({},I&&f),{children:[n&&(0,i.jsx)(c.Z,{id:"radio-group",color:"secondary",children:n}),(0,i.jsx)(v.Z,(0,r.Z)((0,o.Z)({},e),{"aria-labelledby":"radio-group",children:(0,i.jsx)(m.Z,(0,r.Z)((0,o.Z)({},void 0===y?{}:y),{children:t.map(function(e){var n=e.value,t=e.label,o=e.icon,r=e.ParentComponent;return(0,i.jsx)(void 0===r?x:r,{children:(0,i.jsx)(s.Z,{value:n,control:(0,i.jsx)(p.Z,{color:"secondary"}),label:(0,i.jsxs)(m.Z,{direction:"row",alignItems:"center",spacing:1,children:[o,(0,i.jsx)(h.Z,{children:t})]})})})})}))}))]})),(0,i.jsx)(d.Z,{children:l})]}))};y.defaultProps={options:[],error:!1,helperText:"",stackProps:{},formControlProps:{},labelLeft:!1},y.propTypes={label:l().string,options:l().arrayOf(l().shape({label:l().string.isRequired,value:l().any.isRequired,ParentComponent:l().elementType})).isRequired,error:l().bool,helperText:l().string,stackProps:l().object,formControlProps:l().object,labelLeft:l().bool};var f={direction:"row",alignItems:"center",flexWrap:"wrap",spacing:1}},66812:function(e,n,t){"use strict";t.d(n,{P:function(){return q}});var o=t(47568),r=t(26042),i=t(99534),a=t(7297),l=t(97582),u=t(85893),s=t(67294),d=t(45697),c=t(10367),v=t(66252),p=t(4972),m=t(78289),h=t(52019),y=t(49501),f=t(9270),b=t(62140),I=t(84043),x=t(77439);function g(){var e=(0,a.Z)(["\n  position: relative;\n  right: 25px;\n  top: 2px;\n"]);return g=function(){return e},e}var j=function(e,n){var t,o,r,i=!0;return(null===(t=e.errors[e.name])||void 0===t?void 0:t.message)!==(null===(o=n.errors[n.name])||void 0===o?void 0:o.message)&&(i=!1),["accountId","assetCategoryId","entity","entityId","locationId","serviceId","type","value","customerId","customerRole"].forEach(function(t){e[t]!==n[t]&&(i=!1)}),i},Z=function(e){var n=e.accountId,t=e.area,o=e.assetCategoryId,r=e.entity,i=e.entityId,a=(e.hasRole,e.id),l=e.locationId,u=e.serviceId,s=e.taxonomyGroupType,d=e.customerId,c=e.customerRole,v=e.type,m=e.userId,h=e.invoiceThreshold,y=e.quoteThreshold,f=v;switch(c&&(f="".concat(v,"_").concat(c)),f){case"address":return{query:p.cz,variables:{entity:r,entityId:i}};case"asset":return{query:p.UH,variables:{categoryId:o,locationId:l}};case"assetBookable":return{query:p.UH,variables:{categoryId:o,locationId:l,bookable:"yes"}};case"assetCategory":return{query:p.nD,variables:{id:a}};case"assetSublocation":return{query:p.UH,variables:{category:"sublocation",adminId:n,locationId:l}};case"compliance":return{query:p.kU,variables:{locationId:l}};case"coverage":return{query:p.j$};case"customer":return{query:p.SW};case"job":return{query:p.Qn,variables:{locationId:l}};case"manager":return{query:p.he,variables:{accountId:n,userId:m}};case"thresholdManagers":return{query:p.Ak,variables:{accountId:n,userId:m,invoiceThreshold:h,quoteThreshold:y}};case"product":return{query:p.UH,variables:{category:"product",locationId:l}};case"property":return{query:p._d,variables:{where:{status:{_eq:"active"},Account_Locations:{accountId:{_eq:n}}}}};case"property_user":return{query:p._d,variables:{where:{status:{_eq:"active"},Account_Locations:{accountId:{_eq:n},Account:{type:{_eq:"customer"},Account_Users:{role:{_eq:"user"},userId:{_eq:d}}},User_Account_Locations:{Account_User:{userId:{_eq:d},accountId:{_eq:n}}}}}}};case"sensor":return{query:p.UH,variables:{category:"sensor",locationId:l}};case"service":return{query:p.kx};case"sla":return{query:p.t1,variables:{type:"priority",adminId:n}};case"sublocation":return{query:p.zR,variables:{locationId:l}};case"supplier":var b={type:{_eq:"supplier"}};return t&&(b.PostcodeAreas={PostcodeArea:{area:{_eq:t}},entity:{_eq:"Account"},status:{_eq:"active"}}),u&&(b.ServiceSchedule={status:{_eq:"active"},entity:{_eq:"Supplier"},serviceId:{_eq:u}},t&&(b.ServiceSchedule.PostcodeAreas={PostcodeArea:{area:{_eq:t}}})),{query:p.by,variables:{where:b}};case"user":return{query:p.yR,variables:{accountId:n}};case"usersForBookings":return{query:p.yR,variables:{accountId:m}};case"tenant":return{query:p.RJ};case"taxonomyGroup":return{query:p.Cj,variables:{type:s}};case"expenseCategory":return{query:p.Ve};default:return{query:p.qd}}},q=(0,s.memo)(function(e){var n,t=e.AddForm,a=e.accountId,d=e.area,c=e.assetCategoryId,p=e.control,g=e.entity,j=e.entityId,q=e.errors,C=e.id,P=e.isClearable,_=e.isDisabled,k=e.label,A=e.locationId,T=e.name,R=e.serviceId,S=e.taxonomyGroupType,L=e.customerId,E=e.customerRole,M=e.type,F=e.userId,O=e.invoiceThreshold,N=e.quoteThreshold,D=(0,i.Z)(e,["AddForm","accountId","area","assetCategoryId","control","entity","entityId","errors","id","isClearable","isDisabled","label","locationId","name","serviceId","taxonomyGroupType","customerId","customerRole","type","userId","invoiceThreshold","quoteThreshold"]),B=(0,v.x)(),W=(0,s.useState)(!1),z=W[0],U=W[1],G=(0,s.useState)(),H=G[0],V=G[1],$=(0,s.useState)(!1),Q=$[0],J=$[1],X=(0,s.useContext)(m.Z),K=(0,s.useContext)(h.Z).hasRole,Y=(0,s.useState)(!1),ee=Y[0],en=Y[1];(0,s.useEffect)(function(){return en(!1),J(!1),function(){}},[a,c,g,j,A,R,M,L,E,F]);var et=(n=(0,o.Z)(function(){var e,n,t,o,i,u,s;return(0,l.__generator)(this,function(i){switch(i.label){case 0:if(Q)return en(!0),[2,null];return U(!0),n=(e=Z({accountId:a,area:d,assetCategoryId:c,entity:g,entityId:j,hasRole:K,id:C,locationId:A,serviceId:R,taxonomyGroupType:S,customerId:L,customerRole:E,type:M,userId:F,invoiceThreshold:O,quoteThreshold:N})).query,o=void 0===(t=e.variables)?{}:t,[4,B.query({query:n,variables:(0,r.Z)({},o)})];case 1:return V((void 0===(u=i.sent().data)?{items:[]}:u).items),U(!1),J(!0),en(!0),[2]}})}),function(){return n.apply(this,arguments)}),eo=function(){X.show({content:(0,u.jsx)("div",{children:(0,u.jsx)(t,{})}),title:"Add form"})};return(0,u.jsx)(y.Z,{id:T,label:k,children:(0,u.jsxs)(f.Z,{children:[(0,u.jsx)(b.Z,{md:t?11:12,children:(0,u.jsx)(I.Z,(0,r.Z)({autoload:!1,blurInputOnSelect:!0,cacheOptions:!0,control:p,errors:q,isDisabled:_,isClearable:P,isLoading:z,menuIsOpen:ee,options:H,onFocus:et,onBlur:function(){en(!1)},name:T,searchable:!0},D),D.defaultValue)}),t&&(0,u.jsx)(b.Z,{md:1,children:(0,u.jsx)(w,{children:(0,u.jsx)(x.Z,{content:null,startIcon:"plus",size:"sm",onClick:eo})})})]})})},j),w=c.ZP.div.withConfig({displayName:"select__ButtonWrapper",componentId:"sc-a24ec191-0"})(g());q.propTypes={AddForm:d.object,area:d.string,accountId:d.number,assetCategoryId:d.number,control:d.object.isRequired,errors:d.object.isRequired,entity:d.string,entityId:d.number,id:d.number,isClearable:d.bool,label:d.string.isRequired,locationId:d.number,name:d.string.isRequired,serviceId:d.number,taxonomyGroupType:(0,d.oneOf)(["expenseCategory","costCategory","jobTags"]),type:d.string},q.defaultProps={isClearable:!0,label:"Account",name:"account",type:"account"}},97432:function(e,n,t){"use strict";t.d(n,{l:function(){return o}});var o=function(e,n){var t=Math.pow(10,n);return Math.round(e*t)/t}},98552:function(e,n,t){"use strict";t.d(n,{SR:function(){return a},Tq:function(){return l},YK:function(){return i},cJ:function(){return r},pX:function(){return o}});var o=["customerVat","supplier"],r=["ProformaInvoiceCustomer","ProformaInvoiceSupplier"],i=["customerPpmInvoice","supplierPpmInvoice"],a={customer:["customerVat","ProformaInvoiceCustomer","customerPpmInvoice"],supplier:["supplier","ProformaInvoiceSupplier","supplierPpmInvoice"]},l={customerVat:"Customer VAT Invoice",supplier:"Supplier Invoice",ProformaInvoiceCustomer:"Customer ad-hoc Invoice",ProformaInvoiceSupplier:"Supplier ad-hoc Invoice",customerPpmInvoice:"PPM Customer Invoice",supplierPpmInvoice:"PPM Supplier Invoice"}},14381:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return D}});var o=t(85893),r=t(11163),i=t.n(r),a=t(67294),l=t(6812),u=t(41085),s=t(9270),d=t(62140),c=t(45697),v=t(11585),p=t(16540),m=t(71225),h=t(30016),y=t(4380),f=t(1306),b=t(76225),I=t(85113),x=t(2845),g=function(e){var n,t,r,i,a,l,u,c,g,j,Z=e.tenant,q=e.refetch,w=e.location,C=(0,x.x)().hasRole,P=(0,I.WE)(w,"registered"),_=w.createdAt;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(s.Z,{children:(0,o.jsxs)(d.Z,{md:4,children:[(0,o.jsx)(y.g,{avatar:(0,m.Q)(null===(n=w.customer[0].account)||void 0===n?void 0:n.media),entity:{id:w.id,description:w.customer[0].account.name,name:Z.fullName||"Not Specified"},entityName:"Tenant"}),(0,o.jsx)(b.J,{data:{accountName:null,country:null==P?void 0:null===(t=P.address)||void 0===t?void 0:null===(r=t.country)||void 0===r?void 0:r.name,createdAt:_,fullName:null==Z?void 0:Z.fullName,position:null==Z?void 0:Z.position,phone:null==Z?void 0:Z.phone,xeroContactId:null===(i=w.customer)||void 0===i?void 0:null===(a=i[0])||void 0===a?void 0:null===(l=a.account)||void 0===l?void 0:null===(u=l.meta)||void 0===u?void 0:u.xeroContactId}}),(0,o.jsx)(v.Z,{title:"Contact",children:(0,o.jsxs)("div",{children:[(0,o.jsx)(p.Z,{rows:[{key:"Name",value:"".concat(Z.nameFirst," ").concat(Z.nameLast)},{key:"Phone",value:Z.phone},{key:"Email",value:Z.email}]}),(0,o.jsx)("br",{})]})}),Z&&(0,o.jsx)(f.f,{address:null===(g=null===(c=null==Z?void 0:Z.booking[0])||void 0===c?void 0:c.location.addresses[0])||void 0===g?void 0:g.address,entity:"Account",entityId:null==Z?void 0:Z.id,id:null==Z?void 0:Z.id,refetch:q,title:"Registered Address",type:"registered"}),C("admin")&&(0,o.jsx)(h.E,{entity:"Account",entityId:Z.id,open:!0,title:"Notes"})]})})})};g.propTypes={tenant:c.object.isRequired};var j=t(7297),Z=t(75063);function q(){var e=(0,j.Z)(['\n  query GetTenant($id: Int!) {\n    tenant: User_by_pk(id: $id) {\n      email\n      fullName\n      id\n      phone\n      invoiceThreshold\n      meta\n      nameFirst\n      nameLast\n      booking: TenantBookings {\n        id\n        location: Location {\n          name\n          id\n          addresses: Addresses {\n            address: Address {\n              geo\n              id\n              invoicingEntity\n              name\n              county\n              addressLine1\n              addressLine2\n              addressLine3\n              postCode\n              city\n            }\n          }\n          customer: Account_Locations(where: { Account: { type: { _eq: "customer" } } }) {\n            account: Account {\n              id\n              companyNumber\n              createdAt\n              name\n              status\n              type\n              updatedAt\n              website\n              clientType\n              managerId\n              vatId\n              meta\n              media: Media {\n                id\n                medium: Medium {\n                  id\n                  category\n                  filename\n                  meta\n                  type\n                }\n              }\n              manager: Manager {\n                id\n                fullName\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n']);return q=function(){return e},e}var w=(0,Z.Ps)(q()),C=t(8059),P=t(66854),_=t(66264),k=t(10925),A=t(17974),T=t(18586),R=t(98456),S=t(51233),L=t(67259),E=t(5201),M=function(e){var n,t,c,v,p,m,h,y,f,b,I,j,Z,q,M,F,O,N,D,B,W,z,U,G,H,V,$,Q,J,X,K,Y,ee,en,et,eo,er,ei,ea,el,eu,es,ed,ec,ev,ep,em,eh=e.id,ey=(0,x.x)().hasRole,ef=(0,r.useRouter)().query,eb=(0,T.q)(),eI=null==eb?void 0:null===(n=eb.admin)||void 0===n?void 0:null===(t=n.modules)||void 0===t?void 0:t.assets,ex=ey("tenant"),eg=(0,a.useMemo)(function(){return ef.tab||"details"},[ef.tab]),ej=(0,l.a)(w,{fetchPolicy:"no-cache",variables:{id:eh}}),eZ=ej.loading,eq=ej.data,ew=ej.error,eC=ej.refetch;if(ew)return i().push("/404"),!1;if(eZ)return(0,o.jsx)(S.Z,{height:"100%",width:"100%",justifyContent:"center",alignItems:"center",children:(0,o.jsx)(R.Z,{color:"secondary"})});var eP=[(0,o.jsx)("div",{active:"details"===eg||!eg,label:"Details",children:(0,o.jsx)(g,{tenant:eq.tenant,refetch:eC,location:eq.tenant.booking[0].location})}),(0,o.jsx)("div",{active:"sublocations"===eg,label:"Sublocations",children:(0,o.jsx)(_.E,{editable:!ex,hideLink:ex,location:eq.tenant.booking[0].location,customer:eq.tenant.booking[0].location.customer[0].account})}),(0,o.jsx)("div",{hide:!eI,active:"assets"===eg,label:"Assets",children:(0,o.jsx)(A.E,{editable:!1,hideLink:!0,hideCustomerInfo:!0,hideLocationInfo:!0,showHeader:!1,initialFilters:{locationId:null===(v=null==eq?void 0:null===(c=eq.tenant)||void 0===c?void 0:c.booking[0])||void 0===v?void 0:null===(p=v.location)||void 0===p?void 0:p.id,filterType:"tenant_assets"}})}),(0,o.jsx)("div",{active:"slas"===eg,label:"SLAs",children:(0,o.jsxs)(u.Z,{handleChange:!1,children:[(0,o.jsx)("div",{active:!0,label:"Work Order SLAs",children:(0,o.jsx)(k.H,{title:"Work Order SLAs",subtype:"reactive",isEntity:!0,isLocation:!0,entity:"Location",entityId:null===(h=null==eq?void 0:null===(m=eq.tenant)||void 0===m?void 0:m.booking[0])||void 0===h?void 0:null===(y=h.location)||void 0===y?void 0:y.id})}),(0,o.jsx)("div",{label:"Quote SLAs",children:(0,o.jsx)(k.H,{title:"Quote SLAs",subtype:"quote",isEntity:!0,isLocation:!0,entity:"Location",entityId:null===(b=null==eq?void 0:null===(f=eq.tenant)||void 0===f?void 0:f.booking[0])||void 0===b?void 0:null===(I=b.location)||void 0===I?void 0:I.id})})]})}),(0,o.jsx)("div",{active:"work-orders"===eg,label:"Work Orders",children:(0,o.jsx)(L.A,{filtersVisibilityModel:{customer:ey("admin"),location:ey(["admin","supplier"]),user:ey("supplier"),manager:!1,customerManager:!1,accountManager:!1},entityRelationToFetch:{locationId:null===(Z=null==eq?void 0:null===(j=eq.tenant)||void 0===j?void 0:j.booking[0])||void 0===Z?void 0:null===(q=Z.location)||void 0===q?void 0:q.id},initialFilters:{startDate:null,endDate:null,status:null,id:null,filterType:"tenants_work_orders_tab"}})}),(0,o.jsx)("div",{active:"compliance"===eg,label:"Compliance",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(d.Z,{md:6,children:(0,o.jsx)(C.M,{data:null===(F=null==eq?void 0:null===(M=eq.tenant)||void 0===M?void 0:M.booking[0])||void 0===F?void 0:null===(O=F.location)||void 0===O?void 0:O.compliances,entity:"Location",entityId:null===(D=null==eq?void 0:null===(N=eq.tenant)||void 0===N?void 0:N.booking[0])||void 0===D?void 0:null===(B=D.location)||void 0===B?void 0:B.id,refetch:eC,showOverallRating:!0})}),(0,o.jsx)(d.Z,{md:6,children:(0,o.jsx)(P.F,{compliance:!0,locationId:null===(z=null==eq?void 0:null===(W=eq.tenant)||void 0===W?void 0:W.booking[0])||void 0===z?void 0:null===(U=z.location)||void 0===U?void 0:U.id,showFilters:!1})})]})}),(0,o.jsx)("div",{active:"planned-maintenance"===eg,label:"Planned Maintenance",children:(0,o.jsx)(E.A,{locationId:null===(H=null==eq?void 0:null===(G=eq.tenant)||void 0===G?void 0:G.booking[0])||void 0===H?void 0:null===(V=H.location)||void 0===V?void 0:V.id,locationName:null===(Q=null==eq?void 0:null===($=eq.tenant)||void 0===$?void 0:$.booking[0])||void 0===Q?void 0:null===(J=Q.location)||void 0===J?void 0:J.name,calendarInitialFilters:{filterType:"tenant_".concat(null===(K=null==eq?void 0:null===(X=eq.tenant)||void 0===X?void 0:X.booking[0])||void 0===K?void 0:null===(Y=K.location)||void 0===Y?void 0:Y.id),locationId:null===(en=null==eq?void 0:null===(ee=eq.tenant)||void 0===ee?void 0:ee.booking[0])||void 0===en?void 0:null===(et=en.location)||void 0===et?void 0:et.id},hideCalendarFilters:["location"],tableInitialFilters:{filterType:"tenant_".concat(null===(er=null==eq?void 0:null===(eo=eq.tenant)||void 0===eo?void 0:eo.booking[0])||void 0===er?void 0:null===(ei=er.location)||void 0===ei?void 0:ei.id),locationId:null===(el=null==eq?void 0:null===(ea=eq.tenant)||void 0===ea?void 0:ea.booking[0])||void 0===el?void 0:null===(eu=el.location)||void 0===eu?void 0:eu.id},hideTableFilters:["location"],itemsInitialFilters:{locationId:null===(ed=null==eq?void 0:null===(es=eq.tenant)||void 0===es?void 0:es.booking[0])||void 0===ed?void 0:null===(ec=ed.location)||void 0===ec?void 0:ec.id,filterType:"tenant_".concat(null===(ep=null==eq?void 0:null===(ev=eq.tenant)||void 0===ev?void 0:ev.booking[0])||void 0===ep?void 0:null===(em=ep.location)||void 0===em?void 0:em.id)},hideItemsFilters:["location"],hideFinances:!0,hideItems:!0})})];return(0,o.jsx)(u.Z,{children:eP.filter(function(e){return!e.props.hide}).map(function(e){return e})},eg)},F=function(){var e=(0,r.useRouter)().query,n=(0,x.x)(),t=n.hasRole,a=n.user,l=t("tenant"),u=l?a.id:e.id;return u?(0,o.jsx)(M,{id:u,isTenant:l,adminId:null==a?void 0:a.adminId}):(i().push("/404"),null)},O=t(58849),N=function(){return(0,o.jsx)(F,{})};N.getLayout=function(e){return(0,o.jsx)(O.Z,{children:e})};var D=N}},function(e){e.O(0,[3662,367,6898,9809,2283,212,619,8890,2583,4135,8579,6043,1564,4244,1336,3911,3776,5370,2329,778,6540,4046,1023,9957,1870,2797,9241,653,8062,1207,2429,4061,597,4211,8948,1121,1303,6127,3723,7548,3977,5283,8344,8849,6733,1741,7305,2781,1675,6625,5656,5201,4342,9774,2888,179],function(){return e(e.s=24903)}),_N_E=e.O()}]);