import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [topic, setTopic] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!topic.trim()) return;
    router.push(`/results?topic=${encodeURIComponent(topic)}`);
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Cloutline AI</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter your topic..."
          style={{
            padding: "0.5rem",
            width: "70%",
            marginRight: "1rem",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Generate
        </button>
      </form>
    </div>
  );
}
