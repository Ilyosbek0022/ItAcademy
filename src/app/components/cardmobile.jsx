import React from 'react'

const CardM = () => {
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
          &nbsp;&nbsp;<span className="c-fn">Mobile development</span>
          <span className="c-punct">:</span>{" "}
          <span className="c-string">"500$"</span>
          <span className="c-punct">,</span>
          <br />
          &nbsp;&nbsp;<span className="c-fn">Davomiyligi</span>
          <span className="c-punct">:</span>{" "}
          <span className="c-punct">[</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="c-string">"6oy"</span>
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

export default CardM