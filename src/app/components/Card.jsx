import React from 'react'

const Card = () => {
  return (
  <div className="code-window windcode">
        <div className="window-bar">
          <div className="win-dot r"></div>
          <div className="win-dot y"></div>
          <div className="win-dot g"></div>
          <span className="win-title">IT ACADEMY</span>
        </div>

        <div className="code-body ">
          <span className="c-keyword">Kurslar</span>{" "}
          <span className="c-var">Narxi</span>{" "}
          <span className="c-punct">=</span>{" "}
          <span className="c-punct">{"{"}</span>
          <br />
          &nbsp;&nbsp;<span className="c-fn">Frontend</span>
          <span className="c-punct">:</span>{" "}
          <span className="c-string">"300$"</span>
          <span className="c-punct">,</span>
          <br />
          &nbsp;&nbsp;<span className="c-fn">Davomiyligi</span>
          <span className="c-punct">:</span>{" "}
          <span className="c-punct">[</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="c-string">"4oy"</span>
          <span className="c-punct">,</span>{" "}
      
          <br />
          <span className="c-punct">{"};"}</span>
          <br />
          <br />
          <span className="c-comment"> Start your journey today</span>
          <br />
          <span className="c-fn">ITAcademy</span>
          <span className="c-punct">.</span>
          <span className="c-fn">tezda</span>
          <span className="c-punct">(</span>
          <span className="c-var">developer</span>
          <span className="c-punct">);</span>
          
        </div>
      </div>
  )
}

export default Card