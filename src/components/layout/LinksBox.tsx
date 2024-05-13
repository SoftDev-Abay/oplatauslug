import React, { useState, FC } from "react";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";

import "./LinksBox.css";

interface LinksBoxProps {
  title: string;
  url: string;
  img: string;
  nestedLinks: { title: string; url: string }[];
}

const LinksBox: FC<LinksBoxProps> = ({ title, nestedLinks, img, ...rest }) => {
  const [nestedOpen, setNestedOpen] = useState(false);
  return (
    <div>
      <div
        className="link link_with_icon"
        onClick={() => setNestedOpen((prev) => !prev)}
        {...rest}
      >
        <img src={img} alt="" />
        <p>{title}</p>
        <IoChevronDown />
      </div>
      {nestedOpen && (
        <div className="nested-links-container">
          {nestedLinks.map((link) => (
            <Link to={link.url} className="link">
              <p>{link.title}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LinksBox;
