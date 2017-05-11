import * as React from "react";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => (
  <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l top-0">
    <nav className="f6 fw6 ttu tracked">
      <Link className="link dim white dib mr3" to="/" title="Home">Home</Link>
      <Link className="link dim white dib" to="/about" title="Contact">Contact</Link>
    </nav>
  </header>
);
