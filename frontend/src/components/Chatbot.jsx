import { useState, useRef, useEffect } from "react";
import "../styles/chatbot.css";

const knowledgeBase = [
  {
    keywords: ["admission", "apply", "enroll", "join", "intake", "form"],
    answer:
      "Admissions for 2026 are open! You can apply online or visit our campus in Kathmandu. Required documents: SEE/+2 transcripts, citizenship copy, and 2 passport photos. Deadline: August 30, 2026.",
  },
  {
    keywords: ["fee", "cost", "tuition", "price", "expensive", "scholarship"],
    answer:
      "Annual tuition ranges from NPR 45,000 to NPR 85,000 depending on the program (BCA, B.Sc. CSIT, BBA). Merit-based scholarships up to 100% are available for top-performing students.",
  },
  {
    keywords: ["course", "program", "bca", "csit", "bba", "bsc", "study"],
    answer:
      "We offer BCA, B.Sc. CSIT, BBA, and B.Com programs. All are affiliated with Tribhuvan University. Visit the Courses page for detailed syllabi and credit hours.",
  },
  {
    keywords: ["location", "address", "where", "kathmandu", "reach", "map"],
    answer:
      "Swastik College is located in Kathmandu, Nepal. You can reach us via public transport or call +977-XXXXXXXXXX for directions.",
  },
  {
    keywords: ["contact", "phone", "email", "call", "number"],
    answer:
      "Call us at +977-XXXXXXXXXX or email info@swastikcollege.edu.np. Office hours: Sunday–Friday, 9:00 AM – 5:00 PM.",
  },
  {
    keywords: ["placement", "job", "career", "company", "hire", "package"],
    answer:
      "Our placement cell partners with TCS, Infosys, Wipro, and 50+ IT companies. Average package: NPR 6.5 LPA. We also provide internship opportunities from the 6th semester.",
  },
  {
    keywords: ["hostel", "accommodation", "stay", "room", "food", "mess"],
    answer:
      "We offer separate hostels for boys and girls with WiFi, 24/7 security, hot water, and a hygienic mess facility. Hostel fees are NPR 8,000–12,000 per month depending on room type.",
  },
  {
    keywords: ["exam", "semester", "internal", "marks", "pass", "back"],
    answer:
      "We conduct regular internal assessments, lab exams, and pre-boards. The passing criteria follow Tribhuvan University guidelines — 40% minimum in theory and practical separately.",
  },
  {
    keywords: ["facility", "lab", "library", "wifi", "computer", "internet"],
    answer:
      "Our campus features air-conditioned computer labs with 120+ workstations, a digital library with 50,000+ e-books, high-speed fiber internet, and a dedicated project lab.",
  },
  {
    keywords: ["hello", "hi", "hey", "namaste"],
    answer:
      "Namaste! Welcome to Swastik College. I can help you with admissions, courses, fees, hostel, placements, and campus location. What would you like to know?",
  },
];

function getBotResponse(input) {
  const lower = input.toLowerCase();
  const match = knowledgeBase.find((k) =>
    k.keywords.some((kw) => lower.includes(kw)),
  );
  return (
    match?.answer ||
    "I'm not sure about that. Please contact our office at +977-XXXXXXXXXX or email info@swastikcollege.edu.np for detailed assistance."
  );
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Namaste! Welcome to Swastik College. Ask me about admissions, courses, fees, or campus location.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);

  // Scroll detection — show button only after scrolling past hero
  useEffect(() => {
    const toggleVisibility = () => {
      // Change 100 to however many pixels you want (100 = navbar height)
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check immediately on mount
    toggleVisibility();

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages((prev) => [...prev, { from: "user", text: userText }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: getBotResponse(userText) },
      ]);
    }, 700);
  };

  const sendQuickReply = (text) => {
    setMessages((prev) => [...prev, { from: "user", text }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: getBotResponse(text) },
      ]);
    }, 700);
  };

  const quickReplies = [
    "Admission process",
    "Course fees",
    "Hostel facility",
    "College location",
  ];

  return (
    <>
      {/* Floating Button — CSS handles show/hide animation */}
      {!isOpen && (
        <button
          className={`swastik-chat-fab ${isVisible ? "visible" : ""}`}
          onClick={() => setIsOpen(true)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          Ask Swastik
        </button>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="swastik-chat-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Full VH Slide Panel */}
      <div className={`swastik-chat-panel ${isOpen ? "open" : ""}`}>
        {/* Header */}
        <div className="swastik-chat-header">
          <div>
            <h3>Swastik Assistant</h3>
            <p>We typically reply in seconds</p>
          </div>
          <button
            className="swastik-chat-close"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div className="swastik-chat-body">
          {messages.map((m, i) => (
            <div key={i} className={`swastik-chat-msg ${m.from}`}>
              {m.text}
            </div>
          ))}

          {typing && (
            <div className="swastik-chat-typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick Replies */}
        <div className="swastik-chat-quick">
          {quickReplies.map((qr) => (
            <button key={qr} onClick={() => sendQuickReply(qr)}>
              {qr}
            </button>
          ))}
        </div>

        {/* Input */}
        <form className="swastik-chat-inputbar" onSubmit={sendMessage}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about admissions..."
          />
          <button type="submit" disabled={!input.trim()}>
            ➤
          </button>
        </form>
      </div>
    </>
  );
}
