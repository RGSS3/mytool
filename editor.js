;(function(){
  let b = document.body.appendChild.bind(document.body),
      a = Object.assign.bind(Object),
      c = document.createElement.bind(document);
  b(a(c("link"), {"href": "https://unpkg.com/codemirror/lib/codemirror.css", rel: "stylesheet", type: "text/css"}));
  
  b(a(c("script"), {"src": "https://unpkg.com/requirejs/require.js", onload(){
     let r = window.require;
     r.config({
       paths:{
          'codemirror/lib': 'https://unpkg.com/codemirror/lib',
          'codemirror/mode': 'https://unpkg.com/codemirror/mode',
       }
     });
     
     let d = a(c("textarea"), {style: `
        width: 100%;
        height: 100%;
     `});
     let e = a(c('button'), {style:` 
        position: absolute;
        z-index: 10010;
        right: 0px;
        top: 0px;
        border-radius: 0 0 0 4px;
        border-left: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        border-top: none;
        border-right: none;
        font-weight: bold;
        font-family: 'Segoe UI';
        font-size: 14px;
        color: white;
        padding: 8px 16px;
        background: #1040FF;
      `,"innerText": "Run", onclick(){ eval(window.editor.getValue()); }});
     let q = b(a(c("div"), {style: `
          position: fixed; 
          display: block;
          width: 640px;
          height: 480px;
          top: 100px; 
          left: 100px; 
          z-index: 10000; 
          border-radius: 4px; 
          border: 1px solid #ccc; 
     `, "className": 'editor'}));
     q.appendChild(d);
     q.appendChild(e);
     
     b(a(c("style"), {"innerText": `
         .editor .CodeMirror {
              background: rgba(255, 255, 255, 0.6);
              font-size: 12px;
              font-family: consolas;
              height: 100%;
         }
         
     `}));
     r(['codemirror/lib/codemirror', 'codemirror/mode/javascript/javascript'], CM => 
        editor = CM.fromTextArea(d, {mode: 'javascript', lineNumbers: true})
     );
  }}));
  
      
})();
