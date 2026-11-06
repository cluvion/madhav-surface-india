import React from 'react';
import AnnouncementTables from '@/components/announcement-tables';

const sections = [
    {
        heading: "Shareholding Pattern",
        columns: [
            {
                year: "2026-2027",
                items: [
                    { label: "30.06.2026", fileId: "1I6CTCHeLVZ9GqIMr8pIF4xHcMMEnMw0H" },
                    { label: "30.09.2026", fileId: "1CDOjVW854ZiGwDJ3r_GCrm1Uh9Ov_CkA" },
                ],
            },
            {
                year: "2025-2026",
                items: [
                    { label: "30.06.2025", fileId: "15IogCLYqE8eEnjokKaNBPQ_Ad3fefqHG" },
                    { label: "30.09.2025", fileId: "1LsMK3ft-0BbnGsDEjsYWXOXLjdTp-uTA" },
                    { label: "31.12.2025" },
                    { label: "31.03.2026", fileId: "1QkSJaXFpmeVoDkc5EdouMfbyaHLXZ6Qh" },
                ],
            },
            {
                year: "2024-2025",
                items: [
                    { label: "30.06.2024", fileId: "1Dgf8MoYpnuaMkYlTJH0fjgKvylRfQZuN" },
                    { label: "30.09.2024", fileId: "1jg4phBRl1_QysOcxioSHu055EdhIX21G" },
                    { label: "31.12.2024", fileId: "1tWiu9VIivodQRK4CNZcel7lX2XWcY9l1" },
                    { label: "31.03.2025", fileId: "10G_csYwbSassMHhTX_MJgsCboMAfISdO" },
                ],
            },
            {
                year: "2023-2024",
                items: [
                    { label: "30.06.2023", fileId: "11lPXZBuSeQYgphzrI7y5Dkp3YAbS5XXx" },
                    { label: "30.09.2023", fileId: "1XQwFC66wHHPG8N-QlVsBBLWNUV4Up_dW" },
                    { label: "31.12.2023", fileId: "1jtt0NyKwKOSQwbv3j2nmNb7RRz7BPltk" },
                    { label: "31.03.2024", fileId: "1xgDsqH9qbc3YLDdXriQ6xgKefvRjWZ1G" },
                ],
            },
            {
                year: "2022-2023",
                items: [
                    { label: "30.06.2022", fileId: "1cVbZBYlV-JVA8uiNDis5kRCRHNsSh1h2" },
                    { label: "30.09.2022", fileId: "1M9zC90frItwEI1g5JdvabMhMKbbD0Vna" },
                    { label: "31.12.2022", fileId: "1XKxBbvBTuHg4sz0L8tiP9WOzPYTnkVbm" },
                    { label: "31.03.2023", fileId: "1qs6YpJW8_pNKXZSkGJa30SNj6sWavTNx" },
                ],
            },
            {
                year: "2021-2022",
                items: [
                    { label: "30.06.2021", fileId: "1NfGpTdiWOKPadvoTm2hkv_6URH28EdOe" },
                    { label: "30.09.2021", fileId: "1J5Ht8Vc82WvAIPftV-T6vnWIfCb5uf57" },
                    { label: "31.12.2021", fileId: "1N9C29PFhn0tioz_skWiDpGUx_LhyDkov" },
                    { label: "31.03.2022", fileId: "1HXCqiaZ9Cl5kS_G0KZJK0wBgnoLyjDX5" },
                ],
            },
            {
                year: "2020-2021",
                items: [
                    { label: "30.06.2020", fileId: "1CtyV8CEN8_sGkOPgsQhj9aXkwL3NCP2B" },
                    { label: "30.09.2020", fileId: "1rMFlrCISKbqaYG7DqqZ0UmGkGK7lraw0" },
                    { label: "31.12.2020", fileId: "1rjCTPGUVmq6uRriNvbEoN6McDwSD37B6" },
                    { label: "31.03.2021", fileId: "1TywFrL7-_MDxb14M_U8UBB8jJX4YRAG1" },
                ],
            },
        ],
    },
    {
        heading: "Annual Secretarial Compliance",
        items: [
            { label: "2025-2026" },
            { label: "2024-2025", fileId: "18MXVuvxGw5fTDPiDN_e6kXY11YEZTVvm" },
            { label: "2023-2024", fileId: "18M3--9DtglKBAfhDwXUHyzNobmysD2FR" },
            { label: "2022-2023", fileId: "15AEIGI39xLDtmD3-zFxn1z36_NmKXq2D" },
            { label: "2021-2022", fileId: "1Y87dh5kpDJYtu5YScel8DLOtaa1d708_" },
            { label: "2020-2021", fileId: "1g3Vu0y1u0j-rKYFcqtEXrZX6q9xUjMnu" },
        ],
    },
    {
        heading: "MGT 7",
        items: [
            { label: "2024-2025", fileId: "1sy6RRu7NGh17dajmQIJCI5n1d9haE18X" },
            { label: "2023-2024", fileId: "1l6OPnzz-fKp87duDKfbG5xDltO7lTVkn" },
            { label: "2022-2023", fileId: "1hvJiKomOOTBcT4Gl2YWgwfohXUJF1F1_" },
        ],
    },
    {
        heading: "MGT - 8",
        items: [
            { label: "2024-2025", fileId: "1tQ5j_f1CnckEEV9UtH8nkjfUlNffej9X" },
            { label: "2023-2024", fileId: "1cmWdUQHGPYJ9y68QkKpkcF_LEj5eyPCH" },
            { label: "2022-2023", fileId: "1qnWPtXWVvG8dIDsT3oI6xRS01bi4_1Fm" },
            { label: "2021-2022", fileId: "1pEU0j-2azfEyD2tTMw5XT-eoTokcf68U" },
        ],
    },
    {
        heading: "KYC Updation",
        items: [
            { label: "ISR - 1", fileId: "1S-1m-jqclVvM29lvzU1hAXq97E4Q2Cls" },
            { label: "ISR - 2", fileId: "1qSbLQ-XsPQGOzLJm806LoMEyLgo899Kg" },
            { label: "ISR - 3", fileId: "1utdcG1AxoeYD-I9vmRjh9O7WUzpktoRG" },
            { label: "ISR - 4", fileId: "1xeQn1XVzGxFFqxhppxZjneaL6psqENDy" },
            { label: "SH-13", fileId: "1-ta0nnBwfieLulVHBEqqtKkYT-wh1p2Y" },
            { label: "SH-14", fileId: "1vtp40FWnwor3Ti4Wo7dLkG9F85TSG4UU" },
        ],
    },
    {
        heading: "Other Information",
        items: [
            { label: "Shareholding Pattern - Quarter ended December 31, 2017", fileId: "1jQkmOuI5AAGZ9HFDqiuRQxtpGrUd3HeS" },
            { label: "Shareholding Pattern", fileId: "1OYxbi203HvsfXitS5K8m0UXc9yBCB93M" },
            { label: "Shares Transferred to IEPF", fileId: "1xOit_0zAUQrWF68qdZqGmdc1GVOV_gn3" },
            { label: "Contact Us for Investor Relations", fileId: "1djP-zDk7_90pvv9grNbAyf9rbbdIM5ep" },
        ],
    },
];

const ShareholdersInformation = () => {
    return (
        <AnnouncementTables
            title="Shareholders Information"
            sections={sections}
        />
    );
};

export default ShareholdersInformation;
