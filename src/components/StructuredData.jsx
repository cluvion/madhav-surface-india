// Structured Data Component for SEO
import { generateOrganizationSchema, generateFAQSchema } from '@/lib/seo';

const StructuredData = ({ type, data }) => {
  let schema = {};

  switch (type) {
    case 'organization':
      schema = generateOrganizationSchema();
      break;
    case 'faq':
      schema = generateFAQSchema(data);
      break;
    default:
      return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
};

export default StructuredData;
