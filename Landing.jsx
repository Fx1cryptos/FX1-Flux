---

### 2️⃣ `Landing.jsx`

```jsx
import React from "react";
import "./style.css";

function Landing() {
  return (
    <div className="container">
      <header className="logo">⚡ FX1 Flux</header>
      <div className="card">
        <h2>Welcome to FX1 Digital Hubs & Wardrobe</h2>
        <p>
          I am <strong>FX1 Flux</strong>, your AI Agent powered by <span className="gold">$FDH</span>.
          I help you explore Web3, NFTs, crypto, DeFi/DePIN, digital fashion, and AI art.
        </p>
        <div className="button-group">
          <a href="https://poe.com/FDH-FLUX" target="_blank" rel="noreferrer">
            <button className="button">🚀 Chat with FX1 Flux</button>
          </a>
          <a href="https://github.com/Fx1cryptos/FX1-Flux.git" target="_blank" rel="noreferrer">
            <button className="button">📂 Clone Repo</button>
          </a>
        </div>
      </div>

      <section className="nft-section">
        <h3>🎨 Featured FX1 NFT Art</h3>
        <div className="nft-grid">
          <div className="nft-card">
            <img src="https://ipfs.io/ipfs/bafybeihthjv2mscw6o3stb52q4vxolc5u4gzznqajkhatnexdsoeqlwnga" alt="FX1 Flux NFT 1" />
            <p>Flux Pixel Pulse</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} FX1 Digital Hubs – Powered by $FDH</p>
        <div className="socials">
          <a href="https://twitter.com/FX1DigitalHubs" target="_blank" rel="noreferrer">Twitter</a> | 
          <a href="https://github.com/Fx1cryptos" target="_blank" rel="noreferrer">GitHub</a> | 
          <a href="https://zora.co" target="_blank" rel="noreferrer">Zora</a>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
