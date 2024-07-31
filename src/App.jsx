import React , {useState , useEffect} from 'react'
import Editor from './components/Editor'
import Storage from './components/Storage'


const App = () => {

  // check here
  const [isStorageEnabled, setIsStorageEnabled] = useState(true);
  const [html, sethtml] = isStorageEnabled ? Storage("html", '') : useState('');
  const [js, setjs] = isStorageEnabled ? Storage("js", '') : useState('');
  const [css, setcss] = isStorageEnabled ? Storage("css", '') : useState('');
  const [Doc, setDoc] = useState('');


  useEffect(() => {
    const timeout = setTimeout(() =>{
      setDoc(`
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `)
    
    }, 750)
  
    return () => clearTimeout(timeout)
    }, [html,css,js])
  




    const toggleStorage = () => {
      setIsStorageEnabled(!isStorageEnabled);
    };




  return (
    <div>
      <div className="bg-[#1d1e22] pt-1 pb-1 flex text-white ">
      <svg className="h-10 pl-5" viewBox="0 0 100 100" aria-hidden="true"><path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8 19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path></svg>
      <div className="ml-5">
      <div className=" flex inline-block ">
      <h1>Web Code Editor</h1>
      <svg viewBox="0 0 100 100" className="h-5 w-5 ml-3 border border-slate-500 ItemTitle_iconEdit-rW2EJ"><path d="M24.56 92.536 0 100l7.453-24.583c6.356-.244 17.322 10.792 17.107 17.119zM96.617 32.082l-.475.471L67.383 3.766l.472-.472c12.927-12.94 42.016 15.517 28.762 28.788zM61.64 9.516l28.758 28.785-46.303 46.345c-1.222 1.221-2.234.884-2.234.884l2.314-15.356-14.454.074.072-14.468-15.342 2.312s-.34-1.011.883-2.234L61.64 9.516z"></path></svg>
      </div>
      <p className="text-slate-400">Captain Anonymous</p>
      </div>
      </div>
    <div className="pane top-pane">

    {/* <button onClick={toggleStorage}>
        {isStorageEnabled ? "Disable Local Storage" : "Enable Local Storage"}
      </button> */}

      <Editor language="xml" displayName="HTML" value={html}  onChange={(newCode) => sethtml(newCode)} />

      <Editor  language="css" displayName="CSS" value={css} onChange={setcss} />

      <Editor  language="javascript" displayName="Javascript" value={js} onChange={setjs} />

    </div>

    <div className="pane">
    <iframe srcDoc={Doc} title="output" frameBorder="0" width="100%" height="100%" src="" sandbox="allow-scripts" />
    </div>

    </div>
  )
}

export default App
