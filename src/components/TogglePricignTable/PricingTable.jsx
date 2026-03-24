import React, { useState } from 'react'
import plans from "./plans"
import PlanCard from './PlanCard';

const PricingTable = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className='pricing'>

      {/* billing toggle */}
      <div className="pricing-toggle">
        <span className={!isAnnual ? "active" : ''}>Monthly</span>

        <button
          className={`toggle ${isAnnual ? "toggle--on" : ""}`}
          onClick={() => setIsAnnual(prev => !prev)}
          aria-label='Toggle annual billing'
        >
          <span className="toggle-knob"></span>
        </button>

        <span className={isAnnual ? "active" : ""}>
          Annual <em>Save 20%</em>
        </span>
      </div>

      <div className="pricing-grid">
        {plans.map(plan => (
          <PlanCard key={plan.id} plan={plan} isAnnual={isAnnual} />
        ))}
      </div>

    </section>
  )
}

export default PricingTable;