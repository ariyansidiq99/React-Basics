import React from 'react'

const PlanCard = ({plan, isAnnual}) => {
    const price = isAnnual ? plan.annual : plan.monthly
    const isFeatured = plan.variant === "featured";
  return (
    <article className={`plan ${isFeatured ? "plan--featured" : ""}`}>
        {plan.badge && <span className='plan badge'>{plan.badge}</span>}
        <h3 className="plan name">{plan.name}</h3>
        <div className="plan price">
            {price === null ? (
                <span>Free</span>
            ) : (
                <>
                <span className="plan price-amount">${price}</span>
                <span className="plan price-period">/mo</span>
                {isAnnual && <span className='plan price-save'>Save 20%</span>}
                </>
            )} 
        </div>
        <p className="plan desc">{plan.description}</p>
        <ul className='plan features'>
            {plan.features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
        <button className={`btn btn--${isFeatured ? "white" : "outline"} plan_cta`}>{plan.cta}</button>
    </article>
  )
}

export default PlanCard