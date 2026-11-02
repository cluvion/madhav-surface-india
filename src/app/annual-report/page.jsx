import React from 'react';
import InvestorDocuments from '@/components/investor-documents';

const documents = [
    {
        title: "Annual Report 2025-2026",
        fileId: "1FPzrdYxkoZzeVhq9-gwVv1Paj2iyYt5v",
    },
    {
        title: "Annual Report 2024-2025",
        fileId: "1-5yvIsNfGVK_tC5e5oCMkqDN65AK5ZOr",
    },
    {
        title: "Annual Report 2023-2024",
        fileId: "1EXjF1gPt2UBtGSrEuVHlkmtM0Sn4S5fL",
    },
    {
        title: "Annual Report 2022-2023",
        fileId: "1g7YbcUFYTDGJK4sPOJJ9qQ777jqfNpxq",
    },
    {
        title: "Annual Report 2021-2022",
        fileId: "1napGLdKP8MDQxGifww1pn5M4hS1o7ojb",
    },
    {
        title: "Annual Report 2020-2021",
        fileId: "1s1TvDXAnoy1d3TWgRyxHFLe23ckOco0r",
    },
    {
        title: "Annual Report 2018-2019",
        fileId: "1ouB7LZagZIBcC56C3lKH4Aqd3u3GMoYr",
    },
    {
        title: "Annual Report 2017-2018",
        fileId: "1Q1YEBjL5qaXF3zVvv7JFZ-MAZYXNhiW_",
    },
    {
        title: "Annual Report 2016-2017",
        fileId: "18bgO_3IZLszBUlljtF2wM8J9VMjGkNB4",
    },
    {
        title: "Annual Report 2015-2016",
        fileId: "1R72GAJRQcraJ1ChXvx92KqpukfsfqtZI",
    },
    {
        title: "Annual Report 2014-2015",
        fileId: "1UzMfEnW8zRO_3CpM-dl9hDZWBTKxfAhw",
    },
    {
        title: "Annual Report 2013-2014",
        fileId: "1YB2d-TnbBvTKxztr3QYGB3widopXAASe",
    },
    {
        title: "Annual Report 2012-2013",
        fileId: "1AgrSeJAm9mci4AQewWlho9_PdgU22lD3",
    },
];

const AnnualReport = () => {
    return (
        <InvestorDocuments
            title="Annual Report"
            intro="Annual reports of the company for previous financial years."
            documents={documents}
        />
    );
};

export default AnnualReport;
