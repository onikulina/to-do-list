import React from "react";
import FilterLink from "../containers/FilterLink";

const Filter = ({width}) => (
    <div className="filter">
        <FilterLink filter="SHOW_ALL" text="all" width={width} />
        <FilterLink filter="SHOW_ACTIVE" text="active" width={width} />
        <FilterLink filter="SHOW_COMPLETED" text="completed" width={width} />
    </div>
);

export default Filter;
