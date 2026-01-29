export const services = [
  {
    slug: 'enterprise-risk-management',
    name: 'Enterprise Risk Management',
    shortName: 'ERM',
    description: 'Identify, assess, and mitigate enterprise risks through structured frameworks.',
  },
  {
    slug: 'cybersecurity',
    name: 'Cybersecurity',
    shortName: 'Cybersecurity',
    description: 'Strengthen security posture through assessments, monitoring, and risk governance.',
  },
  {
    slug: 'program-management',
    name: 'Program Management',
    shortName: 'Program Management',
    description: 'Drive successful execution of complex initiatives through structured governance.',
  },
  {
    slug: 'workforce-solutions',
    name: 'Workforce Solutions',
    shortName: 'Workforce',
    description: 'End-to-end workforce training, staffing, and business process outsourcing.',
  },
];

export const industries = [
  {
    slug: 'healthcare',
    name: 'Healthcare',
    description: 'Healthcare payers, providers, and life sciences organizations.',
    challenges: [
      'Rising cybersecurity threats and data breaches',
      'HIPAA compliance and regulatory complexity',
      'Operational cost pressures and efficiency demands',
      'Third-party vendor risk management',
      'Business continuity during disruptions',
    ],
  },
  {
    slug: 'financial-services',
    name: 'Financial Services',
    description: 'Banks, insurance companies, credit unions, and investment firms.',
    challenges: [
      'Evolving regulatory requirements (Basel III, SOX)',
      'Cybersecurity and fraud prevention',
      'Interest rate and liquidity risk',
      'Third-party and vendor risk',
      'Operational resilience requirements',
    ],
  },
  {
    slug: 'higher-education',
    name: 'Higher Education',
    description: 'Universities, colleges, and educational institutions.',
    challenges: [
      'Enrollment volatility and competitive pressures',
      'Data security and student privacy',
      'Title IX and regulatory compliance',
      'Campus safety and crisis management',
      'Technology modernization and cyber risk',
    ],
  },
  {
    slug: 'government',
    name: 'Government & Federal',
    description: 'Federal agencies, state governments, and public sector organizations.',
    challenges: [
      'FISMA and FedRAMP compliance',
      'Zero trust architecture requirements',
      'Budget constraints and efficiency mandates',
      'Workforce modernization',
      'Supply chain security',
    ],
  },
];

export function getServiceIndustryCombos() {
  const combos: Array<{ service: typeof services[0]; industry: typeof industries[0] }> = [];
  for (const service of services) {
    for (const industry of industries) {
      combos.push({ service, industry });
    }
  }
  return combos;
}
