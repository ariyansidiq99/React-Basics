import React from 'react'

const FeatureCard = ({icon, title, description, isNew= false}) => {
  return (
    <article className="feature-card">
        <div className="feature-card_icon">
            {icon}
        </div>
        <div className="feature-card_body">
            <div className="feature-card_header">
                <h3 className="feature-card_title">
                    {title}
                </h3>
                {isNew && <span className="badge badge--new">New</span> }
            </div>
            <p className="feature-card_desc">{description}</p>
        </div>
    </article>
  )
}

export default FeatureCard