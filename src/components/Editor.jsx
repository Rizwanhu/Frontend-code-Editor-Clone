import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import PropTypes from 'prop-types';
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'
import HTMLicon from './HTMLicon'
import CSSicon from './CSSicon'
import Javascripticon from './Javascripticon'





const Editor = ({ displayName, language, value, onChange }) => {

  function handleChange(editor, data, value) {
    onChange(value);
  }

  const [open, setopen] = useState(true);


  const renderIcon = () => {
    switch (displayName) {
      case 'HTML':
        return <HTMLicon />;
      case 'CSS':
        return <CSSicon />;
      case 'Javascript':
        return <Javascripticon />;
      default:
        return null;
    }
  };





  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="flex justify-between bg-[#1d1d28] text-white p-2 pl-4 rounded-t-lg">
        <div className="flex justify-center items-center">

        {renderIcon()}
        {displayName}
        </div>
        <button
          type="button"
          className="expand-collapse-btn ml-5"
          onClick={() => setopen(prevOpen => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>

    <div>

    <ControlledEditor
      onBeforeChange={(editor, data, value) => handleChange(editor, data, value)}
      value={value}
      className="code-mirror-wrapper"
      options={{
        lineWrapping: true,
        lint: true,
        mode: language,
        theme: 'material',
        lineNumbers: true,
        }}
        />
        </div>


    </div>
  );
};

Editor.propTypes = {
  displayName: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Editor;
