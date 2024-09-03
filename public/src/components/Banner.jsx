import React from 'react'

function Banner() {
    return (
        <header className='banner'>
            <div className='banner_contents'>
              <h1 className='banner_title'>
                Movie Title
              </h1>
              <div className='banner_buttons'>
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
              </div>
              <div className='banner_description'>
                <h4>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam iusto laudantium, iure dolor eveniet exercitationem commodi aut eum numquam animi quos nisi quasi officia dolores facilis, voluptates temporibus sit minus.
                </h4>
              </div>
            </div>
        </header>
    )
}

export default Banner
