"use client";

import { motion } from "framer-motion";

export default function SouthJerseyHomestead() {
  return (
    <div style={{ fontFamily: "serif", background: "#f5f1e8", color: "#2b1d12" }}>
      
      {/* HERO */}
      <section style={{
        padding: "120px 20px",
        background: "linear-gradient(rgba(43,29,18,.8), rgba(43,29,18,.8)), url(https://images.unsplash.com/photo-1523741543316-beb7fc7023d8)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fdfaf5",
        textAlign: "center"
      }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 style={{ fontSize: "3.5rem", marginBottom: "10px" }}>
            South Jersey Homestead
          </h1>
          <p style={{ fontStyle: "italic", marginBottom: "20px" }}>
            Famiglia • Tradizione • Terra
          </p>

          <ul style={{ listStyle: "none", padding: 0, maxWidth: "600px", margin: "0 auto 30px" }}>
            <li>• Old-world Italian family-style cured meats</li>
            <li>• Naturally fermented sourdough baked weekly</li>
            <li>• Pasture-raised meat, milk, and eggs</li>
            <li>• Small-batch canning from our harvest</li>
          </ul>

          <a href="#order">
            <button style={buttonPrimary}>
              Enter the Homestead
            </button>
          </a>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section style={section}>
        <h2 style={heading}>From Our Land to Your Table</h2>
        <p style={paragraph}>
          We are a small family homestead rooted in Italian tradition and American self-reliance.
          We bake, raise, preserve, and cure food the way our grandparents did — slowly, honestly,
          and without shortcuts.
        </p>
      </section>

      {/* PRODUCTS */}
      <section style={{ ...section, background: "#ede6da" }}>
        <h2 style={heading}>What We Produce</h2>
        <div style={grid}>
          <Card title="Sourdough Baked Goods" text="Naturally leavened bread, focaccia, rolls" />
          <Card title="Eggs & Milk" text="Pasture-raised, farm fresh" />
          <Card title="Vegetables" text="Seasonal, chemical-free produce" />
          <Card title="Fresh Meats" text="Humanely raised beef, pork & poultry" />
          <Card title="Italian Cured Meats" text="Coppa, pancetta, soppressata, salumi" />
          <Card title="Canned Goods" text="Broths, sauces, pickles & preserves" />
        </div>
      </section>

      {/* ORDERING */}
      <section id="order" style={section}>
        <h2 style={heading}>Weekly Ordering & Payments</h2>
        <p style={paragraph}>
          Orders open weekly and are produced in limited quantities.
          All orders are prepaid to reserve your items.
        </p>

        <ol style={{ maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem" }}>
          <li>1. Join the private email & SMS list</li>
          <li>2. Receive weekly availability every Sunday</li>
          <li>3. Order & pay online (card or mobile pay)</li>
          <li>4. Farm pickup or limited local delivery</li>
        </ol>

        <p style={{ marginTop: "20px", fontStyle: "italic" }}>
          Payments processed securely via Stripe or Square.
        </p>

        <button style={{ ...buttonPrimary, marginTop: "30px" }}>
          Join the Family List
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#2b1d12",
        color: "#fdfaf5",
        padding: "40px 20px",
        textAlign: "center"
      }}>
        <h3>South Jersey Homestead</h3>
        <p style={{ fontStyle: "italic" }}>
          Traditional Italian family food from a South Jersey farm
        </p>
        <p style={{ fontSize: "0.9rem", marginTop: "10px" }}>
          Produced in accordance with New Jersey farm & cottage food regulations
        </p>
      </footer>

    </div>
  );
}

/* COMPONENTS */
function Card({ title, text }) {
  return (
    <div style={{
      background: "#fdfaf5",
      padding: "25px",
      borderRadius: "16px",
      boxShadow: "0 5px 10px rgba(0,0,0,.08)"
    }}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

/* STYLES */
const section = {
  padding: "80px 20px",
  textAlign: "center",
  maxWidth: "1100px",
  margin: "0 auto"
};

const heading = {
  fontSize: "2.5rem",
  marginBottom: "20px"
};

const paragraph = {
  fontSize: "1.2rem",
  maxWidth: "700px",
  margin: "0 auto"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "25px",
  marginTop: "40px"
};

const buttonPrimary = {
  background: "#7a2e1d",
  color: "#fff",
  padding: "14px 32px",
  borderRadius: "30px",
  border: "none",
  fontSize: "1.1rem",
  cursor: "pointer"
};
