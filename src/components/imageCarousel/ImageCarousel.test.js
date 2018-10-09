import React from 'react';
import {expect} from 'chai';
import {
    shallow,
    configure
} from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import ImageCarousel from './ImageCarousel';
import { wrap } from 'module';
import ImageBox from './ImageBox/ImageBox';
import PreNextButton from './Button/PreNextButton';

configure({
    adapter: new Adapter()
});

let images = {
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
        },
        {
            "id": 126,
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
        }
    ]
};

describe('<ImageCarousel />', () => {
    it('passes imageList to <ImageCarousel /> component', () => {
        const wrapper = shallow( <ImageCarousel images = {images.hits} /> );
        expect(wrapper).to.have.lengthOf(1);
    });
});

describe('<ImageBox />', () => {
    const wrapper = shallow( < ImageCarousel images = {
                images.hits
            }
            /> );
    it('render #ImageBox to display Sliders', () => {
        expect(wrapper.find('.carousel-img-box')).to.have.lengthOf(1);
    });

    it('check total images of slides', () => {
        expect(wrapper.find(ImageBox)).to.have.lengthOf(2);
    });
});

describe('<PreNextButton />', () => {
    it('render #PreNextButton to display buttons to slide', () => {
        const wrapper = shallow( < ImageCarousel images = {
                images.hits
            }
            /> );
            expect(wrapper.find(PreNextButton)).to.have.lengthOf(1);
        });
});
