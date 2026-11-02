import React from 'react';
import InvestorDocuments from '@/components/investor-documents';

const documents = [];

const PostalBallot = () => {
    return (
        <InvestorDocuments
            title="Postal Ballot"
            intro="Corporate announcements related to postal ballots."
            documents={documents}
        />
    );
};

export default PostalBallot;
