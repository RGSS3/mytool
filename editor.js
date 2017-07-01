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
     
     let d = a(c("textarea"), {height: "500"});
     let e = a(c('button'), {"innerText": "Run", onclick(){ eval(window.editor.getValue()); }});
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
     `}));
     q.appendChild(d);
     q.appendChild(e);
     r(['codemirror/lib/codemirror', 'codemirror/mode/javascript/javascript'], CM => 
        editor = CM.fromTextArea(d, {mode: 'javascript', lineNumbers: true})
     );
  }}));
  
      
})();
