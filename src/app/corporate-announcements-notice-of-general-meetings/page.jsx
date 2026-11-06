import React from 'react';
import InvestorDocuments from '@/components/investor-documents';

const documents = [
    {
        title: "Notice of 37th Annual General Meeting",
        description: "Held on September 30, 2026",
        fileId: "1W64arBUSxXq-keRmLJ7bnsc_Gd80wYFC",
    },
    {
        title: "Notice of 36th Annual General Meeting",
        description: "Held on September 30, 2025",
        fileId: "1K_UlzcUnwBH9pYguSvGp8sPz8tp2mJtM",
    },
    {
        title: "Notice of 35th Annual General Meeting",
        description: "Held on September 30, 2024",
        fileId: "1B4gQjgW-mMm3JOnO3QEqMrrsREc5HV8i",
    },
    {
        title: "Notice of 34th Annual General Meeting",
        description: "Held on September 29, 2023",
        fileId: "1lMNx0PXXZ4ocDEVewhCVODLBkJY2bUjK",
    },
    {
        title: "Notice of 33rd Annual General Meeting",
        description: "Held on September 30, 2022",
        fileId: "1vTqDhgpES2m7aEC_LM6wS2NfKy_8TsRm",
    },
    {
        title: "Notice of 32nd Annual General Meeting",
        description: "Held on September 30, 2021",
        fileId: "1q4Ughc9RKLOcbAGn8AWeXssUi90EMIZB",
    },
    {
        title: "Notice of 31st Annual General Meeting",
        description: "Held on December 26, 2020",
        fileId: "1y7-uXJnfiNL4TyGNP6YAvpHWSLXxnSLT",
    },
    {
        title: "Notice of 30th Annual General Meeting",
        description: "Held on September 30, 2019",
        fileId: "1ToLGU7xbagHJVt6jIvunqSiXXvEvvMhO",
    },
    {
        title: "Notice of 29th Annual General Meeting",
        description: "Held on August 11, 2018",
        fileId: "1P6lZZPNnMePdTO8tEcW_1dOz6AUP70Hd",
    },
    {
        title: "Attendance Slip and Proxy Form 2018",
        fileId: "1HS1EExf-vbWXE1wrECgR3gyywcjRLDoG",
    },
    {
        title: "Notice of 28th Annual General Meeting",
        description: "Held on September 9, 2017",
        fileId: "1-Xvdv8-ApFoQ4mahfC0mFzDlWjOzOOsa",
    },
];

const NoticeOfGeneralMeetings = () => {
    return (
        <InvestorDocuments
            title="Notice of General Meetings"
            intro="Notices of general meetings of the company."
            documents={documents}
        />
    );
};

export default NoticeOfGeneralMeetings;
