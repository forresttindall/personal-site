import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faThreads,
  faEthereum,
  faFarcaster,
  faBluesky
} from '@fortawesome/free-brands-svg-icons';
import {
  faImages,
  faCopy,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import './Links.css';

// Custom SVG Component for Buy Me a Coffee
const CustomCoffeeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379c-.197-.069-.42-.098-.57-.241c-.152-.143-.196-.366-.231-.572c-.065-.378-.125-.756-.192-1.133c-.057-.325-.102-.69-.25-.987c-.195-.4-.597-.634-.996-.788a6 6 0 0 0-.626-.194c-1-.263-2.05-.36-3.077-.416a26 26 0 0 0-3.7.062c-.915.083-1.88.184-2.75.5c-.318.116-.646.256-.888.501c-.297.302-.393.77-.177 1.146c.154.267.415.456.692.58c.36.162.737.284 1.123.366c1.075.238 2.189.331 3.287.37q1.829.074 3.65-.118q.449-.05.896-.119c.352-.054.578-.513.474-.834c-.124-.383-.457-.531-.834-.473c-.466.074-.96.108-1.382.146q-1.767.12-3.536.006a22 22 0 0 1-1.157-.107c-.086-.01-.18-.025-.258-.036q-.364-.055-.724-.13c-.111-.027-.111-.185 0-.212h.005q.416-.09.838-.147h.002c.131-.009.263-.032.394-.048a25 25 0 0 1 3.426-.12q1.011.029 2.017.144l.228.031q.4.06.798.145c.392.085.895.113 1.07.542c.055.137.08.288.111.431l.319 1.484a.237.237 0 0 1-.199.284h-.003l-.112.015a37 37 0 0 1-4.743.295a37 37 0 0 1-4.699-.304c-.14-.017-.293-.042-.417-.06c-.326-.048-.649-.108-.973-.161c-.393-.065-.768-.032-1.123.161c-.29.16-.527.404-.675.701c-.154.316-.199.66-.267 1c-.069.34-.176.707-.135 1.056c.087.753.613 1.365 1.37 1.502a39.7 39.7 0 0 0 11.343.376a.483.483 0 0 1 .535.53l-.071.697l-1.018 9.907c-.041.41-.047.832-.125 1.237c-.122.637-.553 1.028-1.182 1.171q-.868.197-1.756.205c-.656.004-1.31-.025-1.966-.022c-.699.004-1.556-.06-2.095-.58c-.475-.458-.54-1.174-.605-1.793l-.731-7.013l-.322-3.094c-.037-.351-.286-.695-.678-.678c-.336.015-.718.3-.678.679l.228 2.185l.949 9.112c.147 1.344 1.174 2.068 2.446 2.272c.742.12 1.503.144 2.257.156c.966.016 1.942.053 2.892-.122c1.408-.258 2.465-1.198 2.616-2.657l1.024-9.995l.215-2.087a.48.48 0 0 1 .39-.426c.402-.078.787-.212 1.074-.518c.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233c-2.416.359-4.866.54-7.308.46c-1.748-.06-3.477-.254-5.207-.498c-.17-.024-.353-.055-.47-.18c-.22-.236-.111-.71-.054-.995c.052-.26.152-.609.463-.646c.484-.057 1.046.148 1.526.22q.865.132 1.737.212c2.48.226 5.002.19 7.472-.14q.675-.09 1.345-.21c.399-.072.84-.206 1.08.206c.166.281.188.657.162.974a.54.54 0 0 1-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a6 6 0 0 1-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38c0 0 1.243.065 1.658.065c.447 0 1.786-.065 1.786-.065c.783 0 1.434-.6 1.499-1.38l.94-9.95a4 4 0 0 0-1.322-.238c-.826 0-1.491.284-2.26.613"/>
  </svg>
);

const Links = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [copied, setCopied] = useState(false);
  const [cryptoModalOpen, setCryptoModalOpen] = useState(false);
  const ethAddress = "0x356b2FCF909c1A115d0C7E49264f59b6A988F8C9";
  const [copiedAddress, setCopiedAddress] = useState("");

  {/* 
  // Function to handle wallet links
  const handleCryptoClick = (e) => {
    e.preventDefault();
    setCryptoModalOpen(true);
  };

  // Function to copy address
  const copyToClipboard = () => {
    navigator.clipboard.writeText(ethAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Updated function with proper deeplinks for mobile wallet apps
  const openWallet = (walletType) => {
    let deepLink;
    
    switch(walletType) {
      case 'metamask':
        // Direct deep link format for MetaMask
        deepLink = `ethereum:${ethAddress}@1?value=0`;
        break;
      case 'rainbow':
        // Rainbow wallet uses ethereum protocol with their scheme
        deepLink = `rainbow://ethereum:${ethAddress}`;
        break;
      case 'coinbase':
        // Coinbase Wallet deep link format
        deepLink = `cbwallet://wallet/send?asset=ETH&address=${ethAddress}`;
        break;
      case 'trust':
        // Trust Wallet deep link format
        deepLink = `trust://ethereum:${ethAddress}`;
        break;
      default:
        // Standard ethereum protocol URI which most wallets support
        deepLink = `ethereum:${ethAddress}`;
    }
    
    window.location.href = deepLink;
    
    // Create a fallback for desktop users
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (!isMobile) {
      // Show a message or handle desktop fallback
      alert("Please open this page on your mobile device with a wallet installed, or copy the address manually.");
    }
    
    // Close the modal after attempting to open the wallet
    setTimeout(() => setCryptoModalOpen(false), 500);
  };

  */}

  useEffect(() => {
    const loadScripts = async () => {
      const threeScript = document.createElement('script');
      threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js';
      document.head.appendChild(threeScript);

      threeScript.onload = () => {
        const vantaScript = document.createElement('script');
        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js';
        document.head.appendChild(vantaScript);

        vantaScript.onload = () => {
          if (!vantaEffect.current && window.VANTA) {
            vantaEffect.current = window.VANTA.WAVES({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x0,
              shininess: 24.00,
              waveHeight: 16.50,
              zoom: 0.71
            });
          }
        };
      };
    };

    loadScripts();
    
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  const links = [
    {
      title: "Website",
      url: "https://forresttindall.dev",
      imageIcon: '/favicon.ico',
    },
    {
      title: "GitHub",
      url: "https://github.com/forresttindall",
      icon: faGithub,
    },
    {
      title: "Creationbase",
      url: "https://creationbase.io",
      imageIcon: '/images/dot-triangle.png',
    },
    {
      title: "Threads",
      url: "https://www.threads.net/@forrest.tindall",
      icon: faThreads,
    },
    {
      title: "Farcaster",
      url: "https://warpcast.com/forresttindall",
      imageIcon: "/images/farcaster.svg",
    },
    {
      title: "Bluesky",
      url: "https://bsky.app/profile/forresttindall.dev",
      icon: faBluesky,
    },
    {
      title: "Instagram",
      url: "https://instagram.com/forrest.tindall",
      icon: faInstagram,
    },
    {
      title: "Photos",
      url: "https://forresttindall.com",
      icon: faImages,
    },
    {
      title: "Buy Me A Coffee",
      url: "https://buymeacoffee.com/forresttindall",
      customIcon: <CustomCoffeeIcon />,
    },
    {
      title: "Tip",
      walletAddress: "0x356b2FCF909c1A115d0C7E49264f59b6A988F8C9",
      copyOnClick: true,
      /* onClick: handleCryptoClick, */
      icon: faEthereum,
    }
  ];

  return (
    <section className="links-section" ref={vantaRef}>
      <div className="links-content">
        <div className="profile-section">
          <div className="profile-image">
            <img src="/images/me.jpg" alt="Forrest Tindall" />
          </div>
          <h1 className="profile-name gradient-name">My Links</h1>
        </div>
        
        <div className="links-container">
          <div className="links-grid">
          {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="link-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (link.copyOnClick && link.walletAddress) {
                      e.preventDefault();
                      navigator.clipboard.writeText(link.walletAddress);
                      setCopiedAddress(link.walletAddress);
                      setTimeout(() => setCopiedAddress(""), 2000);
                    }
                  }}
                >
                  {link.customIcon ? (
                    link.customIcon
                  ) : link.imageIcon ? (
                    <img
                      src={link.imageIcon}
                      alt={`${link.title} icon`}
                      className="link-icon"
                    />
                  ) : (
                    <FontAwesomeIcon icon={link.icon} style={{ color: '' }} size="lg" />
                  )}
                  {link.title}
                </a>
              ))}
          </div>
        </div>


        {/* Crypto Wallet Modal
        {cryptoModalOpen && (
          <div className="crypto-modal-overlay">
            <div className="crypto-modal">
              <h3 className="crypto-modal-title">Send ETH</h3>
              
              <div className="address-container">
                <p className="eth-address">{ethAddress}</p>
                <button onClick={copyToClipboard} className="copy-button">
                  <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
                </button>
              </div>
              
              <div className="wallet-buttons">
                <button onClick={() => openWallet('metamask')} className="wallet-button metamask">
                  MetaMask
                </button>
                <button onClick={() => openWallet('coinbase')} className="wallet-button coinbase">
                  Coinbase
                </button>
                <button onClick={() => openWallet('rainbow')} className="wallet-button rainbow">
                  Rainbow
                </button>
                <button onClick={() => openWallet('trust')} className="wallet-button trust">
                  Trust
                </button>
                <button onClick={() => openWallet('default')} className="wallet-button any-wallet">
                  Other Wallet
                </button>
              </div>
              
              <button onClick={() => setCryptoModalOpen(false)} className="close-modal">
                Close
              </button>
            </div>
          </div> 
        )}*/}
          <div className="spacer"> 
          {links.map((link) => link.walletAddress && copiedAddress === link.walletAddress && (
            <span className={`copied-text ${copiedAddress ? 'visible' : ''}`} key={link.walletAddress}>
              Wallet Address Copied!
            </span>
            ))}
      </div>
      </div>
    </section>
  );
};

export default Links;