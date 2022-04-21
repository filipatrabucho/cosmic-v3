import React from "react";
import { useState } from "react";
import Accordion from "../component/accordion/accordion";
import Accordionitem from "../component/accordion/accordionitem";

function FAQPage() {
  const [active, setActive] = useState("");
  return (
    <div>
      <Accordion />
      <Accordionitem
        title="What is a metaverse?"
        description="The metaverse as a term was coined in Neal Stephenson’s 1992
        science fiction novel Snow Crash, where humans, as avatars,
        interact with each other."
        active={active}
        setActive={setActive}
      />
      <Accordionitem
        title="What does gamefi and p2e mean?"
        description="The new metaverse and GameFi experiences allow players to be the real owners of their assets and be an integral part of the game economy, bringing more value to the community while increasing decentralization."
        active={active}
        setActive={setActive}
      />
      <Accordionitem
        title="What is cosmic exodus?"
        description="An immersive strategy GameFi experience, focused on NFTs.
        RPG mode & Tower Defense mode.
        Assemble your favorite heroes, companions, troops and towers to fight the forces of Kairos, the god of time and space."
        active={active}
        setActive={setActive}
      />
      <Accordionitem
        title="Gaming Tokens"
        description="Cosmic Exodus ecosystem tokens were created with the sole purpose to unlock the full extent of the existing content gameplay (i.e. Heroes, Companions), as transactions of value between player to player (e.g. swap resources, items) or as means necessary to progress the game content (e.g. open loot box, upgrade NFTs). They can be obtained either by regular DeFi applications or by playing and reaching certain achievements in the game."
        active={active}
        setActive={setActive}
      />
      <Accordionitem
        title="How can I learn more?"
        description="The best way to know more about Cosmic Exodus ecosystem is by following us on social media or directly participating in our communities. Join us on telegram or discord to feel that Cosmic energy!"
        active={active}
        setActive={setActive}
      />
    </div>
  );
}

export default FAQPage;
