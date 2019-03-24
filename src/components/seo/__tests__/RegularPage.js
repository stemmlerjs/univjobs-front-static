
import React from 'react'
import renderer from 'react-test-renderer'
import { RegularPage, createRegularPage } from '../regular/RegularPage'

let page;

describe('SEO => Regular Page', () => {
  it('Should be able to create a RegularPage', () => {
    page = createRegularPage('Univjobs - Students', 'Jobs for students, come and get em');
    expect(page).toBeTruthy()

    expect(page.props.title).toEqual('Univjobs - Students')
    expect(page.props.description).toEqual('Jobs for students, come and get em')
  })
})
