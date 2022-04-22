import React from "react";
import "../component/style/disclaimer.css";
import "../component/style/pp.css";

function DisclaimerPage() {
  return (
    <>
      <div className="disclaimer__banner"></div>
      <div className="disclaimer">
        <h2>Disclaimer</h2>
        <div className="pp__line"></div>
        <p>
          There are general risks associated in cryptocurrency assets and DeFi
          ecosystems, such as pump and dumps, errors in the smart contracts or
          dApp’s and malicious attacks by bad actors in the space, leading to
          the loss or inaccessibility of funds for the investors.
        </p>
        <p>The team will never ask you to:</p>
        <p>- Transfer any funds for any reason whatsoever.</p>
        <p>- Input any private key or seed phrase at any point.</p>
        <p>
          Scammers and impersonators will always find a loophole and a perfect
          timing to strike, so the best we can do is to educate as much as
          possible our community for these bad situations, and how to proceed
          upon them.
        </p>
        <p>
          Users should always DYOR and never invest more they are willing to
          lose.
        </p>
        <p>
          The contents of this document should not be considered as financial
          advice, but as educational purposes only.
        </p>
        <p>
          Cosmic Exodus ecosystem tokens were created with the sole purpose to
          unlock the full extent of the existing content gameplay (i.e. Heroes
          and Companions), as transactions of value between player to player
          (i.e. swap resources, items) or as means necessary to progress the
          game content (i.e. open loot box, upgrade NFTs).
        </p>
        <p>
          The information publicly displayed by any team members and associates
          can be subject to change or deleted without any prior notice or
          warning.
        </p>
      </div>
    </>
  );
}

export default DisclaimerPage;
