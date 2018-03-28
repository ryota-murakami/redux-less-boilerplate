import TestUtils from 'react-dom/test-utils'
import { App } from './App'

describe('App', () => {
  it('should render App without Crash or Exception', () => {
    expect(() => {
      TestUtils.renderIntoDocument(App)
    }).not.toThrow()
  })
})