import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";
const Sidebar = () => {
  const { closeSidebar, showSidebar } = useGlobalContext();
  return (
    <div className={showSidebar ? `sidebar-wrapper show` : `sidebar-wrapper`}>
      <aside className="sidebar">
        <button className="close-btn" onClick={() => closeSidebar()}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((product, idx) => {
            return (
              <article key={idx}>
                <h4>{product.page}</h4>
                <div className="sidebar-sublinks">
                  {product.links.map((link, idx) => {
                    return (
                      <a href="./product" key={idx}>
                        {link.icon}
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
