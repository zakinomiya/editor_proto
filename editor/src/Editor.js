import React, { Component } from 'react'
import AceEditor from 'react-ace'
import axios from 'axios'
import 'ace-builds/src-noconflict/mode-jsx'
import 'ace-builds/src-min-noconflict/ext-searchbox'
import 'ace-builds/src-min-noconflict/ext-language_tools'
axios.defaults.baseURL = 'http://localhost:8000'

const languages = ['javascript', 'python']

const themes = [
  'monokai',
  'github',
  'tomorrow',
  'kuroir',
  'twilight',
  'xcode',
  'textmate',
  'solarized_dark',
  'solarized_light',
  'terminal'
]

languages.forEach(lang => {
  require(`ace-builds/src-noconflict/mode-${lang}`)
  require(`ace-builds/src-noconflict/snippets/${lang}`)
})

themes.forEach(theme => require(`ace-builds/src-noconflict/theme-${theme}`))

const defaultValue = `
function hello(name) {
  console.log("hello", name);
}
hello("world")
`

class App extends Component {
  onLoad() {
    console.log("i've loaded")
  }
  onChange(newValue) {
    console.log('change', newValue)
    this.setState({
      value: newValue
    })
  }

  handleClick = async () => {
    const res = await axios
      .post(`api/execute_code/${this.state.mode}`, { code: this.state.value })
      .catch(e => {
        console.log(e)
      })

    if (!res) {
      console.log(res)
      return
    }

    this.setState({
      result: res.data
    })
  }

  onSelectionChange(newValue, event) {
    console.log('select-change', newValue)
    console.log('select-change-event', event)
  }

  onCursorChange(newValue, event) {
    console.log('cursor-change', newValue)
    console.log('cursor-change-event', event)
  }

  onValidate(annotations) {
    console.log('onValidate', annotations)
  }

  setPlaceholder(e) {
    this.setState({
      placeholder: e.target.value
    })
  }
  setTheme(e) {
    this.setState({
      theme: e.target.value
    })
  }
  setMode(e) {
    this.setState({
      mode: e.target.value
    })
  }
  setBoolean(name, value) {
    this.setState({
      [name]: value
    })
  }
  setFontSize(e) {
    this.setState({
      fontSize: parseInt(e.target.value, 10)
    })
  }
  constructor(props) {
    super(props)
    this.state = {
      value: defaultValue,
      placeholder: 'Placeholder Text',
      theme: 'monokai',
      mode: 'javascript',
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false,
      fontSize: 14,
      showGutter: true,
      showPrintMargin: true,
      highlightActiveLine: true,
      enableSnippets: false,
      showLineNumbers: true,
      result: ''
    }
    this.setPlaceholder = this.setPlaceholder.bind(this)
    this.setTheme = this.setTheme.bind(this)
    this.setMode = this.setMode.bind(this)
    this.onChange = this.onChange.bind(this)
    this.setFontSize = this.setFontSize.bind(this)
    this.setBoolean = this.setBoolean.bind(this)
  }
  render() {
    return (
      <div>
        <div>
          <div className="field">
            <label>Mode:</label>
            <p className="control">
              <span className="select">
                <select
                  name="mode"
                  onChange={this.setMode}
                  value={this.state.mode}
                >
                  {languages.map(lang => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </span>
            </p>
          </div>

          <div className="field">
            <label>Theme:</label>
            <p className="control">
              <span className="select">
                <select
                  name="Theme"
                  onChange={this.setTheme}
                  value={this.state.theme}
                >
                  {themes.map(lang => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </span>
            </p>
          </div>

          <div className="field">
            <label>Font Size:</label>
            <p className="control">
              <span className="select">
                <select
                  name="Font Size"
                  onChange={this.setFontSize}
                  value={this.state.fontSize}
                >
                  {[14, 16, 18, 20, 24, 28, 32, 40].map(lang => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </span>
            </p>
          </div>

          <div className="field">
            <label>Placeholder:</label>
            <p className="control">
              <input
                className="input"
                type="text"
                onChange={this.setPlaceholder}
                value={this.state.placeholder}
              />
            </p>
          </div>

          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.enableBasicAutocompletion}
                  onChange={e =>
                    this.setBoolean(
                      'enableBasicAutocompletion',
                      e.target.checked
                    )
                  }
                />
                Enable Basic Autocomplete
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.enableLiveAutocompletion}
                  onChange={e =>
                    this.setBoolean(
                      'enableLiveAutocompletion',
                      e.target.checked
                    )
                  }
                />
                Enable Live Autocomplete
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.showGutter}
                  onChange={e =>
                    this.setBoolean('showGutter', e.target.checked)
                  }
                />
                Show Gutter
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.showPrintMargin}
                  onChange={e =>
                    this.setBoolean('showPrintMargin', e.target.checked)
                  }
                />
                Show Print Margin
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.highlightActiveLine}
                  onChange={e =>
                    this.setBoolean('highlightActiveLine', e.target.checked)
                  }
                />
                Highlight Active Line
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.enableSnippets}
                  onChange={e =>
                    this.setBoolean('enableSnippets', e.target.checked)
                  }
                />
                Enable Snippets
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.showLineNumbers}
                  onChange={e =>
                    this.setBoolean('showLineNumbers', e.target.checked)
                  }
                />
                Show Line Numbers
              </label>
            </p>
          </div>
        </div>
        <div className="examples column">
          <div className="columns">
            <div className="column">
              <h2>Editor</h2>
            </div>
            <div className="column">
              <button onClick={this.handleClick}>console</button>
            </div>
          </div>

          <div className="columns" style={{ width: '100%' }}>
            <div className="column">
              <AceEditor
                placeholder={this.state.placeholder}
                mode={this.state.mode}
                theme={this.state.theme}
                name="blah2"
                onLoad={this.onLoad}
                onChange={this.onChange}
                onSelectionChange={this.onSelectionChange}
                onCursorChange={this.onCursorChange}
                onValidate={this.onValidate}
                value={this.state.value}
                fontSize={this.state.fontSize}
                showPrintMargin={this.state.showPrintMargin}
                showGutter={this.state.showGutter}
                highlightActiveLine={this.state.highlightActiveLine}
                setOptions={{
                  useWorker: false,
                  enableBasicAutocompletion: this.state
                    .enableBasicAutocompletion,
                  enableLiveAutocompletion: this.state.enableLiveAutocompletion,
                  enableSnippets: this.state.enableSnippets,
                  showLineNumbers: this.state.showLineNumbers,
                  tabSize: 2
                }}
              />
            </div>
            <div className="column" style={{ width: '500px' }}>
              <p>Console</p>
              <div
                style={{
                  width: '100%',
                  height: '500px',
                  background: 'whitesmoke',
                  color: 'black',
                  overflowY: 'scroll',
                  padding: 15
                }}
              >
                {this.state.result}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
