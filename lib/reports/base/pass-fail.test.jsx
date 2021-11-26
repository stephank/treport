const React = require('react')
const t = require('tap')
const importJSX = require('@isaacs/import-jsx')
const PassFail = importJSX('./pass-fail.js')
const {render} = require('ink-testing-library')

const r = render(<PassFail ok={true} name="this is fine" />)
t.matchSnapshot(r.lastFrame(), 'with a name')
r.rerender(<PassFail />)
t.matchSnapshot(r.lastFrame(), 'no name')
r.unmount()
