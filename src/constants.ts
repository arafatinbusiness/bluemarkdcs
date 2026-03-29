import { Service, JournalPost } from './types';

export const SERVICES: Service[] = [
  {
    id: 'business-setup',
    title: 'Business Setup Services',
    description: 'Expert advisory for Mainland, Freezone, and Offshore company formations.',
    icon: '/assets/businesssetup.png',
    details: 'Navigate the complexities of UAE business laws with our comprehensive setup services. From initial approval to trade license issuance, we manage the entire lifecycle of your company formation, ensuring compliance with DED and Freezone regulations.'
  },
  {
    id: 'tasheel',
    title: 'Tasheel / MOHRE Services',
    description: 'Streamlined MOHRE labor and immigration compliance solutions.',
    icon: '/assets/tasheel_main.png',
    details: 'Our Tasheel specialists provide efficient processing for labor contracts, work permits, and establishment cards. We ensure your business remains fully compliant with the Ministry of Human Resources and Emiratisation (MOHRE) mandates.'
  },
  {
    id: 'amer',
    title: 'Amer / Immigration Services',
    description: 'Official GDRFA visa and residency permit processing.',
    icon: '/assets/amer.png',
    details: 'As an authorized service provider, we facilitate all Amer-related tasks including entry permits, residency issuance, renewals, and cancellations. We provide a seamless interface with the General Directorate of Residency and Foreigners Affairs (GDRFA).'
  },
  {
    id: 'dubai-visa',
    title: 'Dubai Visa Services',
    description: 'End-to-end residency, golden visa, and family sponsorship.',
    icon: '/assets/dubai_visa.png',
    details: 'From individual employment visas to high-profile Golden Visas and family sponsorships, our team manages the entire immigration workflow with precision and confidentiality.'
  },
  {
    id: 'insurance',
    title: 'Insurance Services',
    description: 'Coordinated health fitness tests and insurance compliance.',
    icon: '/assets/insurance.png',
    details: 'We streamline the mandatory health fitness tests for residency visas and provide advisory on DHA/DOH compliant health insurance plans to ensure full regulatory adherence.'
  },
  {
    id: 'tawjeeh',
    title: 'Tawjeeh Services',
    description: 'Strategic government relations and document management.',
    icon: '/assets/tawjeeh_service.png',
    details: 'Outsource your government relations to our expert PRO team. We handle all ministerial interactions, municipal approvals, and legal documentation, allowing your management to focus on core business operations.'
  },
  {
    id: 'rta',
    title: 'RTA Services',
    description: 'Certified translations recognized by UAE ministries and courts.',
    icon: '/assets/rta.png',
    details: 'We provide MOJ-certified legal translations for all corporate and personal documents. Our translations are officially recognized by all UAE government departments, courts, and embassies.'
  },
  {
    id: 'tourist-visa',
    title: 'Tourist Visa Services',
    description: 'Global certificate attestation and MOFA legalization.',
    icon: '/assets/tourist_visa.png',
    details: 'Ensure your documents are legally valid in the UAE. We provide comprehensive attestation services for educational, personal, and commercial documents from MOFA, embassies, and consulates worldwide.'
  },
  {
    id: 'other-services',
    title: 'Other Services',
    description: 'Efficient application, renewal, and biometric coordination.',
    icon: '/assets/other.png',
    details: 'Our team manages the complete Emirates ID lifecycle, from initial typing and application submission to coordinating biometric appointments at EICP centers.'
  }
];

export const JOURNALS: JournalPost[] = [
  {
    id: '1',
    title: 'Navigating the 2024 UAE Labor Law Amendments',
    excerpt: 'A strategic overview of the latest MOHRE updates and their implications for corporate compliance and employee relations.',
    date: 'March 15, 2024',
    image: 'https://picsum.photos/seed/law/800/600'
  },
  {
    id: '2',
    title: 'The Golden Visa: A Gateway to Long-term Residency',
    excerpt: 'Detailed analysis of the expanded eligibility criteria for investors, professionals, and exceptional talents under the new UAE residency framework.',
    date: 'March 10, 2024',
    image: 'https://picsum.photos/seed/visa/800/600'
  },
  {
    id: '3',
    title: 'Strategic Advantages of Dubai Freezone Formations',
    excerpt: 'Comparing the regulatory benefits and operational efficiencies of major Dubai freezones for international business expansion.',
    date: 'March 5, 2024',
    image: 'https://picsum.photos/seed/business/800/600'
  },
  {
    id: '4',
    title: 'Optimizing Corporate Governance through PRO Outsourcing',
    excerpt: 'How professional government relations management reduces operational risk and enhances administrative efficiency for SMEs.',
    date: 'March 1, 2024',
    image: 'https://picsum.photos/seed/pro/800/600'
  }
];
