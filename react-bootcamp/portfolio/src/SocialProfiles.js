import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component {
    render () {
        console.log('this.props', this.props);

        const { link, image } = this.props.social_profile;

        return(
            <div style={{display: 'inline-block', margin: 10}}>
                <a href={link}>
                    <img src= {image} alt='social-profile' style={{width:50, height:50}} />
                </a>
            </div>
        )
    }
}

class SocialProfiles extends Component {
    render () {
        return (
            <div>
                <h2>Social Medias</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                            return(
                                <SocialProfile key={SOCIAL_PROFILE.id} 
                                social_profile={SOCIAL_PROFILE} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles
