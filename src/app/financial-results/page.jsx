import React from 'react';
import InvestorDocuments from '@/components/investor-documents';

const folderGroups = [
    {
        heading: "Madhav Marbles and Granites Limited",
        folders: [
            {
                name: "2026-2027",
                documents: [
                    {
                        title: "Financial Results - June 30, 2026",
                        fileId: "1tPkayaa1Mf2mGf7ACch2D_LwNUtoa4NO",
                    },
                ],
            },
            {
                name: "2025-2026",
                documents: [
                    {
                        title: "Financial Results - March 31, 2026",
                        fileId: "13ljGCrxypQwm1Tj8gQwjoimga025XSSW",
                    },
                    {
                        title: "Financial Results - December 31, 2025",
                        fileId: "1A1uLeuoe1skRefAnlUgucHpYE95kNMc6",
                    },
                    {
                        title: "Financial Results - September 30, 2025",
                        fileId: "1K0HokxExWgbejvPp3usJBUXf0eE074Y-",
                    },
                    {
                        title: "Financial Results - June 30, 2025",
                        fileId: "1JKkOVb4-ekiGxN8XdoIVnD83WZihlDR1",
                    },
                ],
            },
            {
                name: "2024-2025",
                documents: [
                    {
                        title: "Financial Results - March 31, 2025",
                        fileId: "1ogyz3HrxOBuselhe0g5Q3L443Phh7Zv-",
                    },
                    {
                        title: "Financial Results - December 31, 2024",
                        fileId: "1I3qTxoJco3DvYAgdiq8qZg3LJNfg-Vsc",
                    },
                    {
                        title: "Financial Results - September 30, 2024",
                        fileId: "1W6T_XzhqIYEAbExCKyE-pjcXK7Cvt1rJ",
                    },
                    {
                        title: "Financial Results - June 30, 2024",
                        fileId: "1kI2lMz-RP5kzh05KGhw4f9okPa7COSk9",
                    },
                ],
            },
            {
                name: "2023-2024",
                documents: [
                    {
                        title: "Financial Results - March 31, 2024",
                        fileId: "17aCY-Ik0aeeK3pXTWKwi1urNIU3KeFPY",
                    },
                    {
                        title: "Financial Results - December 31, 2023",
                        fileId: "1JscO5MOWXTt5pzR8ijBTgNjCvTDq6Y6i",
                    },
                    {
                        title: "Financial Results - September 30, 2023",
                        fileId: "1UjhETReWoeVTpUx4E32m4y5PSTZCTPAY",
                    },
                    {
                        title: "Financial Results - June 30, 2023",
                        fileId: "1E3AIyiAJgNasyzZ28J7AKBBtYHazkhtu",
                    },
                ],
            },
            {
                name: "2022-2023",
                documents: [
                    {
                        title: "Financial Results - March 31, 2023",
                        fileId: "1BHmb_vkV7_qQz4DbeivIvgTwaoZ6s63Q",
                    },
                    {
                        title: "Financial Results - December 31, 2022",
                        fileId: "1QVaKCat38sbIuTGRWQZU06WEkyNbOjBq",
                    },
                    {
                        title: "Financial Results - September 30, 2022",
                        fileId: "1dW2jmea1Gep5wjE-lzFVSFmDG7LY42fr",
                    },
                    {
                        title: "Financial Results - June 30, 2022",
                        fileId: "1wV01_kr6OriLhjbO2q5bIc3hL2-a2MOw",
                    },
                ],
            },
            {
                name: "2021-2022",
                documents: [
                    {
                        title: "Financial Results - March 31, 2022",
                        fileId: "1tBtGmqv8Y2A-GSR7as-JvaU6xaAjdet-",
                    },
                    {
                        title: "Financial Results - December 31, 2021",
                        fileId: "1orfQEUhaxkkWnCwJ6Lo4gBbFE2VccBzi",
                    },
                    {
                        title: "Financial Results - September 30, 2021",
                        fileId: "1U-E4I6WNIc0n-BEvqV8o5z0rIAPQZ_Ls",
                    },
                    {
                        title: "Financial Results - June 30, 2021",
                        fileId: "1uZtCvtDyfo2G-Ydv9Dsa6Set9Nq1aIWq",
                    },
                ],
            },
            {
                name: "2020-2021",
                documents: [
                    {
                        title: "Financial Results - March 31, 2021",
                        fileId: "19s1OqhCvCXmBr-i6TyhbWJWHyh0lMSjd",
                    },
                    {
                        title: "Financial Results - December 31, 2020",
                        fileId: "1P_-rF25zmBOLKZsMR62_gy24g7WbJ2tv",
                    },
                    {
                        title: "Financial Results - September 30, 2020",
                        fileId: "1nZHzNeL98op814ddEp_oeAuLsIzfePr1",
                    },
                    {
                        title: "Financial Results - June 30, 2020",
                        fileId: "1-MzDIt3amqYQdCr_QdFsvqKEn88u54a4",
                    },
                ],
            },
            {
                name: "2017-2018",
                documents: [
                    {
                        title: "Unaudited Financial Results - December 31, 2017",
                        fileId: "1Yxbd9Cx-hnOMZQ1ruq6D3eAvNhQBnlAh",
                    },
                    {
                        title: "Unaudited Financial Results - September 30, 2017",
                        fileId: "1pvttzan87q0PTsbZhM5GSIFrDLgue9cc",
                    },
                    {
                        title: "Unaudited Financial Results - June 30, 2017",
                        fileId: "1gvVcNUP7NSFL76DofQtoSoOosbzp3S40",
                    },
                ],
            },
            {
                name: "2016-2017",
                documents: [
                    {
                        title: "Financial Results 2016-2017",
                        fileId: "1lWtqdQQ_jobhbEQV_jg80OAd6BvQYVJz",
                    },
                ],
            },
            {
                name: "2015-2016",
                documents: [
                    {
                        title: "Financial Results 2015-2016",
                        fileId: "1DzqD1YYV1Ovdh_5_FQjVi_7KJqB3m778",
                    },
                ],
            },
            {
                name: "2014-2015",
                documents: [
                    {
                        title: "Financial Results 2014-2015",
                        fileId: "15rjdz5DK91AkpO43ICYPbgqpJPm_OIMT",
                    },
                ],
            },
            {
                name: "2013-2014",
                documents: [
                    {
                        title: "Financial Results 2013-2014",
                        fileId: "1F2DPg-mbYftNPdPrbFoBkHK9nzv73ZDP",
                    },
                ],
            },
        ],
    },
    {
        heading: "Group Companies",
        folders: [
            {
                name: "Madhav Ashok Ventures Private Limited",
                documents: [
                    {
                        title: "Audited Standalone - March 31, 2026",
                        fileId: "1zGAyOuqvCbWGJKrBNOMCik27B_NcRK61",
                    },
                    {
                        title: "Audited Consolidated - March 31, 2026",
                        fileId: "17qo-uFEf8lcAJCbeMIlWpwBvxj5lr_qN",
                    },
                    {
                        title: "Audited Standalone - March 31, 2025",
                        fileId: "1SeNRlVc-BOdzuPd4uT3fWi3_6B5IxsU-",
                    },
                    {
                        title: "Audited Consolidated - March 31, 2025",
                        fileId: "1YQjhGNq8zExStW6rm9LdPygFnDV6kUQV",
                    },
                    {
                        title: "Audited Standalone - March 31, 2024",
                        fileId: "1lXe3mXBd1H4d_h_CrTjMkkK9gxnNfmRf",
                    },
                    {
                        title: "Audited Consolidated - March 31, 2024",
                        fileId: "1_MIB7U58qhpMkboyu0R8_h8YkAp5ykMK",
                    },
                    {
                        title: "Audited Standalone - March 31, 2023",
                        fileId: "1WihUAJlGK2HRDtYZoXOpqKdlS1BZ3Nhj",
                    },
                    {
                        title: "Audited Standalone - March 31, 2022",
                        fileId: "1XywrvznGDwna-PPnZDTlTYMMmjSX0FFA",
                    },
                ],
            },
            {
                name: "Madhav Natural Stone Surfaces Private Limited",
                documents: [
                    {
                        title: "Audited - March 31, 2026",
                        fileId: "1tWthpeWKsYQsNdIKy5LBW1LW4cB09WPp",
                    },
                    {
                        title: "Audited - March 31, 2025",
                        fileId: "1UaAD6hqeamEl8XvP-Jmp3DEeMrVBVMHY",
                    },
                    {
                        title: "Audited - March 31, 2024",
                        fileId: "1dqZE1vTtl6wCozuhJ9qau6rgR9T23VkC",
                    },
                    {
                        title: "Audited - March 31, 2023",
                        fileId: "1XAPbqbPUuatx-KLqQuL3ttYPi9WEG1fb",
                    },
                    {
                        title: "Audited - March 31, 2022",
                        fileId: "1ptZQgo7mwZEsD1NWs0I43jLy_bKWmIyY",
                    },
                ],
            },
        ],
    },
];

const FinancialResults = () => {
    return (
        <InvestorDocuments
            title="Financial Results"
            intro="Access and download the latest financial results and reports of our group companies."
            folderGroups={folderGroups}
        />
    );
};

export default FinancialResults;
