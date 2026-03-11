import React from "react";
import "./ui/right.css"
const DeveloperCard = () => {
  return (
    <div className="hero-visual">
    

      <div className="code-window nonwidther">
        <div className="window-bar">
          <div className="win-dot r"></div>
          <div className="win-dot y"></div>
          <div className="win-dot g"></div>
          <span className="win-title">developer.js</span>
        </div>

        <div className="code-body">
          <span className="c-keyword">const</span>{" "}
          <span className="c-var">developer</span>{" "}
          <span className="c-punct">=</span>{" "}
          <span className="c-punct">{"{"}</span>
          <br />
          &nbsp;&nbsp;<span className="c-fn">name</span>
          <span className="c-punct">:</span>{" "}
          <span className="c-string">"You"</span>
          <span className="c-punct">,</span>
          <br />
          &nbsp;&nbsp;<span className="c-fn">skills</span>
          <span className="c-punct">:</span>{" "}
          <span className="c-punct">[</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="c-string">"React"</span>
          <span className="c-punct">,</span>{" "}
          <span className="c-string">"Node.js"</span>
          <span className="c-punct">,</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="c-string">"Flutter"</span>
          <span className="c-punct">,</span>{" "}
          <span className="c-string">"SQL"</span>
          <br />
          &nbsp;&nbsp;<span className="c-punct">]</span>
          <span className="c-punct">,</span>
          <br />
          &nbsp;&nbsp;<span className="c-fn">ready</span>
          <span className="c-punct">:</span>{" "}
          <span className="c-keyword">true</span>
          <br />
          <span className="c-punct">{"};"}</span>
          <br />
          <br />
          <span className="c-comment"> Start your journey today</span>
          <br />
          <span className="c-fn">ITAcademy</span>
          <span className="c-punct">.</span>
          <span className="c-fn">enroll</span>
          <span className="c-punct">(</span>
          <span className="c-var">developer</span>
          <span className="c-punct">);</span>
          <span className="cursor-blink"></span>
        </div>
      </div>

      <div className="floating-badge badge-bot">
        <span className="badge-icon">🚀</span>
        <div>
          <div style={{ fontWeight: 700, fontSize: "14px" }}>Hired! 🎉</div>
          <div style={{ fontSize: "12px", color: "var(--muted)" }}>
            Average 3 months after
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;