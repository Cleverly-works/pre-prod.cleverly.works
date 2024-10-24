"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8151],{913:function(n,e,t){t.d(e,{$6:function(){return F},Ab:function(){return J},E6:function(){return A},FA:function(){return T},TY:function(){return U},Tw:function(){return L},bZ:function(){return C},dL:function(){return R},iU:function(){return w},k7:function(){return j},mJ:function(){return f},qD:function(){return q},r2:function(){return S},uA:function(){return $},wU:function(){return x}});var a=t(7297),i=t(75063),o=t(66312);function r(){var n=(0,a.Z)(['\n  query GetJob($adminId: Int!, $number: String!) {\n    job: Job(where: { adminId: { _eq: $adminId }, number: { _eq: $number } }) {\n      id\n      issueReportedDescription\n      number\n      adminId\n      title\n      description\n      reference\n      access\n      costCategory\n      pricing\n      timing\n      timingStart\n      timingEnd\n      timingNormalHours\n      paymentMethod\n      customerSpendThreshold\n      time\n      amount\n      supplierLabourAmount\n      supplierMaterialsAmount\n      source\n      discount\n      timingStatus\n      correctDuration\n      correctStart\n      correctEnd\n      reportPassFail\n      reportPassFailTitle\n      requireReportRecommendations\n      estimatedDuration\n      estimatedDurationUnit\n      anyTimeOption\n      hourStart\n      hourEnd\n      onSiteTimingEnd\n      issueReportedDescription\n      permitsLinks\n      relatedLinks\n      supplierVatTotal: supplierFinances(path: "amountInfo.vatTotal")\n      assetCategory: AssetCategory {\n        name\n        id\n      }\n      assets: Assets(where: { entity: { _eq: "Job" } }) {\n        id\n        status\n        entityId\n        asset: Asset {\n          id\n          name\n        }\n      }\n      issueTypes: Taxonomy(\n        where: {\n          entity: { _eq: "Job" }\n          Taxonomy: { status: { _eq: "active" }, type: { _eq: "issueType" } }\n        }\n      ) {\n        id\n        issue: Taxonomy {\n          id\n          name\n        }\n      }\n      tags: Taxonomy(\n        where: {\n          entity: { _eq: "Job" }\n          Taxonomy: { status: { _eq: "active" }, type: { _eq: "tags" } }\n        }\n      ) {\n        id\n        tag: Taxonomy {\n          id\n          name\n          meta\n          type\n        }\n      }\n      ppmInvoices: AccountEntries {\n        Invoices {\n          id\n          invoiceNumber\n          invoiceType\n          meta\n          createdAt\n          accountEntry: AccountEntry {\n            id\n          }\n        }\n      }\n      invoices: Invoices(order_by: { createdAt: desc }) {\n        id\n        invoiceNumber\n        invoiceType\n        createdAt\n        amounts\n        accountEntry: AccountEntry {\n          id\n          meta\n        }\n        reconciledAmount: AccountEntry {\n          reconciliations: InvoiceReconciliations_aggregate {\n            aggregate {\n              sum {\n                amount\n              }\n            }\n          }\n        }\n      }\n      customer: Customer {\n        meta\n      }\n      supplierDeposit\n      rebate\n      status\n      workStatus\n      supplierNotes\n      ppm\n      quoted\n      quoteNumber\n      quoteDue\n      quoteDueSupplier\n      scheduledAt\n      createdAt\n      updatedAt\n      supplierId\n      customerId\n      customerUserId\n      locationId\n      managerId\n      parentId\n      serviceId\n      slaId\n      siteVisitStart\n      siteVisitEnd\n      siteVisitWeekends\n      tenantId\n      quoteCharge\n      quoteChargeAmount\n      jobScheduleId\n      type\n      meta\n      customerFinances\n      compliances: Compliances(where: { entity: { _eq: "Job" } }) {\n        id\n        compliance: Compliance {\n          id\n          name\n        }\n      }\n\n      admin: Admin {\n        id\n        name\n        meta\n        bankAccounts: BankAccounts {\n          id\n          bank\n          stripeId\n          accountNumber\n          routingNumber\n          bic\n          iban\n          status\n          default\n          createdAt\n          meta\n        }\n        addresses: Addresses {\n          id\n          registered\n          operating\n          trading\n          invoice\n          status\n          createdAt\n          address: Address {\n            id\n            name\n            addressLine1\n            addressLine2\n            addressLine3\n            city\n            county\n            geo\n            postCode\n            country: Country {\n              id\n              name\n            }\n          }\n        }\n      }\n      customer: Customer {\n        id\n        companyNumber\n        createdAt\n        name\n        status\n        type\n        updatedAt\n        website\n        clientType\n        managerId\n        vatId\n        meta\n        media: Media {\n          id\n          medium: Medium {\n            id\n            category\n            filename\n            meta\n            type\n          }\n        }\n        manager: Manager {\n          id\n          fullName\n        }\n        financial: Financial {\n          id\n          amountOutstanding\n          approvalThreshold\n          arrangementFee\n          createdAt\n          creditLimit\n          creditRating\n          defaultPaymentMethod\n          invoicing\n          serviceRate\n          spendThreshold\n          stripeId\n          totalRevenue\n          unpaidInvoices\n        }\n        slas: SLAs(where: { entity: { _eq: "Account" } }) {\n          id\n          entity\n          entityId\n          onSite\n          onSiteUnit\n          jobReport\n          jobReportUnit\n          completion\n          completionUnit\n          notes\n          inUse\n          normalRate\n          oohRate\n          premiumRate\n          minimumInterval\n          minimumLength\n          slaId\n          sla: SLA {\n            id\n            name\n            notes\n            normalRate\n            oohRate\n            premiumRate\n            onSite\n            onSiteUnit\n            jobReport\n            jobReportUnit\n            completion\n            completionUnit\n            minimumInterval\n            minimumLength\n          }\n        }\n        services: Services(where: { entity: { _eq: "Account" } }) {\n          id\n          dayRate\n          dayRateOOH\n          dayRatePremium\n          hourRate\n          hourRateOOH\n          hourRatePremium\n          meta\n          minimumInterval\n          minimumLength\n          callOutHourRate\n          callOutHourRateOOH\n          callOutHourRatePremium\n          notes\n          delivery\n          createdAt\n          updatedAt\n          entity\n          entityId\n          serviceId\n        }\n        addresses: Addresses(where: { entity: { _eq: "Account" } }) {\n          ...AddressEntityFields\n          address: Address {\n            ...AddressFields\n            country: Country {\n              id\n              name\n            }\n          }\n        }\n        media: Media {\n          id\n          medium: Medium {\n            id\n            category\n            filename\n            meta\n            type\n          }\n        }\n      }\n      customerUser: CustomerUser {\n        id\n        name: nameFirst\n        nameFirst\n        nameLast\n        phone\n        status\n        email\n        createdAt\n        fullName\n        meta\n        accounts: Account_Users {\n          id\n          role\n          position\n          isContact\n          status\n          account: Account {\n            id\n            name\n            type\n          }\n        }\n      }\n      expenses: Expenses {\n        id\n        amount\n        description\n        markup\n        total\n        unit\n        vat\n        paid\n      }\n      sublocation: Sublocation {\n        id\n        name\n      }\n      location: Location {\n        id\n        access\n        createdAt\n        name\n        contactUserId\n        permitsRequired\n        addresses: Addresses(where: { entity: { _eq: "Location" } }) {\n          ...AddressEntityFields\n          address: Address {\n            ...AddressFields\n            countryId\n            country: Country {\n              id\n              name\n              code\n            }\n          }\n        }\n        slas: SLAs(where: { entity: { _eq: "Location" } }) {\n          id\n          entity\n          entityId\n          onSite\n          onSiteUnit\n          jobReport\n          jobReportUnit\n          completion\n          completionUnit\n          notes\n          inUse\n          normalRate\n          oohRate\n          premiumRate\n          minimumInterval\n          minimumLength\n          slaId\n          sla: SLA {\n            id\n            name\n            notes\n            normalRate\n            oohRate\n            premiumRate\n            onSite\n            onSiteUnit\n            jobReport\n            jobReportUnit\n            completion\n            completionUnit\n            minimumInterval\n            minimumLength\n          }\n        }\n        services: Services(where: { entity: { _eq: "Location" } }) {\n          id\n          dayRate\n          dayRateOOH\n          dayRatePremium\n          hourRate\n          hourRateOOH\n          hourRatePremium\n          meta\n          minimumInterval\n          minimumLength\n          callOutHourRate\n          callOutHourRateOOH\n          callOutHourRatePremium\n          notes\n          delivery\n          createdAt\n          updatedAt\n          entity\n          entityId\n          serviceId\n        }\n      }\n      financeLogs: JobFinanceLogs(order_by: { createdAt: desc }) {\n        id\n        type\n        value\n        difference\n        createdAt\n      }\n      manager: Manager {\n        id\n        name: nameFirst\n        nameFirst\n        nameLast\n        phone\n        status\n        email\n        createdAt\n        fullName\n        accounts: Account_Users {\n          id\n          role\n          position\n          isContact\n          status\n          account: Account {\n            id\n            name\n            type\n          }\n        }\n      }\n      quotations: SupplierQuotes(\n        where: { status: { _neq: "cancelled" } }\n        order_by: { quoteNumber: asc }\n      ) {\n        id\n        createdAt\n        jobId\n        methodStatement\n        notes\n        quoteNumber\n        startDate\n        rebate\n        recommended\n        status\n        totalDuration\n        totalDurationUnit\n        meta\n        updatedAt\n        siteVisitAt\n        type\n        lineItems: SupplierQuoteLineItems {\n          id\n          description\n          item\n          qty\n          qtyUnit\n          quoteId\n          supplierTotal\n          total\n          type\n          unitRate\n        }\n        supplier: Supplier {\n          id\n          companyNumber\n          createdAt\n          name\n          status\n          type\n          updatedAt\n          website\n          clientType\n          managerId\n          vatId\n          meta\n          accountUsers: Account_Users {\n            user: User {\n              id\n              fullName\n              nameFirst\n              nameLast\n              phone\n              email\n              devices: UserDevices(where: { status: { _eq: "active" } }) {\n                id\n                playerId\n              }\n            }\n          }\n          media: Media {\n            id\n            medium: Medium {\n              id\n              category\n              filename\n              meta\n              type\n            }\n          }\n          manager: Manager {\n            id\n            fullName\n          }\n        }\n        media: Media(where: { entity: { _eq: "Quotation" } }) {\n          id\n        }\n      }\n      report: JobReport {\n        id\n        completion\n        meta\n        notes\n        timing\n        passFailStatus\n        recommendations\n        comments\n        createdAt\n        updatedAt\n      }\n      service: Service {\n        id\n        name\n        countryId\n        currencyId\n        customerDayRate\n        customerDayRateOOH\n        customerDayRatePremium\n        customerHourRate\n        customerHourRateOOH\n        customerHourRatePremium\n        supplierDayRate\n        supplierDayRateOOH\n        supplierDayRatePremium\n        supplierHourRate\n        supplierHourRateOOH\n        supplierHourRatePremium\n        minimumInterval\n        minimumLength\n      }\n      sla: SLA {\n        id\n        name\n        notes\n        normalRate\n        oohRate\n        premiumRate\n        onSite\n        onSiteUnit\n        jobReport\n        jobReportUnit\n        completion\n        completionUnit\n        minimumInterval\n        minimumLength\n      }\n      media: Media {\n        id\n        item: Medium {\n          id\n          name\n          type\n          filename\n          category\n          meta\n        }\n      }\n      supplier: Supplier {\n        id\n        companyNumber\n        createdAt\n        name\n        status\n        type\n        updatedAt\n        website\n        clientType\n        managerId\n        vatId\n        meta\n        media: Media {\n          id\n          medium: Medium {\n            id\n            category\n            filename\n            meta\n            type\n          }\n        }\n        manager: Manager {\n          id\n          fullName\n        }\n        contactUsers: Account_Users(where: { isContact: { _eq: true } }) {\n          role\n          position\n          isContact\n          lastSignInAt\n          userId\n          user: User {\n            id\n            name: nameFirst\n            nameFirst\n            nameLast\n            phone\n            status\n            email\n            createdAt\n            fullName\n            accounts: Account_Users {\n              id\n              role\n              position\n              isContact\n              status\n              account: Account {\n                id\n                name\n                type\n              }\n            }\n          }\n        }\n        addresses: Addresses(where: { entity: { _eq: "Account" } }) {\n          ...AddressEntityFields\n          address: Address {\n            ...AddressFields\n            country: Country {\n              id\n              name\n            }\n          }\n        }\n        services: Services(where: { entity: { _eq: "Account" } }) {\n          id\n          dayRate\n          dayRateOOH\n          dayRatePremium\n          hourRate\n          hourRateOOH\n          hourRatePremium\n          meta\n          minimumInterval\n          minimumLength\n          callOutHourRate\n          callOutHourRateOOH\n          callOutHourRatePremium\n          notes\n          delivery\n          createdAt\n          updatedAt\n          entity\n          entityId\n          serviceId\n        }\n      }\n      supplierUser: SupplierUser {\n        id\n        meta\n        name: nameFirst\n        nameFirst\n        nameLast\n        phone\n        status\n        email\n        createdAt\n        fullName\n        accounts: Account_Users {\n          id\n          role\n          position\n          isContact\n          status\n          account: Account {\n            id\n            name\n            type\n          }\n        }\n      }\n      supplierOffers: SupplierOffers {\n        id\n        status\n        rate\n        dayRate\n        meta\n        notes\n        statusLog\n        account: Supplier {\n          id\n          companyNumber\n          createdAt\n          name\n          status\n          type\n          updatedAt\n          website\n          clientType\n          managerId\n          vatId\n          meta\n          media: Media {\n            id\n            medium: Medium {\n              id\n              category\n              filename\n              meta\n              type\n            }\n          }\n          manager: Manager {\n            id\n            fullName\n          }\n        }\n      }\n      tenant: Tenant {\n        id\n        companyNumber\n        createdAt\n        name\n        status\n        type\n        updatedAt\n        website\n        clientType\n        managerId\n        vatId\n        meta\n        media: Media {\n          id\n          medium: Medium {\n            id\n            category\n            filename\n            meta\n            type\n          }\n        }\n        manager: Manager {\n          id\n          fullName\n        }\n      }\n      tenantUser: TenantUser {\n        id\n        fullName\n        nameFirst\n        nameLast\n        email\n        phone\n      }\n      timings: JobTimings(order_by: { id: desc }) {\n        id\n        status\n        notes\n        meta\n        quoteId\n        createdAt\n        user: User {\n          id\n          fullName\n        }\n      }\n      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {\n        id\n        taxonomyId\n        comments\n        taxonomy: Taxonomy {\n          name\n          meta\n        }\n      }\n      answers: Taxonomy(\n        where: { Taxonomy: { type: { _eq: "jobQuestion" } } }\n        order_by: { taxonomyId: asc }\n      ) {\n        id\n        taxonomyId\n        comments\n        taxonomy: Taxonomy {\n          name\n        }\n      }\n      costCategoryTaxonomy: CostCategory {\n        id\n        name\n      }\n      parentJob: ParentJob {\n        createdAt\n        id\n        number\n        reference\n        status\n        title\n        type\n      }\n      childJobs: Jobs {\n        createdAt\n        id\n        number\n        reference\n        status\n        title\n        type\n      }\n      compliances: Compliances(where: { entity: { _eq: "Job" } }) {\n        id\n      }\n    }\n  }\n  ',"\n  ","\n"]);return r=function(){return n},n}function s(){var n=(0,a.Z)(["\n  mutation MyMutation($objects: [CreateJobInput]!, $adminId: Int!) {\n    createJob(adminId: $adminId, objects: $objects) {\n      data\n    }\n  }\n"]);return s=function(){return n},n}function u(){var n=(0,a.Z)(["\n  mutation UpdateJob($id: Int!, $changes: Job_set_input) {\n    update_Job_by_pk(pk_columns: { id: $id }, _set: $changes) {\n      id\n      status\n    }\n  }\n"]);return u=function(){return n},n}function d(){var n=(0,a.Z)(['\n  query GetIssueTypesForSelect {\n    issueTypes: Taxonomy(where: { type: { _eq: "issueType" } }) {\n      value: id\n      label: name\n    }\n  }\n']);return d=function(){return n},n}function c(){var n=(0,a.Z)(['\n  mutation UpdateJob(\n    $jobId: Int!\n    $changes: Job_set_input\n    $deletedAssetIds: [Int!]\n    $assets: [Asset_Entity_insert_input!]!\n    $questions: [Taxonomy_Entity_insert_input!]!\n    $hasQuestions: Boolean!\n    $compliances: [Compliance_Entity_insert_input!]!\n    $media: [Media_Entity_insert_input!]!\n  ) {\n    update_Job_by_pk(pk_columns: { id: $jobId }, _set: $changes) {\n      id\n      status\n      number\n    }\n    insert_Media_Entity(objects: $media) {\n      returning {\n        id\n      }\n    }\n    insert_Asset_Entity(objects: $assets) {\n      returning {\n        id\n      }\n    }\n    delete_Asset_Entity(where: { id: { _in: $deletedAssetIds } }) {\n      returning {\n        id\n      }\n    }\n    delete_Taxonomy_Entity(where: { entityId: { _eq: $jobId }, entity: { _eq: "Job" } }) {\n      returning {\n        id\n      }\n    }\n    insert_Taxonomy_Entity(objects: $questions) @include(if: $hasQuestions) {\n      returning {\n        id\n      }\n    }\n    delete_Compliance_Entity(where: { entityId: { _eq: $jobId }, entity: { _eq: "Job" } }) {\n      returning {\n        id\n      }\n    }\n    insert_Compliance_Entity(objects: $compliances) {\n      returning {\n        id\n      }\n    }\n  }\n']);return c=function(){return n},n}function m(){var n=(0,a.Z)(['\n  mutation UpdateJob(\n    $jobId: Int!\n    $originatorEmail: String!\n    $originatorChanges: User_set_input!\n    $changes: Job_set_input\n    $questions: [Taxonomy_Entity_insert_input!]!\n    $hasQuestions: Boolean!\n  ) {\n    update_User(where: { email: { _eq: $originatorEmail } }, _set: $originatorChanges) {\n      returning {\n        id\n      }\n    }\n\n    update_Job_by_pk(pk_columns: { id: $jobId }, _set: $changes) {\n      id\n      status\n    }\n    delete_Taxonomy_Entity(where: { entityId: { _eq: $jobId }, entity: { _eq: "Job" } }) {\n      returning {\n        id\n      }\n    }\n    insert_Taxonomy_Entity(objects: $questions) @include(if: $hasQuestions) {\n      returning {\n        id\n      }\n    }\n  }\n']);return m=function(){return n},n}function l(){var n=(0,a.Z)(["\n  mutation AddJob($objects: [JobTiming_insert_input!]!) {\n    insert_JobTiming(objects: $objects) {\n      returning {\n        id\n        status\n        notes\n        createdAt\n      }\n    }\n  }\n"]);return l=function(){return n},n}function p(){var n=(0,a.Z)(["\n  mutation DeleteJobTiming($id: Int!, $quoteId: Int, $status: String) {\n    delete_JobTiming(\n      where: { jobId: { _eq: $id }, quoteId: { _eq: $quoteId }, status: { _eq: $status } }\n    ) {\n      returning {\n        jobId\n        status\n      }\n    }\n  }\n"]);return p=function(){return n},n}function y(){var n=(0,a.Z)(['\n  query GetJobPredefined(\n    $accountId: Int!\n    $locationId: Int!\n    $parentId: Int!\n    $assetId: Int!\n    $includeAccount: Boolean!\n    $includeLocation: Boolean!\n    $includeParentJob: Boolean!\n    $includeAsset: Boolean!\n  ) {\n    parentJob: Job_by_pk(id: $parentId) @include(if: $includeParentJob) {\n      id\n      title\n      description\n      reference\n      access\n      source\n      slaId\n      paymentMethod\n      pricing\n      customerSpendThreshold\n      amount\n      supplierLabourAmount\n      supplierMaterialsAmount\n      admin: Admin {\n        id\n        name\n      }\n      customer: Customer {\n        id\n        companyNumber\n        createdAt\n        name\n        status\n        type\n        updatedAt\n        website\n        clientType\n        managerId\n        vatId\n        meta\n        media: Media {\n          id\n          medium: Medium {\n            id\n            category\n            filename\n            meta\n            type\n          }\n        }\n        manager: Manager {\n          id\n          fullName\n        }\n      }\n      customerUser: CustomerUser {\n        id\n        name: nameFirst\n        nameFirst\n        nameLast\n        phone\n        status\n        email\n        createdAt\n        fullName\n        accounts: Account_Users {\n          id\n          role\n          position\n          isContact\n          status\n          account: Account {\n            id\n            name\n            type\n          }\n        }\n      }\n      location: Location {\n        id\n        access\n        createdAt\n        name\n        contactUserId\n      }\n      sublocation: Sublocation {\n        id\n        name\n      }\n      assets: Assets(where: { entity: { _eq: "Job" } }) {\n        id\n        status\n        entityId\n        asset: Asset {\n          name\n          id\n        }\n      }\n      assetCategory: AssetCategory {\n        name\n        id\n      }\n      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {\n        id\n        taxonomyId\n        comments\n        taxonomy: Taxonomy {\n          name\n          meta\n        }\n      }\n      answers: Taxonomy(\n        where: { Taxonomy: { type: { _eq: "jobQuestion" } } }\n        order_by: { taxonomyId: asc }\n      ) {\n        id\n        taxonomyId\n        comments\n        taxonomy: Taxonomy {\n          name\n        }\n      }\n      costCategoryTaxonomy: CostCategory {\n        id\n        name\n      }\n      childJobs: Jobs {\n        createdAt\n        id\n        reference\n        status\n        title\n      }\n      compliances: Compliances(where: { entity: { _eq: "Job" } }) {\n        id\n        compliance: Compliance {\n          id\n          name\n        }\n      }\n      manager: Manager {\n        id\n        name: nameFirst\n        nameFirst\n        nameLast\n        phone\n        status\n        email\n        createdAt\n        fullName\n        accounts: Account_Users {\n          id\n          role\n          position\n          isContact\n          status\n          account: Account {\n            id\n            name\n            type\n          }\n        }\n      }\n      service: Service {\n        id\n        name\n        countryId\n        currencyId\n        customerDayRate\n        customerDayRateOOH\n        customerDayRatePremium\n        customerHourRate\n        customerHourRateOOH\n        customerHourRatePremium\n        supplierDayRate\n        supplierDayRateOOH\n        supplierDayRatePremium\n        supplierHourRate\n        supplierHourRateOOH\n        supplierHourRatePremium\n        minimumInterval\n        minimumLength\n      }\n    }\n    customer: Account_by_pk(id: $accountId) @include(if: $includeAccount) {\n      id\n      name\n    }\n    location: Location_by_pk(id: $locationId) @include(if: $includeLocation) {\n      id\n      name\n      customerAssociations: Account_Locations(where: { Account: { type: { _eq: "customer" } } }) {\n        customer: Account {\n          id\n          name\n        }\n      }\n    }\n    asset: Asset_by_pk(id: $assetId) @include(if: $includeAsset) {\n      id\n      name\n      Category {\n        name\n        id\n      }\n    }\n  }\n']);return y=function(){return n},n}function b(){var n=(0,a.Z)(['\n  query GetSLAsForJobManage($customerId: Int!, $locationId: Int!) {\n    customerSlas: SLA_Entity(\n      where: { entityId: { _eq: $customerId }, entity: { _eq: "Account" } }\n    ) {\n      sla: SLA {\n        name\n      }\n      id\n      inUse\n      onSite\n      onSiteUnit\n      quoteReturned\n      quoteReturnedUnit\n      createdAt\n      updatedAt\n      notes\n      slaId\n    }\n    locationSlas: SLA_Entity(\n      where: { entityId: { _eq: $locationId }, entity: { _eq: "Location" } }\n    ) {\n      sla: SLA {\n        name\n      }\n      id\n      inUse\n      onSite\n      onSiteUnit\n      quoteReturned\n      quoteReturnedUnit\n      createdAt\n      updatedAt\n      notes\n      slaId\n      entity\n    }\n    slas: SLA(where: { status: { _eq: "active" } }, order_by: { name: asc }) {\n      id\n      label: name\n      notes\n      onSite\n      onSiteUnit\n      quoteReturned\n      quoteReturnedUnit\n      createdAt\n      updatedAt\n      type\n      subtype\n    }\n  }\n']);return b=function(){return n},n}function I(){var n=(0,a.Z)(["\n  query GetJobFinanceLogs($jobId: Int!) {\n    logs: JobFinanceLog(where: { jobId: { _eq: $jobId } }, order_by: { createdAt: desc }) {\n      id\n      type\n      value\n      difference\n      createdAt\n      meta\n    }\n    jobInfo: Job_by_pk(id: $jobId) {\n      id\n      type\n      jobSchedule: JobSchedule {\n        invoiceBasis\n      }\n    }\n  }\n"]);return I=function(){return n},n}function _(){var n=(0,a.Z)(["\n  mutation AddJobFinanceLog($objects: [JobFinanceLog_insert_input!]!) {\n    insert_JobFinanceLog(objects: $objects) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return _=function(){return n},n}function g(){var n=(0,a.Z)(["\n  mutation AddJob(\n    $timing: [JobTiming_insert_input!]!\n    $financeLog: [JobFinanceLog_insert_input!]!\n    $hasFinanceLog: Boolean!\n    $jobId: Int!\n    $jobChange: Job_set_input\n  ) {\n    insert_JobTiming(objects: $timing) {\n      returning {\n        id\n        status\n        notes\n        createdAt\n      }\n    }\n    insert_JobFinanceLog(objects: $financeLog) @include(if: $hasFinanceLog) {\n      returning {\n        id\n      }\n    }\n    update_Job_by_pk(pk_columns: { id: $jobId }, _set: $jobChange) @include(if: $hasFinanceLog) {\n      id\n      status\n    }\n  }\n"]);return g=function(){return n},n}function h(){var n=(0,a.Z)(["\n  mutation calculateJobFinance(\n    $jobId: Int\n    $invoiceType: String\n    $customerId: Int\n    $scheduleId: Int\n    $locationId: Int\n  ) {\n    calculateJobFinance(\n      jobId: $jobId\n      invoiceType: $invoiceType\n      customerId: $customerId\n      scheduleId: $scheduleId\n      locationId: $locationId\n    ) {\n      data\n    }\n  }\n"]);return h=function(){return n},n}function v(){var n=(0,a.Z)(["\n  subscription GetJobTimings($adminId: Int!, $number: String!) {\n    timings: JobTiming(\n      where: { Job: { adminId: { _eq: $adminId }, number: { _eq: $number } } }\n      order_by: { id: desc }\n    ) {\n      id\n      status\n      notes\n      meta\n      quoteId\n      createdAt\n      user: User {\n        id\n        fullName\n      }\n    }\n  }\n"]);return v=function(){return n},n}var A=(0,i.Ps)(r(),o.WW,o.MR),f=(0,i.Ps)(s()),q=(0,i.Ps)(u()),R=(0,i.Ps)(d()),$=(0,i.Ps)(c()),T=(0,i.Ps)(m()),S=(0,i.Ps)(l()),j=(0,i.Ps)(p()),U=(0,i.Ps)(y()),J=(0,i.Ps)(b()),C=(0,i.Ps)(I()),L=(0,i.Ps)(_()),x=(0,i.Ps)(g()),w=(0,i.Ps)(h()),F=(0,i.Ps)(v())},66812:function(n,e,t){t.d(e,{P:function(){return R}});var a=t(47568),i=t(26042),o=t(99534),r=t(7297),s=t(97582),u=t(85893),d=t(67294),c=t(45697),m=t(10367),l=t(66252),p=t(4972),y=t(78289),b=t(52019),I=t(49501),_=t(9270),g=t(62140),h=t(84043),v=t(77439);function A(){var n=(0,r.Z)(["\n  position: relative;\n  right: 25px;\n  top: 2px;\n"]);return A=function(){return n},n}var f=function(n,e){var t,a,i,o=!0;return(null===(t=n.errors[n.name])||void 0===t?void 0:t.message)!==(null===(a=e.errors[e.name])||void 0===a?void 0:a.message)&&(o=!1),["accountId","assetCategoryId","entity","entityId","locationId","serviceId","type","value","customerId","customerRole"].forEach(function(t){n[t]!==e[t]&&(o=!1)}),o},q=function(n){var e=n.accountId,t=n.area,a=n.assetCategoryId,i=n.entity,o=n.entityId,r=(n.hasRole,n.id),s=n.locationId,u=n.serviceId,d=n.taxonomyGroupType,c=n.customerId,m=n.customerRole,l=n.type,y=n.userId,b=n.invoiceThreshold,I=n.quoteThreshold,_=l;switch(m&&(_="".concat(l,"_").concat(m)),_){case"address":return{query:p.cz,variables:{entity:i,entityId:o}};case"asset":return{query:p.UH,variables:{categoryId:a,locationId:s}};case"assetBookable":return{query:p.UH,variables:{categoryId:a,locationId:s,bookable:"yes"}};case"assetCategory":return{query:p.nD,variables:{id:r}};case"assetSublocation":return{query:p.UH,variables:{category:"sublocation",adminId:e,locationId:s}};case"compliance":return{query:p.kU,variables:{locationId:s}};case"coverage":return{query:p.j$};case"customer":return{query:p.SW};case"job":return{query:p.Qn,variables:{locationId:s}};case"manager":return{query:p.he,variables:{accountId:e,userId:y}};case"thresholdManagers":return{query:p.Ak,variables:{accountId:e,userId:y,invoiceThreshold:b,quoteThreshold:I}};case"product":return{query:p.UH,variables:{category:"product",locationId:s}};case"property":return{query:p._d,variables:{where:{status:{_eq:"active"},Account_Locations:{accountId:{_eq:e}}}}};case"property_user":return{query:p._d,variables:{where:{status:{_eq:"active"},Account_Locations:{accountId:{_eq:e},Account:{type:{_eq:"customer"},Account_Users:{role:{_eq:"user"},userId:{_eq:c}}},User_Account_Locations:{Account_User:{userId:{_eq:c},accountId:{_eq:e}}}}}}};case"sensor":return{query:p.UH,variables:{category:"sensor",locationId:s}};case"service":return{query:p.kx};case"sla":return{query:p.t1,variables:{type:"priority",adminId:e}};case"sublocation":return{query:p.zR,variables:{locationId:s}};case"supplier":var g={type:{_eq:"supplier"}};return t&&(g.PostcodeAreas={PostcodeArea:{area:{_eq:t}},entity:{_eq:"Account"},status:{_eq:"active"}}),u&&(g.ServiceSchedule={status:{_eq:"active"},entity:{_eq:"Supplier"},serviceId:{_eq:u}},t&&(g.ServiceSchedule.PostcodeAreas={PostcodeArea:{area:{_eq:t}}})),{query:p.by,variables:{where:g}};case"user":return{query:p.yR,variables:{accountId:e}};case"usersForBookings":return{query:p.yR,variables:{accountId:y}};case"tenant":return{query:p.RJ};case"taxonomyGroup":return{query:p.Cj,variables:{type:d}};case"expenseCategory":return{query:p.Ve};default:return{query:p.qd}}},R=(0,d.memo)(function(n){var e,t=n.AddForm,r=n.accountId,c=n.area,m=n.assetCategoryId,p=n.control,A=n.entity,f=n.entityId,R=n.errors,T=n.id,S=n.isClearable,j=n.isDisabled,U=n.label,J=n.locationId,C=n.name,L=n.serviceId,x=n.taxonomyGroupType,w=n.customerId,F=n.customerRole,O=n.type,P=n.userId,H=n.invoiceThreshold,E=n.quoteThreshold,M=(0,o.Z)(n,["AddForm","accountId","area","assetCategoryId","control","entity","entityId","errors","id","isClearable","isDisabled","label","locationId","name","serviceId","taxonomyGroupType","customerId","customerRole","type","userId","invoiceThreshold","quoteThreshold"]),k=(0,l.x)(),D=(0,d.useState)(!1),N=D[0],Z=D[1],B=(0,d.useState)(),G=B[0],Q=B[1],V=(0,d.useState)(!1),W=V[0],z=V[1],Y=(0,d.useContext)(y.Z),K=(0,d.useContext)(b.Z).hasRole,X=(0,d.useState)(!1),nn=X[0],ne=X[1];(0,d.useEffect)(function(){return ne(!1),z(!1),function(){}},[r,m,A,f,J,L,O,w,F,P]);var nt=(e=(0,a.Z)(function(){var n,e,t,a,o,u,d;return(0,s.__generator)(this,function(o){switch(o.label){case 0:if(W)return ne(!0),[2,null];return Z(!0),e=(n=q({accountId:r,area:c,assetCategoryId:m,entity:A,entityId:f,hasRole:K,id:T,locationId:J,serviceId:L,taxonomyGroupType:x,customerId:w,customerRole:F,type:O,userId:P,invoiceThreshold:H,quoteThreshold:E})).query,a=void 0===(t=n.variables)?{}:t,[4,k.query({query:e,variables:(0,i.Z)({},a)})];case 1:return Q((void 0===(u=o.sent().data)?{items:[]}:u).items),Z(!1),z(!0),ne(!0),[2]}})}),function(){return e.apply(this,arguments)}),na=function(){Y.show({content:(0,u.jsx)("div",{children:(0,u.jsx)(t,{})}),title:"Add form"})};return(0,u.jsx)(I.Z,{id:C,label:U,children:(0,u.jsxs)(_.Z,{children:[(0,u.jsx)(g.Z,{md:t?11:12,children:(0,u.jsx)(h.Z,(0,i.Z)({autoload:!1,blurInputOnSelect:!0,cacheOptions:!0,control:p,errors:R,isDisabled:j,isClearable:S,isLoading:N,menuIsOpen:nn,options:G,onFocus:nt,onBlur:function(){ne(!1)},name:C,searchable:!0},M),M.defaultValue)}),t&&(0,u.jsx)(g.Z,{md:1,children:(0,u.jsx)($,{children:(0,u.jsx)(v.Z,{content:null,startIcon:"plus",size:"sm",onClick:na})})})]})})},f),$=m.ZP.div.withConfig({displayName:"select__ButtonWrapper",componentId:"sc-a24ec191-0"})(A());R.propTypes={AddForm:c.object,area:c.string,accountId:c.number,assetCategoryId:c.number,control:c.object.isRequired,errors:c.object.isRequired,entity:c.string,entityId:c.number,id:c.number,isClearable:c.bool,label:c.string.isRequired,locationId:c.number,name:c.string.isRequired,serviceId:c.number,taxonomyGroupType:(0,c.oneOf)(["expenseCategory","costCategory","jobTags"]),type:c.string},R.defaultProps={isClearable:!0,label:"Account",name:"account",type:"account"}},9928:function(n,e,t){t.d(e,{F:function(){return u},j:function(){return d}});var a,i,o=t(47568),r=t(97582),s=t(913),u=(a=(0,o.Z)(function(n,e,t){var a,i;return(0,r.__generator)(this,function(o){switch(o.label){case 0:return a={},i={},[4,Promise.all([n.mutate({mutation:s.iU,variables:{jobId:e,invoiceType:"supplier"},skip:t&&"supplier"!==t}).then(function(n){var e,t,i;a=null==n?void 0:null===(e=n.data)||void 0===e?void 0:null===(t=e.calculateJobFinance)||void 0===t?void 0:null===(i=t.data)||void 0===i?void 0:i.persistentData}),n.mutate({mutation:s.iU,variables:{jobId:e,invoiceType:"customerVat"},skip:t&&"supplier"===t}).then(function(n){var e,t,a;i=null==n?void 0:null===(e=n.data)||void 0===e?void 0:null===(t=e.calculateJobFinance)||void 0===t?void 0:null===(a=t.data)||void 0===a?void 0:a.persistentData})])];case 1:return o.sent(),[2,{financeSupplier:a,financeCustomer:i}]}})}),function(n,e,t){return a.apply(this,arguments)}),d=(i=(0,o.Z)(function(n){var e,t,a,i,o;return(0,r.__generator)(this,function(r){switch(r.label){case 0:return e=n.client,t=n.customerId,a=n.scheduleId,i=n.locationId,o=[],[4,e.mutate({mutation:s.iU,variables:{customerId:t,scheduleId:a,locationId:i}}).then(function(n){var e,t,a;o.push((null==n?void 0:null===(e=n.data)||void 0===e?void 0:null===(t=e.calculateJobFinance)||void 0===t?void 0:null===(a=t.data)||void 0===a?void 0:a.updatedFinances)||[])})];case 1:return r.sent(),[2,{updatedJobs:o}]}})}),function(n){return i.apply(this,arguments)})}}]);