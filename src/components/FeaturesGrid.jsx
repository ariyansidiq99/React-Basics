import React from 'react'
import { features } from './Features'
import FeatureCard from './FeatureCard'
FeatureCard

function FeaturesGrid() {
  return (
    <section className="features">
        <h2>Everything You Need</h2>
        <div className="features_grid">
            {features.map(f => (
                <FeatureCard key={f.id} {...f} />
            ))}
        </div>
    </section>
  )
}

export default FeaturesGrid