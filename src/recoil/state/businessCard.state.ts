import { atom } from 'recoil';
import { IBusinessCard } from '../../types';

const businessCardsState = atom<IBusinessCard[]>({
  key: 'BusinessCardsState',
  default: [
    {
      id: 0,
      cardColor: '#0d6aff',
      cardTintColor: '#f86eff',
      firstName: 'Sachintha',
      lastName: 'Udara',
      mobileNumber: '+6584263311',
      email: 'kgsachintha@hotmail.com',
      company: 'Activate Interactive Pte Ltd',
      occupation: 'Senior Application Consultant',
      linkedInUrl: 'https://www.linkedin.com/in/kgsachintha',
    },
    {
      id: 1,
      cardColor: '#4dffd5',
      cardTintColor: '#ff906e',
      firstName: 'Sachintha',
      lastName: 'Udara',
      mobileNumber: '+6584263311',
      email: 'kgsachintha@hotmail.com',
      company: 'Activate Interactive Pte Ltd',
      occupation: 'Senior Application Consultant',
      linkedInUrl: 'https://www.linkedin.com/in/kgsachintha',
    },
    {
      id: 2,
      cardColor: '#f86eff',
      cardTintColor: '#fffd6e',
      firstName: 'Sachintha',
      lastName: 'Udara',
      mobileNumber: '+6584263311',
      email: 'kgsachintha@hotmail.com',
      company: 'Activate Interactive Pte Ltd',
      occupation: 'Senior Application Consultant',
      linkedInUrl: 'https://www.linkedin.com/in/kgsachintha',
    },
    {
      id: 3,
      cardColor: '#4dffd5',
      cardTintColor: '#ff906e',
      firstName: 'Sachintha',
      lastName: 'Udara',
      mobileNumber: '+6584263311',
      email: 'kgsachintha@hotmail.com',
      company: 'Activate Interactive Pte Ltd',
      occupation: 'Senior Application Consultant',
      linkedInUrl: 'https://www.linkedin.com/in/kgsachintha',
    },
    {
      id: 4,
      cardColor: '#fffd6e',
      cardTintColor: '#ff906e',
      firstName: 'Sachintha',
      lastName: 'Udara',
      mobileNumber: '+6584263311',
      email: 'kgsachintha@hotmail.com',
      company: 'Activate Interactive Pte Ltd',
      occupation: 'Senior Application Consultant',
      linkedInUrl: 'https://www.linkedin.com/in/kgsachintha',
    },
  ],
});

const selectedBusinessCardState = atom<IBusinessCard | null>({
  key: 'BusinessCardState',
  default: null,
});

export { businessCardsState, selectedBusinessCardState };
