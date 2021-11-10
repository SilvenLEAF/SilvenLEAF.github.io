import React from 'react'

interface IProps {
  mainIcon: string,
  title: string,
  link: string,
  linkText: string,
}

function MobileContactCollectionItem({ mainIcon, title, link, linkText }: IProps) {
  return (
    <>
      <li className="collection-item avatar">
          <i className={`${ mainIcon } circle myMainIcon`}></i>
          <span className="title">{ title }</span>
          <p>
            <a target="_blank" href={ link }>
              { linkText }
            </a>
          </p>

          <a target="_blank" href={ link } className="secondary-content">
            <i className="fa fa-eye mySecondaryIcon" ></i>
          </a>
        </li> 
    </>
  )
}

export default MobileContactCollectionItem
