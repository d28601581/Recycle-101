import React from 'react';
import BeforeLogin from '../../Navbar/BeforeLogin';
import './styles/Welcome.css';
const Welcome = () => {

    return <div>
        <BeforeLogin />    
        <div className='main'>
            <h1 id='main-text'>Go Green!</h1>
            <h1 id='slogan'>"Let's Save Our Beautiful Planet Together"</h1>
            <h1 id='slogan'>Sign Up to use our app today and be proud to help save the planet.</h1>
        </div>
        <div className='why'>
            <h1 id='why-q'>Why Should We Recycle?</h1>
            <p id='why'>
            Recycling reduces the need for extracting (mining, quarrying and logging), refining and processing raw materials all of which create substantial air and water pollution.

As recycling saves energy it also reduces greenhouse gas emissions, which helps to tackle climate change. Current UK recycling is estimated to save more than 18 million tonnes of CO2 a year – the equivalent to taking 5 million cars off the road.
            </p>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
        </div>
        {/* <div className="textBoxOne">
            Bad stat of regular trash. How recycling is so hard. We made it easier for you with this...... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget mauris a erat consequat sodales. Ut vitae aliquet sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. In ac justo tincidunt, ullamcorper purus eu, scelerisque leo. Morbi consectetur convallis nisl, vel faucibus tellus dictum sit amet. Nam dapibus, sapien vel sodales efficitur, nisi leo convallis tellus, ac semper elit magna ut risus. Proin in tellus lacinia, bibendum purus in, tristique sapien. Donec dapibus, quam a eleifend condimentum, turpis magna rutrum ex, nec vulputate neque mi in quam. Vestibulum molestie nisl vel enim auctor ornare.
        </div>
        <img src="https://scx1.b-cdn.net/csz/news/800a/2014/menwalkpasta.jpg" className="imgOne" alt="Trash"/>
        <div className="textBoxTwo">
            What the website is. How it will help you. Features. Functions. Sign up now or log in.  Blah Blah Blah.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget mauris a erat consequat sodales. Ut vitae aliquet sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. In ac justo tincidunt, ullamcorper purus eu, scelerisque leo. Morbi consectetur convallis nisl, vel faucibus tellus dictum sit amet. Nam dapibus, sapien vel sodales efficitur, nisi leo convallis tellus, ac semper elit magna ut risus. Proin in tellus lacinia, bibendum purus in, tristique sapien. Donec dapibus, quam a eleifend condimentum, turpis magna rutrum ex, nec vulputate neque mi in quam. Vestibulum molestie nisl vel enim auctor ornare.
        </div>
        <img src="https://23pxcp3u31lgiybw92v8rma1-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Recyclers-600x400.jpg" className="imgTwo" alt="Recycle Man"></img> */}
    </div>

    
}

export default Welcome;