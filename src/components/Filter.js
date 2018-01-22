import React from "react";
import FilterLink from "../containers/FilterLink";

const Filter = () => (
    <div className="filter">
        <FilterLink filter="SHOW_ALL" text="all" />
        <FilterLink filter="SHOW_ACTIVE" text="active" />
        <FilterLink filter="SHOW_COMPLETED" text="completed" />
    </div>
);

export default Filter;
