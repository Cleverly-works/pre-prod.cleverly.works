(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1031],{89474:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/data/xero",function(){return t(90940)}])},21300:function(n,e,t){"use strict";t.d(e,{M:function(){return l}});var i=t(26042),o=t(99534),r=t(85893),a=t(45697),c=t(89345),u=t(99505),d=t(55843),l=function(n){var e=n.control,t=n.errors,a=n.name,l=n.space,s=(0,o.Z)(n,["control","errors","name","space"]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,(0,i.Z)({control:e,errors:t,locale:c.Z,name:a},s)),l&&(0,r.jsx)(d.Z,{marginBottom:"sm"})]})};l.propTypes={control:a.object.isRequired,errors:a.object.isRequired,name:a.string.isRequired,space:a.bool},l.defaultProps={space:!0}},45082:function(n,e,t){"use strict";t.d(e,{r:function(){return i}});var i=[{text:"All work orders",value:null,label:"All work orders"},{text:"All outstanding invoices",value:"0-",label:"All outstanding invoices"},{text:"1 - 30",value:"1-30",label:"1 - 30"},{text:"31 - 60",value:"31-60",label:"31 - 60"},{text:"61 - 90",value:"61-90",label:"61 - 90"},{text:"> 90",value:"90-",label:"> 90"}]},25771:function(n,e,t){"use strict";t.d(e,{By:function(){return m},Rm:function(){return s},WG:function(){return v},Wj:function(){return p},bK:function(){return f}});var i=t(7297),o=t(75063);function r(){var n=(0,i.Z)(['\n  query getInvoices($jobId: Int!) {\n    invoices: Invoice(where: { entityId: { _eq: $jobId }, entity: { _eq: "Job" } }) {\n      id\n      accountEntry: AccountEntry {\n        id\n        type\n        paymentStatus\n        meta\n        dueDate\n      }\n      items\n      status\n      createdAt\n      rebate\n      meta\n      totals\n      invoiceType\n      invoiceNumber\n      invoiceDate\n      expenses\n      entityId\n      entity\n      configs\n      amounts\n      addendum\n      addresses\n      adminId\n      reconciledAmount: AccountEntry {\n        reconciliations: InvoiceReconciliations_aggregate {\n          aggregate {\n            sum {\n              amount\n            }\n          }\n        }\n      }\n    }\n    meta: Invoice_aggregate(where: { entityId: { _eq: $jobId }, entity: { _eq: "Job" } }) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n']);return r=function(){return n},n}function a(){var n=(0,i.Z)(['\n  query getInvoices($id: Int!) {\n    invoice: Invoice_by_pk(id: $id) {\n      id\n      accountEntry: AccountEntry {\n        id\n        paymentStatus\n      }\n      items\n      status\n      createdAt\n      rebate\n      meta\n      totals\n      invoiceType\n      invoiceNumber\n      invoiceDate\n      expenses\n      entityId\n      configs\n      amounts\n      addendum\n      addresses\n      adminId\n      amountPaid: AccountEntry {\n        reconciliations: InvoiceReconciliations_aggregate(\n          where: { creditEntity: { _eq: "PaymentReceipt" } }\n        ) {\n          aggregate {\n            sum {\n              amount\n            }\n          }\n        }\n      }\n      amountDeducted: AccountEntry {\n        reconciliations: InvoiceReconciliations_aggregate(\n          where: { creditEntity: { _eq: "CreditNote" } }\n        ) {\n          aggregate {\n            sum {\n              amount\n            }\n          }\n        }\n      }\n      reconciledAmount: AccountEntry {\n        reconciliations: InvoiceReconciliations_aggregate {\n          aggregate {\n            sum {\n              amount\n            }\n          }\n        }\n      }\n    }\n  }\n']);return a=function(){return n},n}function c(){var n=(0,i.Z)(['\n  query getInvoiceForPdf($id: Int!) {\n    invoice: Invoice_by_pk(id: $id) {\n      id\n      entityId\n      invoiceType\n      accountEntry: AccountEntry {\n        id\n        meta\n      }\n      amountPaid: AccountEntry {\n        reconciliations: InvoiceReconciliations_aggregate(\n          where: { creditEntity: { _eq: "PaymentReceipt" } }\n        ) {\n          aggregate {\n            sum {\n              amount\n            }\n          }\n        }\n      }\n      amountDeducted: AccountEntry {\n        reconciliations: InvoiceReconciliations_aggregate(\n          where: { creditEntity: { _eq: "CreditNote" } }\n        ) {\n          aggregate {\n            sum {\n              amount\n            }\n          }\n        }\n      }\n      reconciledAmount: AccountEntry {\n        reconciliations: InvoiceReconciliations_aggregate {\n          aggregate {\n            sum {\n              amount\n            }\n          }\n        }\n      }\n    }\n  }\n']);return c=function(){return n},n}function u(){var n=(0,i.Z)(['\n  query getInvoiceForPdfByType($jobId: Int!, $invoiceType: String!) {\n    invoices: Invoice(\n      where: {\n        entityId: { _eq: $jobId }\n        entity: { _eq: "Job" }\n        invoiceType: { _eq: $invoiceType }\n      }\n      order_by: { createdAt: desc }\n    ) {\n      id\n      invoiceType\n      accountEntry: AccountEntry {\n        id\n        type\n        meta\n      }\n      amountPaid: AccountEntry {\n        reconciliations: InvoiceReconciliations_aggregate(\n          where: { creditEntity: { _eq: "PaymentReceipt" } }\n        ) {\n          aggregate {\n            sum {\n              amount\n            }\n          }\n        }\n      }\n      amountDeducted: AccountEntry {\n        reconciliations: InvoiceReconciliations_aggregate(\n          where: { creditEntity: { _eq: "CreditNote" } }\n        ) {\n          aggregate {\n            sum {\n              amount\n            }\n          }\n        }\n      }\n      reconciledAmount: AccountEntry {\n        reconciliations: InvoiceReconciliations_aggregate {\n          aggregate {\n            sum {\n              amount\n            }\n          }\n        }\n      }\n    }\n  }\n']);return u=function(){return n},n}function d(){var n=(0,i.Z)(["\n  query getAccountEntryForPdfById($accountEntryId: Int!) {\n    accountEntry: AccountEntry_by_pk(id: $accountEntryId) {\n      id\n      meta\n    }\n  }\n"]);return d=function(){return n},n}function l(){var n=(0,i.Z)(["\n  mutation CreateProformaInvoice(\n    $jobId: Int!\n    $invoiceType: String!\n    $dueDate: timestamptz!\n    $description: String\n    $items: [jsonb]\n  ) {\n    createProformaInvoice(\n      jobId: $jobId\n      invoiceType: $invoiceType\n      description: $description\n      dueDate: $dueDate\n      items: $items\n    ) {\n      data\n      success\n    }\n  }\n"]);return l=function(){return n},n}var s=(0,o.Ps)(r());(0,o.Ps)(a());var v=(0,o.Ps)(c()),m=(0,o.Ps)(u()),p=(0,o.Ps)(d()),f=(0,o.Ps)(l())},86021:function(n,e,t){"use strict";t.d(e,{_Z:function(){return v}});var i=t(47568),o=t(7297),r=t(97582),a=t(75063),c=t(13777),u=t(63139);function d(){var n=(0,o.Z)(["\n  mutation CreateCustomerInvoicePdf($jobId: Int!, $preview: Boolean) {\n    invoice: createCustomerInvoicePdf(jobId: $jobId, preview: $preview) {\n      success\n      key\n    }\n  }\n"]);return d=function(){return n},n}function l(){var n=(0,o.Z)(["\n  mutation CreateSupplierInvoicePdf($jobId: Int!, $preview: Boolean) {\n    invoice: createSupplierInvoicePdf(jobId: $jobId, preview: $preview) {\n      success\n      key\n    }\n  }\n"]);return l=function(){return n},n}var s,v=(s=(0,i.Z)(function(n){var e,t,i,o,a,d,l,s;return(0,r.__generator)(this,function(r){switch(r.label){case 0:switch(e=n.client,t=n.jobId,i=n.type,o=n.getUrl,a=n.preview,d="",i){case"supplier":d=p;break;case"customerVat":d=m;break;default:return[2]}return(0,u.a)()||o||(l=window.open("/download","_blank")),s="",[4,e.mutate({mutation:d,variables:{jobId:t,preview:a}}).then(function(n){var e,t,i,r=n.data.invoice.key;o?s="".concat("https://cleverly-pre-prod-media.s3.eu-west-2.amazonaws.com","/").concat(r):(null==l||null===(e=l.location)||void 0===e||e.assign("".concat("https://cleverly-pre-prod-media.s3.eu-west-2.amazonaws.com","/").concat(r)),(null==window?void 0:null===(t=window.Capacitor)||void 0===t?void 0:null===(i=t.Plugins)||void 0===i?void 0:i.Browser)&&window.Capacitor.Plugins.Browser.open({url:"".concat("https://cleverly-pre-prod-media.s3.eu-west-2.amazonaws.com","/").concat(r)}))}).catch(function(n){(0,c.Tb)({message:n,section:"fetch"})})];case 1:return r.sent(),[2,s]}})}),function(n){return s.apply(this,arguments)}),m=(0,a.Ps)(d()),p=(0,a.Ps)(l())},56063:function(n,e,t){"use strict";t.d(e,{$:function(){return u}});var i,o=t(47568),r=t(97582),a=t(63139),c=t(13777),u=(i=(0,o.Z)(function(n){var e;return(0,r.__generator)(this,function(t){switch(t.label){case 0:return(0,a.a)()||(e=window.open("/download","_blank")),[4,window.fetch("".concat("https://aws-pre-prod.cleverly.works","/pdf/invoice/ppmNew/create"),{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(n)}).then(function(n){return n.json()}).then(function(n){var t,i,o;null==e||null===(t=e.location)||void 0===t||t.assign("".concat("https://cleverly-pre-prod-media.s3.eu-west-2.amazonaws.com","/").concat(n.key)),(null==window?void 0:null===(i=window.Capacitor)||void 0===i?void 0:null===(o=i.Plugins)||void 0===o?void 0:o.Browser)&&window.Capacitor.Plugins.Browser.open({url:"".concat("https://cleverly-pre-prod-media.s3.eu-west-2.amazonaws.com","/").concat(n.key)})}).catch(function(n){(0,c.Tb)({message:n,section:"fetch"})})];case 1:return t.sent(),[2]}})}),function(n){return i.apply(this,arguments)})},80695:function(n,e,t){"use strict";t.d(e,{u:function(){return l}});var i,o=t(47568),r=t(26042),a=t(69396),c=t(97582),u=t(13777),d=t(63139),l=(i=(0,o.Z)(function(n){var e,t,i,o,l,s,v,m,p,f,g,y,b,h,I,x;return(0,c.__generator)(this,function(c){switch(c.label){case 0:return e=n.meta,t=n.invoice,I=(0,a.Z)((0,r.Z)({},e),{title:"Proforma Invoice",amountPaid:null==t?void 0:null===(i=t.amountPaid)||void 0===i?void 0:null===(o=i.reconciliations)||void 0===o?void 0:null===(l=o.aggregate)||void 0===l?void 0:null===(s=l.sum)||void 0===s?void 0:s.amount,amountDeducted:null==t?void 0:null===(v=t.amountDeducted)||void 0===v?void 0:null===(m=v.reconciliations)||void 0===m?void 0:null===(p=m.aggregate)||void 0===p?void 0:null===(f=p.sum)||void 0===f?void 0:f.amount,reconciledAmount:null==t?void 0:null===(g=t.reconciledAmount)||void 0===g?void 0:null===(y=g.reconciliations)||void 0===y?void 0:null===(b=y.aggregate)||void 0===b?void 0:null===(h=b.sum)||void 0===h?void 0:h.amount}),(0,d.a)()||(x=window.open("/download","_blank")),[4,window.fetch("".concat("https://aws-pre-prod.cleverly.works","/pdf/invoice/proforma/create"),{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(I)}).then(function(n){return n.json()}).then(function(n){var e,t,i;null==x||null===(e=x.location)||void 0===e||e.assign("".concat("https://cleverly-pre-prod-media.s3.eu-west-2.amazonaws.com","/").concat(n.key)),(null==window?void 0:null===(t=window.Capacitor)||void 0===t?void 0:null===(i=t.Plugins)||void 0===i?void 0:i.Browser)&&window.Capacitor.Plugins.Browser.open({url:"".concat("https://cleverly-pre-prod-media.s3.eu-west-2.amazonaws.com","/").concat(n.key)})}).catch(function(n){(0,u.Tb)({message:n,section:"fetch"})})];case 1:return c.sent(),[2]}})}),function(n){return i.apply(this,arguments)})},91272:function(n,e,t){"use strict";t.d(e,{t:function(){return d}});var i=t(85893),o=t(67294),r=t(45697),a=t(11163),c=t(46003),u=t(16540),d=(0,o.forwardRef)(function(n,e){var t=n.columns,r=n.history,d=n.initialSort,l=n.loading,s=n.meta,v=n.paginationSize,m=n.refetch,p=n.rowClick,f=n.rows,g=n.xeroPageSize,y=(0,a.useRouter)(),b=y.query,h=void 0===b?{}:b,I=(0,o.useState)(parseInt(null==h?void 0:h.page,10)||1),x=I[0],w=I[1],Z=(0,o.useState)(g||c.C1.paginationSize),_=Z[0],j=Z[1];d||(d={item:"createdAt",order:"desc"});var S=(0,o.useState)({item:d.item,order:d.order}),C=S[0],P=S[1],T=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=y.query,t=void 0===e?{}:e;if(n>1?t.page=n:delete t.page,!(Object.keys(t).length>0))return{};var i=Object.keys(t).map(function(e){return"page"===e?"".concat(e,"=").concat(n):"".concat(e,"=").concat(t[e])}).join("&");return"?".concat(i)},E=function(){P({item:d.item,order:d.order}),w(1);var n=T();y.push(n),j(g||c.C1.paginationSize)};(0,o.useImperativeHandle)(e,function(){return{currentPage:x,pageSize:_,sort:C,resetPagination:function(){E()}}});var A=function(n){var e=T(n);r&&y.push(e),w(n),!r&&m&&m()},N=function(n){n!==c.C1.paginationSize&&(j(n),m&&m())},$=function(n){var e;P({item:n.item,order:n.order}),m&&m()};return(0,i.jsx)(u.Z,{columns:t,loading:l,paginationSize:v,pagination:s&&!0,paginationProps:s&&{currentPage:x,onPageChange:A,onPageSizeChange:N,pageCount:Math.ceil(s.aggregate.totalCount/_),perPage:_},rowClick:p,rows:f,sort:C,setSort:$})});d.propTypes={columns:r.array.isRequired,history:r.bool,initialSort:r.object,loading:r.bool,meta:r.object,refetch:r.func,rowClick:r.func,rows:r.array.isRequired},d.defaultProps={history:!0,loading:!0,paginationSize:!1}},20705:function(n,e,t){"use strict";t.d(e,{x:function(){return l}});var i=t(14924),o=t(26042),r=t(69396),a=t(67294),c=t(96486),u=t(46003),d=function(n){try{return JSON.parse(n)}catch(e){return!1}},l=function(n){var e,t,l,s,v,m,p,f,g,y,b,h=n.filters,I=n.newFilters,x=n.initialSort,w=(0,a.useRef)(),Z=(0,a.useState)({}),_=Z[0],j=Z[1],S=(0,a.useState)({}),C=S[0],P=S[1],T=x||{item:"createdAt",order:"desc"},E=(0,i.Z)({},(null===(e=w.current)||void 0===e?void 0:e.sort.item)||T.item,T.inneritem?(0,i.Z)({},T.inneritem,(null===(t=w.current)||void 0===t?void 0:t.sort.order)||T.order):(null===(l=w.current)||void 0===l?void 0:l.sort.order)||T.order);return(0,a.useEffect)(function(){var n=!(0,c.isEqual)(_,h),e=!(0,c.isEqual)(C,I);if(n&&(j(h),null==w||null===(i=w.current)||void 0===i||i.resetPagination()),e&&(P(I),null==w||null===(o=w.current)||void 0===o||o.resetPagination()),(null==w?void 0:null===(t=w.current)||void 0===t?void 0:t.setSort)&&!(n||e)){var t,i,o,r,a,u,d,l,s,v,m,p=(null===(r=w.current)||void 0===r?void 0:null===(a=r.sort)||void 0===a?void 0:a.item)&&(null===(u=w.current)||void 0===u?void 0:null===(d=u.sort)||void 0===d?void 0:d.order)?{item:null===(l=w.current)||void 0===l?void 0:null===(s=l.sort)||void 0===s?void 0:s.item,order:null===(v=w.current)||void 0===v?void 0:null===(m=v.sort)||void 0===m?void 0:m.order}:E;w.current.setSort(p)}},[h,I]),{initialData:(0,r.Z)((0,o.Z)({},h),{newFilters:(null==I?void 0:I.length)>0?I:void 0,limit:(null===(s=w.current)||void 0===s?void 0:s.pageSize)==="Infinity"?null:parseInt(null===(v=w.current)||void 0===v?void 0:v.pageSize,10)||u.C1.paginationSize,offset:((null===(m=w.current)||void 0===m?void 0:m.currentPage)-1||0)*((null===(p=w.current)||void 0===p?void 0:p.pageSize)||u.C1.paginationSize),orderBy:d(null===(f=w.current)||void 0===f?void 0:null===(g=f.sort)||void 0===g?void 0:null===(y=g.item)||void 0===y?void 0:y.replace(/ORDER/i,null===(b=w.current)||void 0===b?void 0:b.sort.order))||E}),initialSort:x,ref:w}}},9492:function(n,e,t){"use strict";t.d(e,{S:function(){return i}});var i=function(n,e){var t=document.createElement("a");"string"==typeof t.download?(document.body.appendChild(t),t.download=e,t.href=n,t.click(),document.body.removeChild(t)):location.replace(n)}},90940:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return ng}});var i=t(85893),o=t(19076),r=t(47568),a=t(26042),c=t(69396),u=t(828),d=t(7297),l=t(29815),s=t(97582),v=t(67294),m=t(11163),p=t(66252),f=t(6812),g=t(73359),y=t(75063);function b(){var n=(0,d.Z)(["\n  query GetAccountEntries(\n    $where: AccountEntry_bool_exp\n    $limit: Int\n    $offset: Int\n    $accountId: Int\n    $locationId: Int\n    $orderBy: [AccountEntry_order_by!]\n  ) {\n    accountEntries: getDashboard_AccountEntry_calculatebalance(\n      limit: $limit\n      offset: $offset\n      order_by: $orderBy\n      where: $where\n      args: { location_id: $locationId }\n    ) {\n      id\n      outstandingAmount\n      outstandingdays\n      type\n      createdAt\n      status\n      meta\n      paymentStatus\n      createdAt\n      balance\n      debit\n      credit\n      invoices: Invoices {\n        id\n        meta\n        invoiceType\n        invoiceNumber\n        amounts\n        Job {\n          id\n          number\n          type\n          status\n          Customer {\n            id\n            name\n          }\n          Supplier {\n            id\n            name\n          }\n        }\n      }\n    }\n    meta: getDashboard_AccountEntry_calculatebalance_aggregate(\n      where: $where\n      args: { location_id: $locationId }\n    ) {\n      aggregate {\n        debitTotal: sum {\n          debit\n        }\n        creditTotal: sum {\n          credit\n        }\n        totalCount: count\n      }\n    }\n  }\n"]);return b=function(){return n},n}function h(){var n=(0,d.Z)(["\n  query GetAccountEntries(\n    $where: AccountEntry_bool_exp\n    $limit: Int\n    $offset: Int\n    $accountId: Int\n    $locationId: Int\n    $orderBy: [AccountEntry_order_by!]\n  ) {\n    accountEntries: getDashboard_AccountEntry_calculatebalance(\n      limit: $limit\n      offset: $offset\n      order_by: $orderBy\n      where: $where\n      args: { location_id: $locationId }\n    ) {\n      id\n      outstandingAmount\n      outstandingdays\n      type\n      createdAt\n      status\n      meta\n      paymentStatus\n      createdAt\n      balance\n      debit\n      credit\n      invoices: Invoices {\n        id\n        meta\n        invoiceType\n        invoiceNumber\n        amounts\n        Job {\n          id\n          number\n          type\n          status\n          Customer {\n            id\n            name\n          }\n          Supplier {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"]);return h=function(){return n},n}var I=(0,y.Ps)(b()),x=(0,y.Ps)(h()),w=t(25771),Z=t(41255),_=t(42283),j=t(57460),S=t.n(j),C=t(10367),P=t(62047),T=t(11082),E=t(68956),A=t(26186),N=t(11585),$=t(76600),D=t(9270),R=t(62140),k=t(55563),z=t(95103),q=t(77439),B=t(55843),L=t(11587),O=t(98456),J=t(84808),X=t(91272),F=t(21300),U=t(9492),M=t(86021),W=t(80695),G=t(56063),V=t(13077),H=t(45082),K=t(45416),Q=t(2845),Y=t(20705),nn=t(63139),ne=t(18586),nt=function(n,e){var t=n.itemType,i=n.paymentStatus;return"paymentReceipt"===t?e.COLOUR.black:"creditNote"===t?e.COLOUR.dark:"paid"===i?e.COLOUR.success:"partial"===i?e.COLOUR.female:e.COLOUR.danger},ni=function(n){var e=n.from,t=void 0===e?null:e,i=n.outstandingLevel,o=n.to,r=void 0===o?null:o,c=n.type,u=n.jobNumber,d={},s={},v=[],m=[],p=[];return c&&(d.type={_in:(0,l.Z)(c).concat(["invoice"])},d.paymentStatus={_in:(0,l.Z)(c)},c.includes("synced")||(m=[{_or:[{_and:[{meta:{_is_null:!1}},{_not:{meta:{_has_key:"xeroInvoiceId"}}},{_not:{meta:{_has_key:"xeroCreditNoteId"}}}]},{meta:{_is_null:!0}}]}])),i&&(d.outstandingdays={_gte:i.split("-")[0]||null,_lte:i.split("-")[1]||null}),(r||t)&&(p=[{_and:[{_or:[{_and:[{createdAt:{_gte:t}},{createdAt:{_lte:r}}]}]}]}]),u&&(v=[{_or:[{Invoices:{invoiceNumber:{_eq:u}}},{Invoices:{Job:{number:{_ilike:u}}}},{PaymentReconciliations:{InvoiceEntry:{Invoices:{invoiceNumber:{_eq:u}}}}},{PaymentReconciliations:{InvoiceEntry:{Invoices:{Job:{number:{_ilike:u}}}}}}]}]),(v.length>0||p.length>0||m.length>0)&&(s={_and:(0,l.Z)(v).concat((0,l.Z)(p),(0,l.Z)(m))}),(0,a.Z)({},d,s)},no=t(45697),nr=t(51466);function na(){var n=(0,d.Z)(["\n  align-items: center;\n  display: flex;\n"]);return na=function(){return n},n}var nc=function(n){var e=n.onFilter,t=(0,v.useState)(["ppmInvoice","partial","paid","proformaInvoice","unpaid","synced"]),o=t[0],r=t[1],a=function(n,t){var i;i=t?(0,l.Z)(o).concat([n]):o.filter(function(e){return e!==n}),e(i),r(i)};return(0,i.jsxs)(D.Z,{children:[(0,i.jsxs)(nu,{md:2,children:[(0,i.jsx)(P.Z,{context:"danger",onToggle:function(n){return a("proformaInvoice",n)},size:"sm",toggled:!0}),(0,i.jsx)(B.Z,{marginLeft:"sm"}),(0,i.jsx)(nr.Z,{size:"sm",children:"Proforma Invoice"})]}),(0,i.jsxs)(nu,{md:1.6,children:[(0,i.jsx)(P.Z,{context:"danger",onToggle:function(n){return a("ppmInvoice",n)},size:"sm",toggled:!0}),(0,i.jsx)(B.Z,{marginLeft:"sm"}),(0,i.jsx)(nr.Z,{size:"sm",children:"PPM Invoice"})]}),(0,i.jsxs)(nu,{md:1.7,children:[(0,i.jsx)(P.Z,{context:"danger",onToggle:function(n){return a("unpaid",n)},size:"sm",toggled:!0}),(0,i.jsx)(B.Z,{marginLeft:"sm"}),(0,i.jsx)(nr.Z,{size:"sm",children:"Unpaid"})]}),(0,i.jsxs)(nu,{md:1.7,children:[(0,i.jsx)(P.Z,{context:"female",onToggle:function(n){return a("partial",n)},size:"sm",toggled:!0}),(0,i.jsx)(B.Z,{marginLeft:"sm"}),(0,i.jsx)(nr.Z,{size:"sm",children:"Partially Paid"})]}),(0,i.jsxs)(nu,{md:1.7,children:[(0,i.jsx)(P.Z,{context:"success",onToggle:function(n){return a("paid",n)},size:"sm",toggled:!0}),(0,i.jsx)(B.Z,{marginLeft:"sm"}),(0,i.jsx)(nr.Z,{size:"sm",children:"Paid"})]}),(0,i.jsxs)(nu,{md:1.7,children:[(0,i.jsx)(P.Z,{context:"success",onToggle:function(n){return a("synced",n)},size:"sm",toggled:!0}),(0,i.jsx)(B.Z,{marginLeft:"sm"}),(0,i.jsx)(nr.Z,{size:"sm",children:"Synced"})]})]})},nu=(0,C.ZP)(R.Z).withConfig({displayName:"filters__StyledColumn",componentId:"sc-f3c4ab90-0"})(na());function nd(){var n=(0,d.Z)(["\n  float: right;\n"]);return nd=function(){return n},n}function nl(){var n=(0,d.Z)(["\n  margin-left: 10px;\n  &[disabled] {\n    background-color: #cbd5e0;\n    opacity: 1;\n  }\n"]);return nl=function(){return n},n}function ns(){var n=(0,d.Z)(["\n  background-color: ",";\n"]);return ns=function(){return n},n}nc.propTypes={onFilter:no.func.isRequired};var nv=function(){var n,e,t,o,d=(0,Q.x)().user,y=(0,Z.RM)(d.id),b=(0,p.x)(),h=(0,ne.q)(),j=(0,v.useState)(!1),C=j[0],L=j[1],nt=(0,v.useState)([]),no=nt[0],nr=nt[1],na=(0,v.useState)([]),nu=na[0],nd=na[1],nl=(0,m.useRouter)().query,ns=null===(n=h.admin)||void 0===n?void 0:null===(e=n.jobSetting)||void 0===e?void 0:e.jobNumberPrefix,nv=null===(t=h.admin)||void 0===t?void 0:null===(o=t.jobSetting)||void 0===o?void 0:o.jobNumberSuffix,ng=d.id,ny={endDate:nl.endDate&&new Date(nl.endDate),outstandingLevel:nl.outstandingLevel,startDate:nl.startDate&&new Date(nl.startDate),type:["synced","ppmInvoice","proformaInvoice","partial","paid","unpaid"]},nb=(0,v.useState)(ny),nh=nb[0],nI=nb[1],nx=(0,v.useState)(!1),nw=nx[0],nZ=nx[1],n_=nh.endDate,nj=nh.invoiceNumber,nS=nh.outstandingLevel,nC=nh.startDate,nP=nh.type,nT=(0,Y.x)({filters:nh}),nE=nT.initialData,nA=nT.ref,nN=(0,_.cI)({defaultValues:{endDate:n_,invoiceNumber:nj,outstandingLevel:nS,startDate:nC}}),n$=nN.control,nD=nN.errors,nR=nN.handleSubmit,nk=nN.register,nz=(0,v.useState)(!1)[1],nq=(0,c.Z)((0,a.Z)({},nE),{limit:25}),nB=(0,f.a)(I,{variables:(0,c.Z)((0,a.Z)({},nq),{where:(0,a.Z)({},ni({outstandingLevel:nS,to:n_,from:nC,jobNumber:nj,type:nP}))})}),nL=nB.data,nO=void 0===nL?{accountEntries:[],meta:{aggregate:{totalCount:0,debitTotal:{debit:0},creditTotal:{credit:0},balance:{balance:0}}}}:nL,nJ=nO.accountEntries,nX=nO.meta,nF=nB.loading,nU=nB.refetch,nM=(0,u.Z)((0,g.t)(x,{fetchPolicy:"no-cache",variables:(0,c.Z)((0,a.Z)({},nE),{where:(0,a.Z)({},ni({outstandingLevel:nS,to:n_,from:nC,jobNumber:nj,type:nP})),limit:1e3,offset:no.length}),onCompleted:function(n){var e,t=n.accountEntries,i=(0,l.Z)(no).concat((0,l.Z)(t));if(i.length<(null==nX?void 0:null===(e=nX.aggregate)||void 0===e?void 0:e.totalCount))nr(i),nM();else try{var o,r=S().unparse(no.map(function(n){var e,t,i,o,r,a,c,u,d,l,s,v,m,p,f,g,y,b,h,I,x,w,Z,_,j="creditNote"!==n.type&&"paymentReceipt"!==n.type?n.outstandingdays:"-";return{jobNumber:(null==n?void 0:null===(e=n.invoices)||void 0===e?void 0:null===(t=e[0])||void 0===t?void 0:null===(i=t.Job)||void 0===i?void 0:i.number)||"-",jobType:(null==n?void 0:null===(o=n.invoices)||void 0===o?void 0:null===(r=o[0])||void 0===r?void 0:null===(a=r.Job)||void 0===a?void 0:a.type)||"-",invoiceNumber:(null==n?void 0:null===(c=n.invoices)||void 0===c?void 0:null===(u=c[0])||void 0===u?void 0:u.invoiceNumber)||"-",itemType:n.type||"-",paymentStatus:n.paymentStatus||"-",customer:(null==n?void 0:null===(d=n.invoices)||void 0===d?void 0:null===(l=d[0])||void 0===l?void 0:null===(s=l.Job)||void 0===s?void 0:null===(v=s.Customer)||void 0===v?void 0:v.name)||"-",supplier:(null==n?void 0:null===(m=n.invoices)||void 0===m?void 0:null===(p=m[0])||void 0===p?void 0:null===(f=p.Job)||void 0===f?void 0:null===(g=f.Supplier)||void 0===g?void 0:g.name)||"-",xeroStatus:(null==n?void 0:null===(y=n.meta)||void 0===y?void 0:y.xeroInvoiceId)||(null==n?void 0:null===(b=n.meta)||void 0===b?void 0:b.xeroCreditNoteId)?"Synced":"Not Synced",xeroReference:(null==n?void 0:null===(h=n.meta)||void 0===h?void 0:h.xeroInvoiceId)||(null==n?void 0:null===(I=n.meta)||void 0===I?void 0:I.xeroCreditNoteId)||"-",reference:n.reference||(null===(x=n.meta)||void 0===x?void 0:x.paymentReference)||"-",date:(0,A.Z)(n.createdAt)||"-",outstandingDays:j,outstandingAmount:n.outstandingAmount||"-",status:(null==n?void 0:null===(w=n.invoices)||void 0===w?void 0:null===(Z=w[0])||void 0===Z?void 0:null===(_=Z.Job)||void 0===_?void 0:_.status)||"-",debit:n.debit||"-",credit:n.credit||"-"}})),a="data:application/octet-stream,"+encodeURIComponent(r);(0,U.S)(a,"AccountEntriesXero.csv")}finally{nz(!1)}}}),1)[0],nW=(0,Z.BR)({adminId:ng,xeroClientId:null==nl?void 0:nl.clientId,onSaveXeroTokenCallback:function(){return nU()}}),nG=nW.tokenStatus,nV=nW.onCallAuthorize,nH=nW.onSendEntitiesToXero,nK=nW.onReceiveUpdatesFromXero;(0,v.useEffect)(function(){"unauthenticated"===nG?L(!0):L(!1)},[nG]);var nQ,nY,n0,n1=function(n){var e=n.row,t=n.row.itemType;return(0,i.jsx)(nf,{content:t,row:e,size:"sm"})},n2=function(n,e){var t=n.id;nd(nu.map(function(n){return n.id===t&&(n.assigned=e),n}))},n3=(nQ=(0,r.Z)(function(n,e){var t,i,o,r,a,c,u,d,l;return(0,s.__generator)(this,function(a){switch(a.label){case 0:switch(n.preventDefault(),n.stopPropagation(),i=void 0===(t=e.invoice)?{}:t,o=e.itemType){case"proformaInvoice":return[3,1];case"invoice":return[3,3];case"customerPpmInvoice":case"supplierPpmInvoice":return[3,4]}return[3,6];case 1:return[4,b.query({query:w.WG,variables:{id:i.id}})];case 2:return u=a.sent().data.invoice,(0,W.u)({meta:null==u?void 0:null===(r=u.accountEntry)||void 0===r?void 0:r.meta,invoice:u}),[3,7];case 3:return(0,M._Z)({client:b,jobId:e.jobId,type:i.invoiceType}),[3,7];case 4:return[4,b.query({query:w.Wj,variables:{accountEntryId:e.id}})];case 5:return l=a.sent().data.accountEntry,(0,G.$)(l.meta),[3,7];case 6:return[3,7];case 7:return[2]}})}),function(n,e){return nQ.apply(this,arguments)}),n6=(nY=(0,r.Z)(function(n){var e,t;return(0,s.__generator)(this,function(i){switch(i.label){case 0:if(n.stopPropagation(),nZ(!0),!(e=nu.filter(function(n){var e,t;return n.assigned&&!((null===(e=n.meta)||void 0===e?void 0:e.xeroInvoiceId)||(null===(t=n.meta)||void 0===t?void 0:t.xeroCreditNoteId))})).length)return[2];if(!(null==y?void 0:y.companyId))return L(!0),[2];return t={userId:ng,entities:e.map(function(n){return"creditNote"===n.itemType?{id:n.id,entity:n.itemType}:{entity:n.itemType,invoiceType:n.invoice.invoiceType||null,invoiceId:n.id||null}})},[4,nH(t).then(function(){nZ(!1),nU()})];case 1:return i.sent(),[2]}})}),function(n){return nY.apply(this,arguments)}),n9=function(){return(0,i.jsxs)(nm,{children:[C&&(0,i.jsx)(np,{context:"info",onClick:function(){return nV(window.location.href)},title:"Refresh Token",size:"md",children:"Sign in with Xero"}),!C&&(0,i.jsx)(np,{context:"info",onClick:n6,title:"Send invoices to Xero",size:"md",disabled:!nu.some(function(n){var e,t;return n.assigned&&!((null===(e=n.meta)||void 0===e?void 0:e.xeroInvoiceId)||(null===(t=n.meta)||void 0===t?void 0:t.xeroCreditNoteId))})||nw,children:"Sync with Xero"})]})},n7=function(n){var e,t,o,r,a=n.row;return(0,i.jsx)(P.Z,{context:"secondary",size:"sm",onToggle:function(n){return n2(a,n)},toggled:a.assigned||(null===(e=a.meta)||void 0===e?void 0:e.xeroInvoiceId)||(null===(t=a.meta)||void 0===t?void 0:t.xeroCreditNoteId),disabled:(null===(o=a.meta)||void 0===o?void 0:o.xeroInvoiceId)||(null===(r=a.meta)||void 0===r?void 0:r.xeroCreditNoteId)})},n4=(n0=(0,r.Z)(function(n,e){var t,i;return(0,s.__generator)(this,function(o){switch(o.label){case 0:return n.preventDefault(),n.stopPropagation(),[4,nK((null===(t=e.meta)||void 0===t?void 0:t.xeroInvoiceId)||(null===(i=e.meta)||void 0===i?void 0:i.xeroCreditNoteId),null==y?void 0:y.companyId,ng)];case 1:return o.sent(),nU(),[2]}})}),function(n,e){return n0.apply(this,arguments)}),n5=[{formatter:n7,text:(0,i.jsx)(P.Z,{context:"secondary",size:"sm",toggled:nu.every(function(n){return n.assigned}),onToggle:function(n){return en(n)}})},{formatter:n1,text:"Type"},{text:"Customer",formatter:function(n){var e,t,i,o,r=n.row;return(null===(e=r.invoice)||void 0===e?void 0:null===(t=e.invoiceType)||void 0===t?void 0:t.includes("customer"))||(null===(i=r.invoice)||void 0===i?void 0:null===(o=i.invoiceType)||void 0===o?void 0:o.includes("Customer"))?r.customer:"-"}},{text:"Supplier",formatter:function(n){var e,t,i,o,r=n.row;return(null===(e=r.invoice)||void 0===e?void 0:null===(t=e.invoiceType)||void 0===t?void 0:t.includes("supplier"))||(null===(i=r.invoice)||void 0===i?void 0:null===(o=i.invoiceType)||void 0===o?void 0:o.includes("Supplier"))?r.supplier:"-"}},{text:"Number",formatter:function(n){var e,t=n.row;return(0,i.jsx)(K.D,{id:t.jobId,number:t.number,invoiceNumber:null===(e=t.invoice)||void 0===e?void 0:e.invoiceNumber,numberPrefix:ns,numberSuffix:nv,openCanvas:!!t.jobId,type:t.jobType})}},{text:"Xero Status"},{text:"Xero Reference"},{text:"Reference"},{text:"Date"},{text:"Days Outstanding"},{text:"Amount Outstanding",formatter:function(n){var e=n.row;return"invoice"===e.itemType||"proformaInvoice"===e.itemType||"ppmInvoice"===e.itemType?(0,T.Z)(e.outstandingAmount):"-"}},{text:"Status",formatter:function(n){var e=n.row;return e.status?(0,i.jsx)(V.B,{value:e.status}):""}},{text:"Debit",formatter:function(n){var e=n.row;return e.debit?(0,T.Z)(e.debit):"-"}},{text:"Credit",formatter:function(n){var e=n.row;return e.credit?(0,T.Z)(e.credit):"-"}},{formatter:E.Z,formatterData:function(n){var e,t,i=[{context:"secondary",icon:["fas","download"],onClick:function(n,e){return n3(n,e)},tooltip:"Download",disabled:"creditNote"===n.itemType||"paymentReceipt"===n.itemType}];return(null===(e=n.meta)||void 0===e?void 0:e.xeroInvoiceId)&&!(null===(t=n.meta)||void 0===t?void 0:t.syncedWithXero)&&i.unshift({context:"info",icon:["fas","circle"],onClick:function(n,e){return n4(n,e)},tooltip:"Invoice has changes in Xero. Click to update it in Cleverly"}),i},text:"Actions"},{hidden:!0},{hidden:!0},{hidden:!0},{hidden:!0},{hidden:!0},{hidden:!0},{hidden:!0},{hidden:!0},{hidden:!0}],n8=function(n){return nJ.map(function(e){var t,i,o,r,a,c,u,d,l,s,v,m,p,f,g,y,b,h,I,x,w="creditNote"!==e.type&&"paymentReceipt"!==e.type?e.outstandingdays:"-";return{selector:"",itemType:e.type,customer:null===(t=null==e?void 0:e.invoices[0])||void 0===t?void 0:null===(i=t.Job)||void 0===i?void 0:null===(o=i.Customer)||void 0===o?void 0:o.name,supplier:null===(r=null==e?void 0:e.invoices[0])||void 0===r?void 0:null===(a=r.Job)||void 0===a?void 0:null===(c=a.Supplier)||void 0===c?void 0:c.name,jobId:null===(u=null==e?void 0:e.invoices[0])||void 0===u?void 0:null===(d=u.Job)||void 0===d?void 0:d.id,xeroStatus:(null==e?void 0:null===(l=e.meta)||void 0===l?void 0:l.xeroInvoiceId)||(null==e?void 0:null===(s=e.meta)||void 0===s?void 0:s.xeroCreditNoteId)?"Synced":"Not Synced",xeroReference:(null==e?void 0:null===(v=e.meta)||void 0===v?void 0:v.xeroInvoiceId)||(null==e?void 0:null===(m=e.meta)||void 0===m?void 0:m.xeroCreditNoteId),reference:e.reference||(null===(p=e.meta)||void 0===p?void 0:p.paymentReference),date:(0,A.Z)(e.createdAt),outstandingDays:w,outstandingAmount:e.outstandingAmount,status:null===(f=null==e?void 0:e.invoices[0])||void 0===f?void 0:null===(g=f.Job)||void 0===g?void 0:g.status,debit:e.debit,credit:e.credit,actions:"",number:null===(y=null==e?void 0:e.invoices[0])||void 0===y?void 0:null===(b=y.Job)||void 0===b?void 0:b.number,jobType:null===(h=null==e?void 0:e.invoices[0])||void 0===h?void 0:null===(I=h.Job)||void 0===I?void 0:I.type,invoiceNumber:null===(x=null==e?void 0:e.invoices[0])||void 0===x?void 0:x.invoiceNumber,invoice:(null==e?void 0:e.invoices)?null==e?void 0:e.invoices[0]:null,invoices:null==e?void 0:e.invoices,meta:null==e?void 0:e.meta,paymentStatus:e.paymentStatus,assigned:n,id:e.id}})},en=function(n){nd(n8(n))},ee={control:n$,errors:nD,register:nk},et=function(n){n.invoiceNumber||n.startDate||n.endDate||n.outstandingLevel?nI((0,c.Z)((0,a.Z)({},nh),{endDate:n.endDate,invoiceNumber:n.invoiceNumber?n.invoiceNumber:null,outstandingLevel:n.outstandingLevel,startDate:n.startDate})):Array.isArray(n)?nI((0,c.Z)((0,a.Z)({},nh),{type:n})):nI(ny)};return(0,v.useEffect)(function(){nd(n8(!1))},[nF]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(J.Z,{sx:{color:"#fff",zIndex:function(n){return n.zIndex.drawer+1}},open:nw,children:(0,i.jsx)(O.Z,{color:"inherit"})}),(0,i.jsx)(N.Z,{open:!0,title:"Filters",children:(0,i.jsxs)($.Z,{handleSubmit:nR(et),children:[(0,i.jsxs)(D.Z,{children:[(0,i.jsx)(R.Z,{md:2,children:(0,i.jsx)(F.M,(0,c.Z)((0,a.Z)({},ee),{name:"startDate",placeholder:"Start date"}))}),(0,i.jsx)(R.Z,{md:2,children:(0,i.jsx)(F.M,(0,c.Z)((0,a.Z)({},ee),{name:"endDate",placeholder:"End date"}))}),(0,i.jsx)(R.Z,{md:3,children:(0,i.jsx)(k.Z,(0,c.Z)((0,a.Z)({},ee),{name:"invoiceNumber",placeholder:"Id / Invoice"}))}),(0,i.jsx)(R.Z,{md:3,children:(0,i.jsx)(z.Z,(0,c.Z)((0,a.Z)({},ee),{name:"outstandingLevel",options:H.r}))}),(0,i.jsx)(R.Z,{md:1,children:(0,i.jsx)(q.Z,{content:"Filter",context:"secondary",size:"sm",type:"submit"})})]}),(0,i.jsx)(B.Z,{marginBottom:"md"}),(0,i.jsx)(nc,{onFilter:et})]})}),(0,i.jsxs)(N.Z,{dataSet:{"data-cy":"Xero Data"},open:!0,title:"Account Entries",toolbar:!(0,nn.s)()&&(0,i.jsx)(n9,{}),children:[(0,i.jsx)(X.t,{history:!0,columns:n5,loading:nF,meta:nX,ref:nA,refetch:nU,rows:nu}),(0,i.jsx)(B.Z,{})]})]})},nm=C.ZP.div.withConfig({displayName:"list__StyledToolbar",componentId:"sc-cb9302e8-0"})(nd()),np=(0,C.ZP)(q.Z).withConfig({displayName:"list__StyledButton",componentId:"sc-cb9302e8-1"})(nl()),nf=(0,C.ZP)(L.Z).withConfig({displayName:"list__StyledBadge",componentId:"sc-cb9302e8-2"})(ns(),function(n){return nt(n.row,n.theme)}),ng=function(){return(0,i.jsx)(o.Z,{pageHeading:{heading:"Xero"},View:(0,i.jsx)(nv,{})})}}},function(n){n.O(0,[3662,2283,212,619,8890,2583,4135,8579,1564,4244,1336,3911,5370,6540,4046,2797,9492,8344,9774,2888,179],function(){return n(n.s=89474)}),_N_E=n.O()}]);