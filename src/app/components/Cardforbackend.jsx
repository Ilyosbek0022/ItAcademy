import React from 'react'

const CardB = () => {
  return (
    <div className="flexator flex ">
  <div className="code-window windcode">
        <div className="window-bar">
          <div className="win-dot r"></div>
          <div className="win-dot y"></div>
          <div className="win-dot g"></div>
          <span className="win-title">IT ACADEMY</span>
        </div>

        <div className="code-body w-50">
          <span className="c-keyword">Kurslar</span>{" "}
          <span className="c-var">Narxi</span>{" "}
          <span className="c-punct">=</span>{" "}
          <span className="c-punct">{"{"}</span>
          <br />
          &nbsp;&nbsp;<span className="c-fn">Back-End</span>
          <span className="c-punct">:</span>{" "}
          <span className="c-string">"400$"</span>
          <span className="c-punct">,</span>
          <br />
          &nbsp;&nbsp;<span className="c-fn">Davomiyligi</span>
          <span className="c-punct">:</span>{" "}
          <span className="c-punct">[</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="c-string">"5oy"</span>
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
      </div>
  )
}

export default CardB