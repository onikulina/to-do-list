import React from "react";
import FilterLink from "../containers/FilterLink";

const Footer = () => (
    <p className="footer">
        <FilterLink filter="SHOW_ALL" text="all" />
        <FilterLink filter="SHOW_ACTIVE" text="active" />
        <FilterLink filter="SHOW_COMPLETED" text="completed" />
    </p>
);

export default Footer;
