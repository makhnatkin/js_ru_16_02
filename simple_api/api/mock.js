var accounts = [{
    "id": "1",
    "productType": "CURRENT_ACC",
    "productStatus": "ACTIVE",
    "isVisibleMobile": true,
    "productName": "CURRENT_ACC_1",
    "accountNumberIBAN": "#234035 - 6770324344 / 00001",
    "balanceAvailable": "18500",
    "balanceAvailableWithoutOverdraft": "100",
    "currency": "CZK",
    "openDate": "2015-12-20",
    "productStatusLastUpdateDate": "01.01.2015",
    "linkedProductList": []
}, {
    "id": "1000001",
    "productType": "CURRENT_ACC",
    "productStatus": "INACTIVE",
    "isVisibleMobile": true,
    "productName": "CURRENT_ACC_INACTIVE",
    "accountNumberIBAN": "#current-account-inactive",
    "balanceAvailable": "123",
    "currency": "CZK",
    "openDate": "2015-12-20",
    "productStatusLastUpdateDate": "01.01.2015",
    "linkedProductList": []
}, {
    "id": "1000002",
    "productType": "CURRENT_ACC",
    "productStatus": "CLOSED",
    "isVisibleMobile": true,
    "productName": "CURRENT_ACC_CLOSED",
    "accountNumberIBAN": "#current-account-closed",
    "balanceAvailable": "124",
    "currency": "CZK",
    "openDate": "2015-12-20",
    "productStatusLastUpdateDate": "01.01.2015",
    "linkedProductList": []
}, {
    "id": "1000003",
    "productType": "CURRENT_ACC",
    "productStatus": "EXPIRED",
    "isVisibleMobile": true,
    "productName": "CURRENT_ACC_EXPIRED",
    "accountNumberIBAN": "#current-account-expired",
    "balanceAvailable": "125",
    "currency": "CZK",
    "openDate": "2015-12-20",
    "productStatusLastUpdateDate": "01.01.2015",
    "linkedProductList": []
}, {
    "id": "1000004",
    "productType": "CURRENT_ACC",
    "productStatus": "PERM_BLOCKED",
    "isVisibleMobile": true,
    "productName": "CURRENT_ACC_PERM_BLOCKED",
    "accountNumberIBAN": "#current-account-perm-blocked",
    "balanceAvailable": "126",
    "currency": "CZK",
    "openDate": "2015-12-20",
    "productStatusLastUpdateDate": "01.01.2015",
    "linkedProductList": []
}, {
    "id": "1000007",
    "productType": "CURRENT_ACC",
    "productStatus": "TEMP_BLOCKED",
    "isVisibleMobile": true,
    "productName": "CURRENT_ACC_TEMP_BLOCKED",
    "accountNumberIBAN": "#current-account-temp-blocked",
    "balanceAvailable": "126",
    "currency": "HRK",
    "openDate": "2015-12-20",
    "productStatusLastUpdateDate": "01.01.2015",
    "linkedProductList": []
}, {
    "id": "1000005",
    "productType": "CURRENT_ACC",
    "productStatus": "ACTIVE",
    "isVisibleMobile": true,
    "productName": "CURRENT_ACC_PAST_DUE",
    "accountNumberIBAN": "#current-account-past-due",
    "balanceAvailable": "126",
    "currency": "CZK",
    "openDate": "2015-12-20",
    "productStatusLastUpdateDate": "01.01.2015",
    "linkedProductList": [],
    "currentAccountInfo": {
        "overdraftMaturityDate": "2016-03-10T00:00:00-03:00",
        "overdraftStatus": "PAST_DUE",
        "blockedAmount": "100"
    }
}, {
    "id": "1000006",
    "productType": "CURRENT_ACC",
    "productStatus": "ACTIVE",
    "isVisibleMobile": true,
    "productName": "CURRENT_ACC_OVERDRAFT_OVERDUT_APPROACHING",
    "accountNumberIBAN": "#current-account-overdraft-overdue-approaching",
    "balanceAvailable": "126",
    "currency": "CZK",
    "openDate": "2015-12-20",
    "productStatusLastUpdateDate": "01.01.2015",
    "linkedProductList": [],
    "currentAccountInfo": {
        "overdraftMaturityDate": "2016-03-31T00:00:00-03:00",
        "overdraftStatus": "ACTIVE",
        "blockedAmount": "100"
    }
}, {
    "id": "2",
    "productType": "CREDIT_CARD",
    "productStatus": "ACTIVE",
    "isVisibleMobile": true,
    "accountNumberIBAN": "xxxxxx - 6770324344 / 00001",
    "productName": "CREDIT_CARD_2",
    "balanceAvailable": "777",
    "currency": "CZK",
    "cardInfo": {
        "blockedAmount": "0",
        "cardProductClass": "CLASSIC",
        "paymentSystem": "VISA",
        "cardMaskedNumber": "1234 ∙ ∙ ∙ ∙  ∙ ∙ ∙ ∙ 0002",
        "accountAlias": "Credit account XXX",
        "nextInstallmentDate": "2016-01-02",
        "minimumInstallmentAmount": "500"
    },
    "debt": {
        "loanType": "MORTG",
        "availableCreditLimit": "777",
        "loanNumber": "2",
        "creditReferenceNumber": "2",
        "nextInstallmentDate": "2015-09-02",
        "minimumInstallmentAmount": "1000",
        "interestRateForCashTransactions": "2.52",
        "interestRateForCashTransactionsFrequency": "% p.a.",
        "interestRateForATMTransactions": "1.52",
        "interestRateForATMTransactionsFrequency": "% p.a.",
        "interestRateForPOSTransactions": "0.52",
        "interestRateForPOSTransactionsFrequency": "% p.a."
    },
    "openDate": "2015-11-20",
    "productStatusLastUpdateDate": "01.01.2015"
}, {
    "id": "22",
    "productType": "CREDIT_CARD",
    "productStatus": "CLOSED",
    "isVisibleMobile": true,
    "productAlias": "CLOSED CREDIT CARD",
    "accountNumberIBAN": "xxxxxx - 6770324344 / 00001",
    "productName": "CLOSED_CREDIT_CARD",
    "balanceAvailable": "777",
    "currency": "CZK",
    "cardInfo": {
        "blockedAmount": "0",
        "cardProductClass": "CLASSIC",
        "paymentSystem": "VISA",
        "cardMaskedNumber": "1234 ∙ ∙ ∙ ∙  ∙ ∙ ∙ ∙ 0002",
        "accountAlias": "Credit account XXX",
        "nextInstallmentDate": "2016-01-02",
        "minimumInstallmentAmount": "500"
    },
    "closeDate": "2016-03-03T00:00:00-03:00",
    "debt": {
        "loanType": "MORTG",
        "availableCreditLimit": "777",
        "loanNumber": "2",
        "creditReferenceNumber": "2",
        "nextInstallmentDate": "2015-09-02",
        "minimumInstallmentAmount": "1000",
        "interestRateForCashTransactions": "2.52",
        "interestRateForCashTransactionsFrequency": "% p.a.",
        "interestRateForATMTransactions": "1.52",
        "interestRateForATMTransactionsFrequency": "% p.a.",
        "interestRateForPOSTransactions": "0.52",
        "interestRateForPOSTransactionsFrequency": "% p.a."
    },
    "openDate": "2015-11-20",
    "productStatusLastUpdateDate": "01.01.2015"
}, {
    "id": "23",
    "productType": "CREDIT_CARD",
    "productStatus": "PERM_BLOCKED",
    "isVisibleMobile": true,
    "productAlias": "PERM_BLOCKED CREDIT CARD",
    "accountNumberIBAN": "xxxxxx - 6770324344 / 00001",
    "productName": "PERM_BLOCKED_CREDIT_CARD",
    "balanceAvailable": "777",
    "currency": "CZK",
    "cardInfo": {
        "blockedAmount": "0",
        "cardProductClass": "CLASSIC",
        "paymentSystem": "VISA",
        "cardMaskedNumber": "1234 ∙ ∙ ∙ ∙  ∙ ∙ ∙ ∙ 0002",
        "accountAlias": "Credit account XXX",
        "nextInstallmentDate": "2016-01-02",
        "minimumInstallmentAmount": "500"
    },
    "closeDate": "2016-03-03T00:00:00-03:00",
    "debt": {
        "loanType": "MORTG",
        "availableCreditLimit": "777",
        "loanNumber": "2",
        "creditReferenceNumber": "2",
        "nextInstallmentDate": "2015-09-02",
        "minimumInstallmentAmount": "1000",
        "interestRateForCashTransactions": "2.52",
        "interestRateForCashTransactionsFrequency": "% p.a.",
        "interestRateForATMTransactions": "1.52",
        "interestRateForATMTransactionsFrequency": "% p.a.",
        "interestRateForPOSTransactions": "0.52",
        "interestRateForPOSTransactionsFrequency": "% p.a."
    },
    "openDate": "2015-11-20",
    "productStatusLastUpdateDate": "01.01.2015"
}, {
    "id": "3",
    "productType": "CURRENT_ACC",
    "productStatus": "ACTIVE",
    "isVisibleMobile": true,
    "productAlias": "My account",
    "productName": "CURRENT_ACC_3",
    "accountNumberIBAN": "#234035 - 6770324344 / 00003",
    "balanceAvailable": "3200",
    "balanceAvailableWithoutOverdraft": "3200",
    "currency": "USD",
    "openDate": "2015-10-20",
    "productStatusLastUpdateDate": "01.01.2015",
    "overdraftMaturityDate": "2016-02-10",
    "linkedProductList": [{
        "id": "4",
        "productType": "DEBIT_CARD"
    }, {
        "id": "5",
        "productType": "DEBIT_CARD"
    }]
}, {
    "id": "100500",
    "productType": "CURRENT_ACC",
    "productStatus": "ACTIVE",
    "isVisibleMobile": true,
    "productAlias": "Overdraft Testing",
    "productName": "CURRENT_ACC_4",
    "accountNumberIBAN": "#123456 - 7890123456 / 100500",
    "balanceAvailable": "0",
    "balanceAvailableLC": "0",
    "balanceAvailableWithoutOverdraft": "-200",
    "currency": "USD",
    "openDate": "2015-09-20",
    "productStatusLastUpdateDate": "01.01.2015",
    "linkedProductList": [{
        "id": "100501",
        "productType": "DEBIT_CARD"
    }]
}, {
    "id": "100505",
    "productType": "CURRENT_ACC",
    "productStatus": "ACTIVE",
    "isVisibleMobile": true,
    "productAlias": "Overdraft overdue",
    "productName": "CURRENT_ACC_4",
    "accountNumberIBAN": "#123456 - 7890123456 / 100500",
    "balanceAvailable": "0",
    "balanceAvailableLC": "0",
    "balanceAvailableWithoutOverdraft": "-200",
    "currency": "USD",
    "openDate": "2015-09-20",
    "productStatusLastUpdateDate": "01.01.2015",
    "linkedProductList": [{
        "id": "100505",
        "productType": "DEBIT_CARD"
    }]
}, {
    "id": "100501",
    "productType": "DEBIT_CARD",
    "productStatus": "ACTIVE",
    "isVisibleMobile": true,
    "productAlias": "Debit card for overdraft",
    "productName": "DEBIT_CARD_5",
    "currency": "USD",
    "cardInfo": {
        "blockedAmount": "0",
        "cardProductClass": "CLASSIC",
        "paymentSystem": "VISA",
        "cardMaskedNumber": "1234 ∙ ∙ ∙ ∙  ∙ ∙ ∙ ∙ 0501"
    },
    "openDate": "01.01.2015",
    "productStatusLastUpdateDate": "01.01.2015"
}, {
    "id": "100505",
    "productType": "DEBIT_CARD",
    "productStatus": "ACTIVE",
    "isVisibleMobile": true,
    "productAlias": "Debit card for overdraft overdue",
    "productName": "DEBIT_CARD_5",
    "currency": "USD",
    "cardInfo": {
        "blockedAmount": "0",
        "cardProductClass": "CLASSIC",
        "paymentSystem": "VISA",
        "cardMaskedNumber": "1234 ∙ ∙ ∙ ∙  ∙ ∙ ∙ ∙ 0501"
    },
    "openDate": "01.01.2015",
    "productStatusLastUpdateDate": "01.01.2015"
}, {
    "id": "4",
    "productType": "DEBIT_CARD",
    "productStatus": "EXPIRED",
    "isVisibleMobile": true,
    "productAlias": "Card for shopping 4",
    "productName": "DEBIT_CARD_4",
    "currency": "USD",
    "cardInfo": {
        "blockedAmount": "0",
        "cardProductClass": "CLASSIC",
        "paymentSystem": "VISA",
        "cardMaskedNumber": "1234 ∙ ∙ ∙ ∙  ∙ ∙ ∙ ∙ 0004"
    },
    "openDate": "01.01.2015",
    "productStatusLastUpdateDate": "01.01.2015"
}, {
    "id": "5",
    "productType": "DEBIT_CARD",
    "productStatus": "INACTIVE",
    "isVisibleMobile": true,
    "productAlias": "My wife's card",
    "productName": "DEBIT_CARD_5",
    "currency": "CZK",
    "cardInfo": {
        "blockedAmount": "0",
        "cardProductClass": "CLASSIC",
        "paymentSystem": "MAST",
        "cardMaskedNumber": "1234 ∙ ∙ ∙ ∙  ∙ ∙ ∙ ∙ 0005"
    },
    "openDate": "01.01.2015",
    "productStatusLastUpdateDate": "01.01.2015"
}, {
    "id": "6",
    "productType": "CURRENT_ACC",
    "productStatus": "ACTIVE",
    "isVisibleMobile": true,
    "productAlias": "My wife's account",
    "productName": "CURRENT_ACC_6",
    "openDate": "2015-08-20",
    "balanceAvailable": "1294",
    "balanceAvailableWithoutOverdraft": "1303",
    "currency": "CZK",
    "productStatusLastUpdateDate": "01.01.2015",
    "linkedProductList": [{
        "id": "7",
        "productType": "DEBIT_CARD"
    }, {
        "id": "71",
        "productType": "DEBIT_CARD"
    }]
}, {
    "id": "7",
    "productType": "DEBIT_CARD",
    "productStatus": "ACTIVE",
    "isVisibleMobile": true,
    "productAlias": "My card connected to wife's account",
    "productName": "DEBIT_CARD_7",
    "currency": "CZK",
    "cardInfo": {
        "blockedAmount": "0",
        "cardProductClass": "CLASSIC",
        "paymentSystem": "MAST",
        "cardMaskedNumber": "1234 ∙ ∙ ∙ ∙  ∙ ∙ ∙ ∙ 0007"
    },
    "openDate": "01.01.2015",
    "productStatusLastUpdateDate": "01.01.2015"
}, {
    "id": "71",
    "productType": "DEBIT_CARD",
    "productStatus": "TEMP_BLOCKED",
    "isVisibleMobile": true,
    "productAlias": "My card connected to wife's account1",
    "productName": "DEBIT_CARD_71",
    "currency": "CZK",
    "cardInfo": {
        "blockedAmount": "0",
        "cardProductClass": "CLASSIC",
        "paymentSystem": "MAST",
        "cardMaskedNumber": "1234 ∙ ∙ ∙ ∙  ∙ ∙ ∙ ∙ 0071"
    },
    "openDate": "01.01.2015",
    "productStatusLastUpdateDate": "01.01.2015"
}, {
    "id": "8",
    "productType": "LOAN_ACC",
    "productStatus": "ACTIVE",
    "isVisibleMobile": true,
    "productAlias": "For iPhone, god why I bought it!",
    "productName": "LOAN_ACC_1",
    "accountNumberIBAN": "#325892-677201324 / 000008",
    "balanceAvailable": "-500751.3",
    "currency": "CZK",
    "openDate": "01.01.2015",
    "productStatusLastUpdateDate": "01.01.2015",
    "debt": {
        "loanType": "CONSLN",
        "loanNumber": "1",
        "creditReferenceNumber": "1",
        "nextInstallmentDate": "2015-12-02",
        "minimumInstallmentAmount": "1000"
    }
}, {
    "id": "9",
    "productType": "LOAN_ACC",
    "productStatus": "ACTIVE",
    "isVisibleMobile": true,
    "productAlias": "For vacation to Mars!",
    "productName": "LOAN_ACC_1",
    "accountNumberIBAN": "#325892-677201324 / 000009",
    "balanceAvailable": "-10234500751.3",
    "currency": "CZK",
    "openDate": "01.01.2015",
    "productStatusLastUpdateDate": "01.01.2015",
    "debt": {
        "loanType": "MORTG",
        "loanNumber": "2",
        "creditReferenceNumber": "2",
        "nextInstallmentDate": "2015-09-02",
        "minimumInstallmentAmount": "1000"
    }
}, {
    "id": "92",
    "productName": "sgfhdfghjyheDFdhf",
    "productAlias": "Some of some product",
    "accountNumberIBAN": "#76898-677456324 / 000092",
    "balanceAvailable": "18500",
    "isVisibleMobile": true,
    "productType": "SAVINGS_ACC",
    "openDate": "2015-05-23",
    "productStatus": "ACTIVE",
    "productStatusLastUpdateDate": "2015-05-22T01:14:22",
    "currency": "CZK"
}, {
    "id": "94",
    "productType": "TERM_DEPOSIT",
    "productStatus": "ACTIVE",
    "isVisibleMobile": true,
    "productAlias": "For sweet retirement",
    "productName": "frgrf",
    "accountNumberIBAN": "#325892-677201324 / 000094",
    "balanceAvailable": "29456.3",
    "currency": "CZK",
    "openDate": "01.01.2015",
    "productStatusLastUpdateDate": "01.01.2015"
}, {
    "id": "91",
    "productName": "sgfhdf56DFdhf",
    "productAlias": "Money generator 3000",
    "accountNumberIBAN": "#325892-677456324 / 000091",
    "balanceAvailable": "0",
    "isVisibleMobile": true,
    "productType": "SAVINGS_ACC",
    "openDate": "2015-05-23",
    "productStatus": "ACTIVE",
    "productStatusLastUpdateDate": "2015-05-22T01:14:22",
    "currency": "USD",
    "interestRateMatrix": {
        "text": "sample1283",
        "matrixRow": [{
            "balance": "18500",
            "periodTo": "01.01.2016",
            "rangeMin": "0",
            "rangeOfValues": "sample1286",
            "rangeMax": "20000",
            "accrualInterest": "1.3",
            "periodFrom": "01.01.2016"
        }, {
            "balance": "18500",
            "periodTo": "01.01.2016",
            "rangeMin": "20000",
            "rangeOfValues": "sample12861",
            "rangeMax": "50000",
            "accrualInterest": "1.4",
            "periodFrom": "01.01.2016"
        }]
    }
}, {
    "id": "95",
    "productName": "sgf34hdf56DFdhf",
    "productAlias": "Temp blocked Money",
    "accountNumberIBAN": "#325892-677456666 / 000095",
    "balanceAvailable": "-120",
    "isVisibleMobile": true,
    "productType": "SAVINGS_ACC",
    "openDate": "2015-05-23",
    "productStatus": "TEMP_BLOCKED",
    "productStatusLastUpdateDate": "2015-05-22T01:14:22",
    "currency": "CZK"
}, {
    "id": "96",
    "productName": "sgfhdf56D78Fdhf",
    "productAlias": "Permanent blocked Money ",
    "accountNumberIBAN": "#325892-666666666 / 000096",
    "balanceAvailable": "10",
    "isVisibleMobile": true,
    "productType": "SAVINGS_ACC",
    "openDate": "2015-05-23",
    "productStatus": "PERM_BLOCKED",
    "productStatusLastUpdateDate": "2015-05-22T01:14:22",
    "currency": "USD"
}]

var productCompatibility = [{
        "productId": "1",
        "compatibleProductId": ["3", "6", "92", "91", "95", "96", "2", "94"]
    }, {
        "productId": "3",
        "compatibleProductId": ["1", "6", "92", "91", "95", "96", "2", "94"]
    }, {
        "productId": "6",
        "compatibleProductId": ["1", "3", "92", "91", "95", "96", "2", "94"]
    }, {
        "productId": "2",
        "compatibleProductId": ["1", "3", "6", "92", "91", "95", "96"]
    }, {
        "productId": "91",
        "compatibleProductId": ["1", "3", "6", "2", "94"]
    }, {
        "productId": "92",
        "compatibleProductId": ["1", "3", "6", "2", "94"]
    }, {
        "productId": "95",
        "compatibleProductId": ["1", "3", "6", "2", "94"]
    }, {
        "productId": "96",
        "compatibleProductId": ["1", "3", "6", "2", "94"]
}];

module.exports = {
    accounts: accounts,
    productCompatibility: productCompatibility
};