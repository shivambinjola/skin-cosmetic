import React from "react";
import TemplatesCard from "./templatescard";

const Templates = () => {
  return (
    <div className="lg:px-7 grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md;gap-0 sm:gap-2 sm:grid-cols-3 xs:grid-cols-3 gf:grid-cols-2 ">
      <TemplatesCard /> <TemplatesCard /> <TemplatesCard /> <TemplatesCard />{" "}
      <TemplatesCard />
      <TemplatesCard />
      <TemplatesCard />
      <TemplatesCard />
    </div>
  );
};

export default Templates;
