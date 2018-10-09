import React from 'react';
import {
  expect
} from 'chai';
import {
  shallow,
  configure
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({
  adapter: new Adapter()
});
const axios = require('axios');
import App from './App';

jest.mock('axios', () => {
  let imagesList = {
    data: {
      "total": 42,
      "totalHits": 42,
      "hits": [{
        "id": 125,
        "pageURL": "https://pixabay.com/videos/id-125/",
        "type": "film",
        "tags": "flowers, yellow, blossom",
        "duration": 12,
        "picture_id": "529927645",
        "videos": {
          "large": {
            "url": "https://player.vimeo.com/external/135736646.hd.mp4?s=ed02d71c92dd0df7d1110045e6eb65a6&profile_id=119",
            "width": 1920,
            "height": 1080,
            "size": 6615235
          },
          "medium": {
            "url": "https://player.vimeo.com/external/135736646.hd.mp4?s=ed02d71c92dd0df7d1110045e6eb65a6&profile_id=174",
            "width": 1280,
            "height": 720,
            "size": 3562083
          },
          "small": {
            "url": "https://player.vimeo.com/external/135736646.sd.mp4?s=db2924c48ef91f17fc05da74603d5f89&profile_id=165",
            "width": 950,
            "height": 540,
            "size": 2030736
          },
          "tiny": {
            "url": "https://player.vimeo.com/external/135736646.sd.mp4?s=db2924c48ef91f17fc05da74603d5f89&profile_id=164",
            "width": 640,
            "height": 360,
            "size": 1030736
          }
        },
        "views": 169,
        "downloads": 66,
        "favorites": 7,
        "likes": 3,
        "comments": 2,
        "user_id": 1281706,
        "user": "CoverrFreeFootage",
        "userImageURL": "https://cdn.pixabay.com/user/2015/10/16/09-28-45-303_250x250.png"
      }]
    }
  };
  

  return {
    get: jest.fn(() => Promise.resolve(imagesList)),
  };
});

describe('<App />', () => {
  let wrapper;
 
  it('render <App /> component', () => {
    wrapper = shallow( < App /> );
    expect(wrapper.find('.App')).to.have.lengthOf(1);
  });

  describe('fetch imageList on #ComponentDidMount', () => {
    it('sets the state componentDidMount', async () => {
      const wrapper = shallow( < App /> );
      wrapper.instance().componentDidMount();
      // expect(axios.get).toHaveBeenCalledTimes(1);
      // expect(wrapper.state()).toHaveProperty('images', [{
      //   total: '42',
      //   totalHits: '42'
      // }]);
      // done();
    });
  });
});