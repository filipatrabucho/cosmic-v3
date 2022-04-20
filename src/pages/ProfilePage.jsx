import React from "react";
import Profile from "../component/profile/profile";
import Routemap from "../component/routemap/routemap";

function ProfilePage() {
  const routes = [
    {
      name: "Cosmic Graphicspack",
      href: "/cosmicgraphicspack",
    },
    {
      name: "Profile Pictures",
      href: "/profiles",
    },
  ];
  return (
    <div>
      <Routemap routes={routes} />
      <h2 className="profile__title">Profile Pictures</h2>
      <Profile title={"Heroes"} />
      <Profile title={"Avatars"} />
      <Profile title={"Npc"} />
    </div>
  );
}

export default ProfilePage;
