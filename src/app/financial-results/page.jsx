import React from 'react';
import InvestorDocuments from '@/components/investor-documents';

const financialResults = [
    {
        title: "Madhav Natural Stone Surfaces Private Limited",
        description: "Financial Results as on 31st March 2026",
        fileId: "1tWthpeWKsYQsNdIKy5LBW1LW4cB09WPp",
    },
    {
        title: "Madhav Ashok Ventures Private Limited - Standalone",
        description: "Standalone Financial Results as on 31st March 2026",
        fileId: "1zGAyOuqvCbWGJKrBNOMCik27B_NcRK61",
    },
    {
        title: "Madhav Ashok Ventures Private Limited - Consolidated",
        description: "Consolidated Financial Results as on 31st March 2026",
        fileId: "17qo-uFEf8lcAJCbeMIlWpwBvxj5lr_qN",
    },
    {
        title: "Unaudited Financial Results",
        description: "For the quarter ended December 31, 2017",
        fileId: "1Yxbd9Cx-hnOMZQ1ruq6D3eAvNhQBnlAh",
    },
    {
        title: "Unaudited Financial Results",
        description: "For the quarter ended September 30, 2017",
        fileId: "1pvttzan87q0PTsbZhM5GSIFrDLgue9cc",
    },
    {
        title: "Unaudited Financial Results",
        description: "For the quarter ended June 30, 2017",
        fileId: "1gvVcNUP7NSFL76DofQtoSoOosbzp3S40",
    },
    {
        title: "Financial Results 2016-2017",
        fileId: "1lWtqdQQ_jobhbEQV_jg80OAd6BvQYVJz",
    },
    {
        title: "Financial Results 2015-2016",
        fileId: "1DzqD1YYV1Ovdh_5_FQjVi_7KJqB3m778",
    },
    {
        title: "Financial Results 2014-2015",
        fileId: "15rjdz5DK91AkpO43ICYPbgqpJPm_OIMT",
    },
    {
        title: "Financial Results 2013-2014",
        fileId: "1F2DPg-mbYftNPdPrbFoBkHK9nzv73ZDP",
    },
];

const FinancialResults = () => {
    return (
        <InvestorDocuments
            title="Financial Results"
            intro="Access and download the latest financial results and reports of our group companies."
            documents={financialResults}
        />
    );
};

export default FinancialResults;
