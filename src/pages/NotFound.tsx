import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { localBusinessJsonLd } from "../seo";

export default function NotFound() {
  return (
    <div className="section">
      <div className="container">
        <Seo title="Page Not Found" path="/404" description="Page not found." jsonLd={[localBusinessJsonLd()]} />
        <div className="card" style={{ padding: 22 }}>
          <h1>404</h1>
          <p style={{ marginTop: 10 }}>This page doesn’t exist. Like free parking in Cambridge.</p>
          <div style={{ height: 14 }} />
          <Link className="btn primary" to="/">Back home</Link>
        </div>
      </div>
    </div>
  );
}
