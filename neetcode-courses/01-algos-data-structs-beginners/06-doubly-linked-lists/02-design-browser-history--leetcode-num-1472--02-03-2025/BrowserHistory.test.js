import { describe, it, expect } from 'vitest'
import { BrowserHistory } from './BrowserHistory.js'

describe('constructor', () => {
  it('initializes object with homepage', () => {
    const browserHistory = new BrowserHistory('leetcode.com')
    expect(browserHistory.current.url).toBe('leetcode.com')
  })
})

describe('visit', () => {
  it('creates a new head with url', () => {
    const browserHistory = new BrowserHistory('leetcode.com')
    expect(browserHistory.visit('google.com')).toBe('google.com')
  })
})

describe('back', () => {
  it('works correctly', () => {
    const browserHistory = new BrowserHistory('leetcode.com')
    browserHistory.visit('google.com')
    browserHistory.visit('facebook.com')
    browserHistory.visit('youtube.com')
    expect(browserHistory.back(1)).toBe('facebook.com')
    expect(browserHistory.back(1)).toBe('google.com')
    browserHistory.forward(1)
    browserHistory.visit('linkedin.com')
    browserHistory.forward(2)
    expect(browserHistory.back(2)).toBe('google.com')
    expect(browserHistory.back(7)).toBe('leetcode.com')
  })
})

describe('forward', () => {
  it('works correctly', () => {
    const browserHistory = new BrowserHistory('leetcode.com')
    browserHistory.visit('google.com')
    browserHistory.visit('facebook.com')
    browserHistory.visit('youtube.com')
    browserHistory.back(1)
    browserHistory.back(1)
    expect(browserHistory.forward(1)).toBe('facebook.com')
    browserHistory.visit('linkedin.com')
    expect(browserHistory.forward(2)).toBe('linkedin.com')
  })
})