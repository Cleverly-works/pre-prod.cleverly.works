"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6625],{10925:function(e,t,n){n.d(t,{H:function(){return ep}});var i=n(47568),o=n(26042),r=n(69396),s=n(828),a=n(97582),u=n(85893),l=n(45697),d=n.n(l),c=n(67294),m=n(6812),p=n(50319),h=n(7297),x=n(75063);function Z(){var e=(0,h.Z)(['\n  query GetSlas(\n    $subtype: sla_subtype\n    $entity: String\n    $entityId: Int\n    $isEntity: Boolean!\n    $isLocation: Boolean!\n    $customerId: Int\n    $limit: Int\n    $offset: Int\n    $q: String\n    $orderBy: SLA_order_by!\n  ) {\n    slas: SLA(\n      limit: $limit\n      offset: $offset\n      where: { subtype: { _eq: $subtype }, name: { _ilike: $q } }\n      order_by: [$orderBy]\n    ) {\n      id\n      subtype\n      name\n      notes\n      normalRate\n      oohRate\n      premiumRate\n      minimumInterval\n      minimumLength\n      quoteReturned\n      quoteReturnedUnit\n      onSite\n      onSiteUnit\n      jobReport\n      jobReportUnit\n      completion\n      completionUnit\n      status\n      isDefault\n      customerSla: SLA_Entities(\n        where: { entity: { _eq: "Account" }, entityId: { _eq: $customerId } }\n      ) @include(if: $isLocation) {\n        status\n        id\n        entity\n        entityId\n        quoteReturned\n        quoteReturnedUnit\n        onSite\n        onSiteUnit\n        jobReport\n        jobReportUnit\n        completion\n        completionUnit\n        notes\n        inUse\n        normalRate\n        oohRate\n        premiumRate\n        minimumInterval\n        minimumLength\n        slaId\n      }\n      entities: SLA_Entities(\n        where: { entity: { _eq: $entity }, entityId: { _eq: $entityId } }\n        order_by: { slaId: asc }\n      ) @include(if: $isEntity) {\n        status\n        id\n        entity\n        entityId\n        quoteReturned\n        quoteReturnedUnit\n        onSite\n        onSiteUnit\n        jobReport\n        jobReportUnit\n        completion\n        completionUnit\n        notes\n        inUse\n        normalRate\n        oohRate\n        premiumRate\n        minimumInterval\n        minimumLength\n        slaId\n      }\n    }\n    meta: SLA_aggregate(where: { subtype: { _eq: $subtype }, name: { _ilike: $q } }) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n']);return Z=function(){return e},e}function R(){var e=(0,h.Z)(["\n  query GetSla($id: Int!) {\n    sla: SLA_by_pk(id: $id) {\n      id\n      subtype\n      name\n      notes\n      normalRate\n      oohRate\n      premiumRate\n      minimumInterval\n      minimumLength\n      quoteReturned\n      quoteReturnedUnit\n      onSite\n      onSiteUnit\n      jobReport\n      jobReportUnit\n      completion\n      completionUnit\n      status\n      isDefault\n    }\n  }\n"]);return R=function(){return e},e}function f(){var e=(0,h.Z)(["\n  mutation AddSla($objects: [SLA_insert_input!]!) {\n    insert_SLA(objects: $objects) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return f=function(){return e},e}function b(){var e=(0,h.Z)(["\n  mutation UpdateSla($id: Int!, $changes: SLA_set_input) {\n    update_SLA_by_pk(pk_columns: { id: $id }, _set: $changes) {\n      id\n    }\n  }\n"]);return b=function(){return e},e}function v(){var e=(0,h.Z)(["\n  query GetSlaEntity($id: Int!, $slaEntityId: Int, $hasEntity: Boolean!) {\n    sla: SLA_by_pk(id: $id) {\n      id\n      subtype\n      name\n      notes\n      normalRate\n      oohRate\n      premiumRate\n      minimumInterval\n      minimumLength\n      quoteReturned\n      quoteReturnedUnit\n      onSite\n      onSiteUnit\n      jobReport\n      jobReportUnit\n      completion\n      completionUnit\n      status\n      slaEntity: SLA_Entities(where: { id: { _eq: $slaEntityId } }) @include(if: $hasEntity) {\n        id\n        notes\n        normalRate\n        oohRate\n        premiumRate\n        minimumInterval\n        minimumLength\n        quoteReturned\n        quoteReturnedUnit\n        onSite\n        onSiteUnit\n        jobReport\n        jobReportUnit\n        completion\n        completionUnit\n        status\n      }\n    }\n  }\n"]);return v=function(){return e},e}function j(){var e=(0,h.Z)(["\n  mutation addSla($objects: [SLA_Entity_insert_input!]!) {\n    insert_SLA_Entity(objects: $objects) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return j=function(){return e},e}function y(){var e=(0,h.Z)(["\n  mutation UpdateSla($id: Int!, $changes: SLA_Entity_set_input) {\n    update_SLA_Entity_by_pk(pk_columns: { id: $id }, _set: $changes) {\n      id\n    }\n  }\n"]);return y=function(){return e},e}var S=(0,x.Ps)(Z()),U=(0,x.Ps)(R()),q=(0,x.Ps)(f()),g=(0,x.Ps)(b()),w=(0,x.Ps)(v()),_=(0,x.Ps)(j()),$=(0,x.Ps)(y()),I=n(42283),E=n(79665),L=n(76600),C=n(9270),F=n(62140),A=n(49501),D=n(55563),N=n(95103),O=n(6710),k=n(33006),H=n(58594),P=n(74231),G=(0,P.Ry)().shape({name:(0,P.Z_)().required(),status:(0,P.Z_)().oneOf(["active","inactive"]).required(),normalRate:(0,P.Rx)().when("$subtype",{is:function(e){return"reactive"===e},then:function(){return(0,P.Rx)().min(0).required()}}),oohRate:(0,P.Rx)().when("$subtype",{is:function(e){return"reactive"===e},then:function(){return(0,P.Rx)().min(0).required()}}),premiumRate:(0,P.Rx)().when("$subtype",{is:function(e){return"reactive"===e},then:function(){return(0,P.Rx)().min(0).required()}}),onSite:(0,P.Rx)().when("$subtype",{is:function(e){return"reactive"===e},then:function(){return(0,P.Rx)().min(0).required()}}),onSiteUnit:(0,P.Z_)().when("$subtype",{is:function(e){return"reactive"===e},then:function(){return(0,P.Z_)().oneOf(["minutes","hours","days"]).required()}}),jobReport:(0,P.Rx)().when("$subtype",{is:function(e){return"reactive"===e},then:function(){return(0,P.Rx)().min(0).required()}}),jobReportUnit:(0,P.Z_)().when("$subtype",{is:function(e){return"reactive"===e},then:function(){return(0,P.Z_)().oneOf(["minutes","hours","days"]).required()}}),completion:(0,P.Rx)().when("$subtype",{is:function(e){return"reactive"===e},then:function(){return(0,P.Rx)().min(0).required()}}),completionUnit:(0,P.Z_)().when("$subtype",{is:function(e){return"reactive"===e},then:function(){return(0,P.Z_)().oneOf(["minutes","hours","days"]).required()}}),quoteReturned:(0,P.Rx)().when("$subtype",{is:function(e){return"quote"===e},then:function(){return(0,P.Rx)().min(0).required()}}),quoteReturnedUnit:(0,P.Z_)().when("$subtype",{is:function(e){return"quote"===e},then:function(){return(0,P.Z_)().oneOf(["minutes","hours","days"]).required()}}),group:(0,P.Rx)()}),M=(0,P.Ry)().shape({status:(0,P.Z_)().oneOf(["active","inactive"]).required(),normalRate:(0,P.Rx)().when("$subtype",{is:function(e){return"reactive"===e},then:function(){return(0,P.Rx)().min(0).required()}}),oohRate:(0,P.Rx)().when("$subtype",{is:function(e){return"reactive"===e},then:function(){return(0,P.Rx)().min(0).required()}}),premiumRate:(0,P.Rx)().when("$subtype",{is:function(e){return"reactive"===e},then:function(){return(0,P.Rx)().min(0).required()}}),onSite:(0,P.Rx)().when("$subtype",{is:function(e){return"reactive"===e},then:function(){return(0,P.Rx)().min(0).required()}}),onSiteUnit:(0,P.Z_)().when("$subtype",{is:function(e){return"reactive"===e},then:function(){return(0,P.Z_)().oneOf(["minutes","hours","days"]).required()}}),jobReport:(0,P.Rx)().when("$subtype",{is:function(e){return"reactive"===e},then:function(){return(0,P.Rx)().min(0).required()}}),jobReportUnit:(0,P.Z_)().when("$subtype",{is:function(e){return"reactive"===e},then:function(){return(0,P.Z_)().oneOf(["minutes","hours","days"]).required()}}),completion:(0,P.Rx)().when("$subtype",{is:function(e){return"reactive"===e},then:function(){return(0,P.Rx)().min(0).required()}}),completionUnit:(0,P.Z_)().when("$subtype",{is:function(e){return"reactive"===e},then:function(){return(0,P.Z_)().oneOf(["minutes","hours","days"]).required()}}),quoteReturned:(0,P.Rx)().when("$subtype",{is:function(e){return"quote"===e},then:function(){return(0,P.Rx)().min(0).required()}}),quoteReturnedUnit:(0,P.Z_)().when("$subtype",{is:function(e){return"quote"===e},then:function(){return(0,P.Z_)().oneOf(["minutes","hours","days"]).required()}})}),Q=function(e,t,n){return"quote"===t?{type:"priority",subtype:t,name:e.name,status:e.status,notes:e.notes,quoteReturned:e.quoteReturned,quoteReturnedUnit:e.quoteReturnedUnit,adminId:n}:{type:"priority",subtype:t,name:e.name,status:e.status,notes:e.notes,isDefault:e.isDefault,normalRate:parseFloat(e.normalRate).toFixed(1),oohRate:parseFloat(e.oohRate).toFixed(1),premiumRate:parseFloat(e.premiumRate).toFixed(1),onSite:e.onSite,onSiteUnit:e.onSiteUnit,jobReport:e.jobReport,jobReportUnit:e.jobReportUnit,completion:e.completion,completionUnit:e.completionUnit,adminId:n}},T=n(2845),B=n(21789),J=n(10367),V=n(98456),W=n(51233);function Y(){var e=(0,h.Z)(["\n  display: flex;\n  max-width: 180px;\n\n  & input {\n    margin-right: 5px;\n    text-align: center;\n    width: 70px;\n  }\n\n  & select {\n    width: 90px;\n  }\n"]);return Y=function(){return e},e}var z=function(e){var t,n=e.id,l=e.subtype,d=e.close,c=e.slas,h=(0,T.x)().user,x=(0,I.cI)({defaultValues:{status:"active"},resolver:(0,E.S)(G)}),Z=x.errors,R=x.handleSubmit,f=x.register,b=x.reset,v=(0,m.a)(U,{skip:!n,variables:{id:n},onCompleted:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{sla:{}}).sla;b(e)}}).loading,j=(0,s.Z)((0,p.D)(q,{refetchQueries:["GetSla","GetSlas"],onCompleted:function(){d&&d()}}),2),y=j[0],S=j[1].loading,w=(0,s.Z)((0,p.D)(g,{refetchQueries:["GetSla","GetSlas"],onCompleted:function(){d&&d()}}),2),_=w[0],$=w[1].loading,P=(t=(0,i.Z)(function(e){var t,i;return(0,a.__generator)(this,function(s){switch(s.label){case 0:if((i=null!==(t=c.find(function(e){return e.isDefault}))&&void 0!==t?t:null)&&_({variables:{id:i.id,changes:(0,r.Z)((0,o.Z)({},Q(i,"reactive",h.adminId)),{isDefault:!1})}}),!n)return[3,2];return[4,_({variables:{id:n,changes:Q(e,l,h.adminId)}})];case 1:return s.sent(),[3,4];case 2:return[4,y({variables:{objects:[Q(e,l,h.adminId)]}})];case 3:s.sent(),s.label=4;case 4:return[2]}})}),function(e){return t.apply(this,arguments)}),M={errors:Z,register:f},J={errors:Z,min:0,register:f,type:"number"};return v||S||$?(0,u.jsx)(W.Z,{alignItems:"center",children:(0,u.jsx)(V.Z,{color:"secondary"})}):"quote"===l?(0,u.jsxs)(L.Z,{id:"offCanvasForm",handleSubmit:R(P),children:[(0,u.jsxs)(C.Z,{children:[(0,u.jsxs)(F.Z,{md:4,children:[(0,u.jsx)(A.Z,{label:"Name",children:(0,u.jsx)(D.Z,(0,r.Z)((0,o.Z)({},M),{name:"name"}))}),(0,u.jsx)(A.Z,{label:"Status",children:(0,u.jsx)(N.Z,(0,r.Z)((0,o.Z)({},M),{name:"status",options:B.bg}))})]}),(0,u.jsx)(F.Z,{md:8,children:(0,u.jsx)(A.Z,{label:"Notes",children:(0,u.jsx)(O.Z,(0,r.Z)((0,o.Z)({},M),{name:"notes",rows:2}))})})]}),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(k.Z,{content:"Timings",tag:"h3"}),(0,u.jsx)(C.Z,{children:(0,u.jsx)(F.Z,{md:4,children:(0,u.jsx)(A.Z,{label:"Quote Returned",children:(0,u.jsxs)(K,{children:[(0,u.jsx)(D.Z,(0,r.Z)((0,o.Z)({},M),{name:"quoteReturned",type:"number",min:0})),(0,u.jsx)(N.Z,(0,r.Z)((0,o.Z)({},M),{name:"quoteReturnedUnit",label:"",options:[{text:"Select",value:""},{text:"Minutes",value:"minutes"},{text:"Hours",value:"hours"},{text:"Days",value:"days"}]}))]})})})})]})]}):(0,u.jsxs)(L.Z,{id:"offCanvasForm",handleSubmit:R(P),children:[(0,u.jsxs)(C.Z,{children:[(0,u.jsxs)(F.Z,{md:4,children:[(0,u.jsx)(A.Z,{label:"Name",children:(0,u.jsx)(D.Z,(0,r.Z)((0,o.Z)({},M),{name:"name"}))}),(0,u.jsx)(A.Z,{label:"Status",children:(0,u.jsx)(N.Z,(0,r.Z)((0,o.Z)({},M),{name:"status",options:B.bg}))})]}),(0,u.jsxs)(F.Z,{md:8,children:[(0,u.jsx)(A.Z,{label:"Notes",children:(0,u.jsx)(O.Z,(0,r.Z)((0,o.Z)({},M),{name:"notes",rows:2}))}),(0,u.jsx)(A.Z,{label:"Select as default sla",children:(0,u.jsx)(H.Z,(0,r.Z)((0,o.Z)({},M),{name:"isDefault",data:[{label:"isDefault",key:"isDefault",value:!0}]}))})]})]}),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(k.Z,{content:"Default Rates",tag:"h3"}),(0,u.jsxs)(C.Z,{children:[(0,u.jsx)(F.Z,{md:4,children:(0,u.jsx)(A.Z,{label:"Normal Rate",children:(0,u.jsx)(D.Z,(0,r.Z)((0,o.Z)({},J),{name:"normalRate",step:"0.01"}))})}),(0,u.jsx)(F.Z,{md:4,children:(0,u.jsx)(A.Z,{label:"Out Of Hours Rate",children:(0,u.jsx)(D.Z,(0,r.Z)((0,o.Z)({},J),{name:"oohRate",step:"0.01"}))})}),(0,u.jsx)(F.Z,{md:4,children:(0,u.jsx)(A.Z,{label:"Premium Rate",children:(0,u.jsx)(D.Z,(0,r.Z)((0,o.Z)({},J),{name:"premiumRate",step:"0.01"}))})})]})]}),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(k.Z,{content:"Timings",tag:"h3"}),(0,u.jsxs)(C.Z,{children:[(0,u.jsx)(F.Z,{md:4,children:(0,u.jsx)(A.Z,{label:"On Site",children:(0,u.jsxs)(K,{children:[(0,u.jsx)(D.Z,(0,r.Z)((0,o.Z)({},M),{name:"onSite",type:"number",min:0})),(0,u.jsx)(N.Z,(0,r.Z)((0,o.Z)({},M),{name:"onSiteUnit",label:"",options:[{text:"Select",value:""},{text:"Minutes",value:"minutes"},{text:"Hours",value:"hours"},{text:"Days",value:"days"}]}))]})})}),(0,u.jsx)(F.Z,{md:4,children:(0,u.jsx)(A.Z,{label:"Job Report",children:(0,u.jsxs)(K,{children:[(0,u.jsx)(D.Z,(0,r.Z)((0,o.Z)({},M),{name:"jobReport",type:"number",min:0})),(0,u.jsx)(N.Z,(0,r.Z)((0,o.Z)({},M),{name:"jobReportUnit",label:"",options:[{text:"Select",value:""},{text:"Minutes",value:"minutes"},{text:"Hours",value:"hours"},{text:"Days",value:"days"}]}))]})})}),(0,u.jsx)(F.Z,{md:4,children:(0,u.jsx)(A.Z,{label:"Completion",children:(0,u.jsxs)(K,{children:[(0,u.jsx)(D.Z,(0,r.Z)((0,o.Z)({},M),{name:"completion",type:"number",min:0})),(0,u.jsx)(N.Z,(0,r.Z)((0,o.Z)({},M),{name:"completionUnit",label:"",options:[{text:"Select",value:""},{text:"Minutes",value:"minutes"},{text:"Hours",value:"hours"},{text:"Days",value:"days"}]}))]})})})]})]})]})},K=J.ZP.div.withConfig({displayName:"slaForm__StyledOption",componentId:"sc-65c1827e-0"})(Y());z.defaultProps={close:function(){}},z.propTypes={id:d().number,subtype:d().oneOf(["reactive","quote"]),close:d().func};var X=n(20705),ee=n(1691),et=n(11057),en=n(90629),ei=n(72852),eo=n(15861),er=n(15033),es=n(64872),ea=n(5336);function eu(){var e=(0,h.Z)(["\n  display: flex;\n  max-width: 180px;\n\n  & input {\n    margin-right: 5px;\n    text-align: center;\n    width: 70px;\n  }\n\n  & select {\n    width: 90px;\n  }\n"]);return eu=function(){return e},e}var el=function(e){var t=e.subtype,n=e.id,l=e.slaEntityId,d=e.entity,h=e.entityId,x=e.close,Z=(0,I.cI)({defaultValues:{status:"active"},context:{subtype:t},resolver:(0,E.S)(M)}),R=Z.errors,f=Z.handleSubmit,b=Z.register,v=Z.reset,j=(0,m.a)(w,{variables:{id:n,slaEntityId:l,hasEntity:!!l}}),y=j.data,S=(void 0===y?{sla:{}}:y).sla,U=j.loading;(0,c.useEffect)(function(){var e;l&&(null===(e=S.slaEntity)||void 0===e?void 0:e[0])&&v(S.slaEntity[0])},[S]);var q,g=(0,s.Z)((0,p.D)(_,{refetchQueries:["GetSlaEntity","GetSlas"],onCompleted:function(){x&&x()}}),2),H=g[0],P=g[1].loading,G=(0,s.Z)((0,p.D)($,{refetchQueries:["GetSlaEntity","GetSlas"],onCompleted:function(){x&&x()}}),2),Q=G[0],T=G[1].loading,J=(q=(0,i.Z)(function(e){var i;return(0,a.__generator)(this,function(s){switch(s.label){case 0:var a,u;if(i="quote"===t?{inUse:"active"===e.status,status:e.status,notes:e.notes,quoteReturned:e.quoteReturned,quoteReturnedUnit:e.quoteReturnedUnit}:{inUse:"active"===e.status,status:e.status,notes:e.notes,normalRate:parseFloat(e.normalRate).toFixed(1),oohRate:parseFloat(e.oohRate).toFixed(1),premiumRate:parseFloat(e.premiumRate).toFixed(1),onSite:e.onSite,onSiteUnit:e.onSiteUnit,jobReport:e.jobReport,jobReportUnit:e.jobReportUnit,completion:e.completion,completionUnit:e.completionUnit},!l)return[3,2];return[4,Q({variables:{id:l,changes:i}})];case 1:return s.sent(),[3,4];case 2:return[4,H({variables:{objects:[(0,r.Z)((0,o.Z)({},i),{slaId:n,entity:d,entityId:h})]}})];case 3:s.sent(),s.label=4;case 4:return[2]}})}),function(e){return q.apply(this,arguments)}),Y={errors:R,register:b},z={errors:R,min:0,register:b,type:"number"};return U||P||T?(0,u.jsx)(W.Z,{alignItems:"center",children:(0,u.jsx)(V.Z,{color:"secondary"})}):"quote"===t?(0,u.jsxs)(L.Z,{id:"offCanvasForm",handleSubmit:f(J),children:[(0,u.jsxs)(C.Z,{children:[(0,u.jsxs)(F.Z,{md:4,children:[(0,u.jsx)(k.Z,{content:"SLA: ".concat(S.name),tag:"h2"}),(0,u.jsx)(A.Z,{label:"Status",children:(0,u.jsx)(N.Z,(0,r.Z)((0,o.Z)({},Y),{name:"status",options:B.bg}))})]}),(0,u.jsx)(F.Z,{md:8,children:(0,u.jsx)(A.Z,{label:"Notes",children:(0,u.jsx)(O.Z,(0,r.Z)((0,o.Z)({},Y),{name:"notes",rows:2}))})})]}),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(k.Z,{content:"Timings",tag:"h3"}),(0,u.jsx)(C.Z,{children:(0,u.jsx)(F.Z,{md:4,children:(0,u.jsx)(A.Z,{label:"Quote Returned",children:(0,u.jsxs)(ed,{children:[(0,u.jsx)(D.Z,(0,r.Z)((0,o.Z)({},Y),{name:"quoteReturned",type:"number",min:0})),(0,u.jsx)(N.Z,(0,r.Z)((0,o.Z)({},Y),{name:"quoteReturnedUnit",label:"",options:[{text:"Select",value:""},{text:"Minutes",value:"minutes"},{text:"Hours",value:"hours"},{text:"Days",value:"days"}]}))]})})})})]})]}):(0,u.jsxs)(L.Z,{id:"offCanvasForm",handleSubmit:f(J),children:[(0,u.jsxs)(C.Z,{children:[(0,u.jsxs)(F.Z,{md:4,children:[(0,u.jsx)(k.Z,{content:"SLA: ".concat(S.name),tag:"h2"}),(0,u.jsx)(A.Z,{label:"Status",children:(0,u.jsx)(N.Z,(0,r.Z)((0,o.Z)({},Y),{name:"status",options:B.bg}))})]}),(0,u.jsx)(F.Z,{md:8,children:(0,u.jsx)(A.Z,{label:"Notes",children:(0,u.jsx)(O.Z,(0,r.Z)((0,o.Z)({},Y),{name:"notes",rows:2}))})})]}),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(k.Z,{content:"Default Rates",tag:"h3"}),(0,u.jsxs)(C.Z,{children:[(0,u.jsx)(F.Z,{md:4,children:(0,u.jsx)(A.Z,{label:"Normal Rate",children:(0,u.jsx)(D.Z,(0,r.Z)((0,o.Z)({},z),{name:"normalRate",step:"0.01"}))})}),(0,u.jsx)(F.Z,{md:4,children:(0,u.jsx)(A.Z,{label:"Out Of Hours Rate",children:(0,u.jsx)(D.Z,(0,r.Z)((0,o.Z)({},z),{name:"oohRate",step:"0.01"}))})}),(0,u.jsx)(F.Z,{md:4,children:(0,u.jsx)(A.Z,{label:"Premium Rate",children:(0,u.jsx)(D.Z,(0,r.Z)((0,o.Z)({},z),{name:"premiumRate",step:"0.01"}))})})]})]}),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(k.Z,{content:"Timings",tag:"h3"}),(0,u.jsxs)(C.Z,{children:[(0,u.jsx)(F.Z,{md:4,children:(0,u.jsx)(A.Z,{label:"On Site",children:(0,u.jsxs)(ed,{children:[(0,u.jsx)(D.Z,(0,r.Z)((0,o.Z)({},Y),{name:"onSite",type:"number",min:0})),(0,u.jsx)(N.Z,(0,r.Z)((0,o.Z)({},Y),{name:"onSiteUnit",label:"",options:[{text:"Select",value:""},{text:"Minutes",value:"minutes"},{text:"Hours",value:"hours"},{text:"Days",value:"days"}]}))]})})}),(0,u.jsx)(F.Z,{md:4,children:(0,u.jsx)(A.Z,{label:"Job Report",children:(0,u.jsxs)(ed,{children:[(0,u.jsx)(D.Z,(0,r.Z)((0,o.Z)({},Y),{name:"jobReport",type:"number",min:0})),(0,u.jsx)(N.Z,(0,r.Z)((0,o.Z)({},Y),{name:"jobReportUnit",label:"",options:[{text:"Select",value:""},{text:"Minutes",value:"minutes"},{text:"Hours",value:"hours"},{text:"Days",value:"days"}]}))]})})}),(0,u.jsx)(F.Z,{md:4,children:(0,u.jsx)(A.Z,{label:"Completion",children:(0,u.jsxs)(ed,{children:[(0,u.jsx)(D.Z,(0,r.Z)((0,o.Z)({},Y),{name:"completion",type:"number",min:0})),(0,u.jsx)(N.Z,(0,r.Z)((0,o.Z)({},Y),{name:"completionUnit",label:"",options:[{text:"Select",value:""},{text:"Minutes",value:"minutes"},{text:"Hours",value:"hours"},{text:"Days",value:"days"}]}))]})})})]})]})]})},ed=J.ZP.div.withConfig({displayName:"slaEntityForm__StyledOption",componentId:"sc-3112fee2-0"})(eu());el.defaultProps={close:function(){}},el.propTypes={id:d().number.isRequired,slaEntityId:d().number,entity:d().oneOf(["Account","Location"]).isRequired,entityId:d().number.isRequired,close:d().func};var ec=function(e){var t=e.row,n=e.item,i=e.subtype,o=e.checked;return"quote"===i?{inUse:o,status:o?"active":"inactive",notes:(null==n?void 0:n.notes)||t.notes,quoteReturned:(null==n?void 0:n.quoteReturned)||t.quoteReturned,quoteReturnedUnit:(null==n?void 0:n.quoteReturnedUnit)||t.quoteReturnedUnit}:{inUse:o,status:o?"active":"inactive",notes:(null==n?void 0:n.notes)||t.notes,normalRate:parseFloat((null==n?void 0:n.normalRate)||t.normalRate).toFixed(1),oohRate:parseFloat((null==n?void 0:n.oohRate)||t.oohRate).toFixed(1),premiumRate:parseFloat((null==n?void 0:n.premiumRate)||t.premiumRate).toFixed(1),onSite:(null==n?void 0:n.onSite)||t.onSite,onSiteUnit:(null==n?void 0:n.onSiteUnit)||t.onSiteUnit,jobReport:(null==n?void 0:n.jobReport)||t.jobReport,jobReportUnit:(null==n?void 0:n.jobReportUnit)||t.jobReportUnit,completion:(null==n?void 0:n.completion)||t.completion,completionUnit:(null==n?void 0:n.completionUnit)||t.completionUnit}},em={item:"name",order:"asc"},ep=function(e){var t,n=e.title,l=e.subtype,d=e.isEntity,h=e.isLocation,x=e.customerId,Z=e.entity,R=e.entityId,f=e.tableHeight,b=e.containerHeight,v=(0,es.a)(),j=(0,(0,T.x)().hasRole)("admin"),y=(0,X.x)({filters:{},initialSort:em}),U=y.initialData,q=y.ref,g=(0,m.a)(S,{variables:(0,r.Z)((0,o.Z)({},U),{subtype:l,isEntity:d,isLocation:h,customerId:x,entity:Z,entityId:R})}),w=g.data,I=void 0===w?{slas:[],meta:{aggregate:{totalCount:0}}}:w,E=I.slas,L=I.meta,C=g.loading,F=g.refetch,A=(0,s.Z)((0,p.D)(_,{refetchQueries:["GetSlas"]}),2),D=A[0],N=A[1].loading,O=(0,s.Z)((0,p.D)($,{refetchQueries:["GetSlas"]}),2),k=O[0],H=O[1].loading,P=function(e){e.stopPropagation(),v.show({content:(0,u.jsx)(z,{subtype:l,close:v.close,slas:E}),title:"Add SLA",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"50vw",md2:"50vw",lg:"50vw",lg2:"50vw"})},G=(0,c.useCallback)(function(e){if(d){var t;v.show({content:(0,u.jsx)(el,{subtype:l,id:e.id,slaEntityId:null===(t=e.entity)||void 0===t?void 0:t.id,entity:Z,entityId:R,close:v.close}),title:"Edit SLA",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"50vw",md2:"50vw",lg:"50vw",lg2:"50vw"})}else v.show({content:(0,u.jsx)(z,{subtype:l,id:e.id,close:v.close,slas:E}),title:"Edit SLA",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"50vw",md2:"50vw",lg:"50vw",lg2:"50vw"})},[Z,R,d,v,l,E]),M=(0,c.useCallback)(function(e){var t=[];return t.push({icon:"edit",onClick:function(t){t.stopPropagation(),G(e)},tooltip:"Edit"}),t},[G]),Q=(0,c.useCallback)((t=(0,i.Z)(function(e,t,n){var i,s;return(0,a.__generator)(this,function(a){switch(a.label){case 0:if(e.stopPropagation(),i=n.entity,s=ec({row:n,item:i,subtype:l,entity:Z,entityId:R,checked:t}),!i)return[3,2];return[4,k({variables:{id:i.id,changes:s}})];case 1:return a.sent(),[3,4];case 2:return[4,D({variables:{objects:[(0,r.Z)((0,o.Z)({},s),{slaId:n.id,entity:Z,entityId:R})]}})];case 3:a.sent(),a.label=4;case 4:return[2]}})}),function(e,n,i){return t.apply(this,arguments)}),[D,Z,R,l,k]),B=(0,c.useCallback)(function(e){var t,n,i,o,r=e.row,s="boolean"!=typeof(null===(t=r.entity)||void 0===t?void 0:t.inUse)||(null===(n=r.entity)||void 0===n?void 0:n.inUse),a=!!h&&!(null===(i=r.customerEntity)||void 0===i?void 0:null===(o=i[0])||void 0===o?void 0:o.inUse);return(0,u.jsx)(ei.Z,{color:"secondary",disabled:a,checked:s,onChange:function(e,t){return Q(e,t,r)}})},[Q,h]),J=(0,c.useMemo)(function(){return[{flex:1,field:"name",headerName:"Name"},{flex:1,headerName:"Is default SLA",field:"isDefault",valueFormatter:function(e){return e.value?"Yes":"No"}},{flex:1,field:"inUse",headerName:"In Use",renderCell:B},{flex:1,field:"normalRate",headerName:"Normal",renderCell:function(e){return parseFloat(e.row.normalRate).toFixed(1)+"x"}},{flex:1,field:"oohRate",headerName:"OOH",renderCell:function(e){return parseFloat(e.row.oohRate).toFixed(1)+"x"}},{flex:1,field:"premiumRate",headerName:"Premium",renderCell:function(e){return parseFloat(e.row.premiumRate).toFixed(1)+"x"}},{flex:1,field:"quoteReturned",headerName:"Quote returned",renderCell:function(e){var t=e.row;return t.quoteReturned?"".concat(t.quoteReturned," ").concat(t.quoteReturnedUnit):"-"}},{flex:1,field:"onSite",headerName:"On Site",sortable:!1,renderCell:function(e){var t=e.row;return t.onSite?"".concat(t.onSite," ").concat(t.onSiteUnit):"-"}},{flex:1,field:"jobReport",headerName:"Job Report",sortable:!1,renderCell:function(e){var t=e.row;return t.jobReport?"".concat(t.jobReport," ").concat(t.jobReportUnit):"-"}},{flex:1,field:"completion",headerName:"Completion",sortable:!1,renderCell:function(e){var t=e.row;return t.completion?"".concat(t.completion," ").concat(t.completionUnit):"-"}},{flex:1,field:"status",headerName:"Status",sortable:!1},{flex:1,field:"notes",headerName:"Notes",sortable:!1},{width:50,field:"actions",headerName:"Actions",sortable:!1,renderCell:function(e){var t,n,i=e.row,o=!!h&&!(null===(t=i.customerEntity)||void 0===t?void 0:null===(n=t[0])||void 0===n?void 0:n.inUse);return(0,u.jsx)(ea.C,{disabled:o,row:i,actionsData:M})}}]},[M,h,B,E]),V=(0,c.useMemo)(function(){return E.map(function(e){if(d&&(null===(t=e.entities)||void 0===t?void 0:t[0])){var t,n,i=e.entities[0];return{id:e.id,name:e.name,normalRate:i.normalRate,oohRate:i.oohRate,premiumRate:i.premiumRate,quoteReturned:i.quoteReturned,quoteReturnedUnit:i.quoteReturnedUnit,onSite:i.onSite,onSiteUnit:i.onSiteUnit,jobReport:i.jobReport,jobReportUnit:i.jobReportUnit,completion:i.completion,completionUnit:i.completionUnit,status:i.status,notes:i.notes||"-",entity:i,customerEntity:e.customerSla,actions:""}}var o=null===(n=e.customerSla)||void 0===n?void 0:n[0];return{id:e.id,name:e.name,normalRate:(null==o?void 0:o.normalRate)||e.normalRate,oohRate:(null==o?void 0:o.oohRate)||e.oohRate,premiumRate:(null==o?void 0:o.premiumRate)||e.premiumRate,quoteReturned:(null==o?void 0:o.quoteReturned)||e.quoteReturned,quoteReturnedUnit:(null==o?void 0:o.quoteReturnedUnit)||e.quoteReturnedUnit,onSite:(null==o?void 0:o.onSite)||e.onSite,onSiteUnit:(null==o?void 0:o.onSiteUnit)||e.onSiteUnit,jobReport:(null==o?void 0:o.jobReport)||e.jobReport,jobReportUnit:(null==o?void 0:o.jobReportUnit)||e.jobReportUnit,completion:(null==o?void 0:o.completion)||e.completion,completionUnit:(null==o?void 0:o.completionUnit)||e.completionUnit,status:(null==o?void 0:o.status)||e.status,notes:(null==o?void 0:o.notes)||e.notes||"-",entity:null,customerEntity:e.customerSla,actions:"",isDefault:e.isDefault}})},[JSON.stringify(E)]);return(0,u.jsxs)(en.Z,{sx:{paddingTop:"16px",paddingBottom:"16px",height:b},children:[h&&(0,u.jsx)(ee.Z,{color:"info",variant:"filled",sx:{ml:2,mr:2,mb:2},children:"In order to set up location SLAs, you must first add or confirm the appropriate customer SLA for that priority level."}),(0,u.jsxs)(W.Z,{direction:"row",justifyContent:"space-between",children:[(0,u.jsx)(eo.Z,{ml:2,variant:"h5",sx:{fontWeight:600},children:n}),!d&&(0,u.jsx)(et.Z,{sx:{mr:2},variant:"contained",color:"secondary",onClick:P,children:"Create SLA"})]}),(0,u.jsx)(er.i,{autoHeight:!1,loading:C||N||H,ref:q,columns:J,rows:V,meta:L,refetch:F,initialSort:em,containerHeight:f,columnVisibilityModel:{name:!0,isDefault:!d,inUse:j&&d,normalRate:"reactive"===l,oohRate:"reactive"===l,premiumRate:"reactive"===l,quoteReturned:"quote"===l,onSite:"reactive"===l,jobReport:"reactive"===l,completion:"reactive"===l,status:d,notes:!0,actions:j}})]})};ep.defaultProps={isEntity:!1,isLocation:!1,containerHeight:"calc(100vh - 100px)",tableHeight:"calc(100% - 32px)"},ep.propTypes={title:d().string,subtype:d().oneOf(["reactive","quote"]).isRequired,isEntity:d().bool.isRequired,isLocation:d().bool.isRequired,customerId:d().number,entity:d().oneOf(["Account","Location"]),entityId:d().number}}}]);