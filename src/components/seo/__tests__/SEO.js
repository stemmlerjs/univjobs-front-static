import { log } from "util";

import React from "react"
import renderer from 'react-test-renderer'
import { shallow, mount, render } from 'enzyme';
import SEO from '../SEO'
import { createRegularPage } from '../regular/RegularPage'
import PageType from '../PageType'

let regularPage;
let tree;
let componentInstance;


describe("SEO Component", () => {
  describe('Regular Page', () => {

    it("Renders using Enzyme", () => {
      regularPage = createRegularPage(
        'Univjobs | Simplifying Hiring Students', 
        "Hello friends"
      );
      const wrapper = shallow(
      <SEO 
        requiredProps={regularPage.getRequiredProps()}
        type={PageType.REGULAR}
        pageProps={regularPage.getProps()}
      />);

      console.log(wrapper.find('title').text())
    })


    it("Renders without error", () => {
      regularPage = createRegularPage(
        'Univjobs | Simplifying Hiring Students', 
        "Hello friends"
      );

      tree = renderer
        .create(
          <SEO 
            requiredProps={regularPage.getRequiredProps()}
            type={PageType.REGULAR}
            pageProps={regularPage.getProps()}
          />
        )
        .toJSON()
      expect(tree).toMatchSnapshot();
    })

    it('Has the title in the meta tags', () => {
      regularPage = createRegularPage(
        'Univjobs | Simplifying Hiring Students', 
        "Hello friends"
      );

      tree = renderer.create(
        <SEO 
          requiredProps={regularPage.getRequiredProps()}
          type={PageType.REGULAR}
          pageProps={regularPage.getProps()}
        />
      )

      // console.log(tree.root)

      // componentInstance = tree.root;
      // expect(componentInstance.findByType('title')).toEqual('hello')
    })
  })
})
