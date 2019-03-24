
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount, render } from 'enzyme';
import { createBlogPage } from '../blog/BlogPage'

let page;

describe('SEO => Blog Page', () => {
  it('Should be able to create a BlogPage', () => {
    page = createBlogPage('How to Get Hired', 'Use this post to get hired', 'https://google.com', 'Khalil Stemmler', new Date());
    expect(page).toBeTruthy()
  })

  it("Should fail if we don't pass in the proper props", () => {
    let errorThrown = false;
    try {
      page = createBlogPage('', '', 'https://google.com', 'Khalil Stemmler', new Date());
    } catch (err) {
      errorThrown = true;
    }
    expect(errorThrown).toBe(true);
  })
})

