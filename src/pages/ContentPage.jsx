import React from "react";
import Content from "../component/content/content";

function ContentPage() {
  return (
    <div>
      <h2 className="content__title">Content</h2>
      <Content title={"Artwork"} />
      <Content title={"Banners"} />
      <Content title={"Wallpapers"} />
    </div>
  );
}

export default ContentPage;
