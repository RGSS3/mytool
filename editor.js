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
     
     let d = b(a(c("textarea"), {height: "500"}));
     let e = b(a(c('button'), {"innerText": "Run", onclick(){ eval(window.editor.getValue()); }}));
     r(['codemirror/lib/codemirror', 'codemirror/mode/javascript/javascript'], CM => 
        editor = CM.fromTextArea(d, {mode: 'javascript', lineNumbers: true})
     );
  }}));
  
      
})();