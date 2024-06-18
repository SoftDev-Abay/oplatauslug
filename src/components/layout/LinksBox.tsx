import { useState, FC } from "react";
import { IoChevronDown } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

import "./LinksBox.css";

interface LinksBoxProps {
  title: string;
  url: string;
  img: string;
  nestedLinks?: { title: string; url: string }[];
}

const LinksBox: FC<LinksBoxProps> = ({
  title,
  url,
  nestedLinks,
  img,
  ...rest
}) => {
  const [nestedOpen, setNestedOpen] = useState(false);

  const navigate = useNavigate();

  const handleNestedOpen = () => {
    if (nestedLinks) {
      setNestedOpen((prev) => !prev);
    } else {
      navigate(url);
    }
  };

  return (
    <div>
      <div
        className={`link ${nestedLinks ? "link_with_icon" : ""}`}
        onClick={handleNestedOpen}
        {...rest}
      >
        <img src={img} alt="" />
        <p>{title}</p>

        {nestedLinks && <IoChevronDown />}
      </div>
      {nestedLinks && nestedOpen && (
        <div className="nested-links-container">
          {nestedLinks.map((link, index) => (
            <Link to={link.url} className="link" key={url + index}>
              <p>{link.title}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LinksBox;
