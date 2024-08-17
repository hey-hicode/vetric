import Assets from "@/components/Icons/Assets";
import Ball from "@/components/Icons/Ball";
import Community from "@/components/Icons/Community";
import Data from "@/components/Icons/Data";
import Document from "@/components/Icons/Document";
import Guard from "@/components/Icons/Guard";

export const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/about' },
    { name: 'Features', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];
  
  
  export const dataa = [
    { id: 1, title: 'Cross-Chain Access', description: 'Seamlessly interact with diverse blockchain networks.', image: <Guard /> },
    { id: 2, title: 'Decentralized Identity', description: 'Securely manage your digital identity across applications.', image:<Document /> },
    { id: 3, title: 'Smart Contract Automation', description: 'Streamline operations with automated smart contracts.', image:<Ball />  },
    { id: 4, title: 'Community Governance', description: 'Participate in decentralized decision-making through voting.', image:<Community /> },
    { id: 5, title: 'Asset Tokenization', description: 'Digitally tokenize real-world assets for efficient management.', image:<Assets />  },
    { id: 6, title: 'Interoperable Data Exchange', description: 'Exchange data seamlessly between applications for collaboration.', image:<Data /> },
    // Add more items here
  ];
  