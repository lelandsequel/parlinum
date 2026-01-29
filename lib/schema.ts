export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Parlinum Consulting, LLC',
  alternateName: 'Parlinum',
  url: 'https://parlinum.com',
  logo: 'https://parlinum.com/logo.png',
  description: 'SDVOSB-certified management consulting firm specializing in enterprise risk management, cybersecurity, and program management.',
  foundingDate: '2018',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5716 16th Street NW, Ste. B',
    addressLocality: 'Washington',
    addressRegion: 'DC',
    postalCode: '20011',
    addressCountry: 'US'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-202-664-6345',
    contactType: 'sales',
    email: 'info@parlinum.com',
    availableLanguage: 'English'
  },
  sameAs: []
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Parlinum Consulting, LLC',
  image: 'https://parlinum.com/logo.png',
  '@id': 'https://parlinum.com',
  url: 'https://parlinum.com',
  telephone: '+1-202-664-6345',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5716 16th Street NW, Ste. B',
    addressLocality: 'Washington',
    addressRegion: 'DC',
    postalCode: '20011',
    addressCountry: 'US'
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00'
  },
  priceRange: '$$$$',
  areaServed: {
    '@type': 'Country',
    name: 'United States'
  },
  serviceType: [
    'Enterprise Risk Management',
    'Cybersecurity Consulting',
    'Program Management',
    'Management Consulting'
  ]
};

export const serviceSchema = (name: string, description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: name,
  provider: {
    '@type': 'Organization',
    name: 'Parlinum Consulting, LLC',
    url: 'https://parlinum.com'
  },
  description,
  areaServed: {
    '@type': 'Country',
    name: 'United States'
  }
});

export const faqSchema = (faqs: Array<{q: string, a: string}>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a
    }
  }))
});
