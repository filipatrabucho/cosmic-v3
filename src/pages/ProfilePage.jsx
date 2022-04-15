import React from "react";
import Profile from "../component/profile/profile";

function ProfilePage() {
  return (
    <div>
      <h2 className="profile__title">Profile Pictures</h2>
      <Profile title={"Heroes"} />
      <Profile title={"Avatars"} />
      <Profile title={"Npc"} />
    </div>
  );
}

export default ProfilePage;
