import React from 'react'

function Hero() {
  return (
    <section class="bg-primary hero-background">
        <div class="container hero">
          <div class="hero-text-container">
            <h1 class="fs-primary-heading fw-light text-accent">
              Next generation digital banking
            </h1>
            <p class="text-primary">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <a href="#" class="btn fs-300 fw-regular">Request Invite</a>
          </div>

          <div class="hero-image-container">
            <img
              src="images/image-mockups.png"
              class="hero-image"
              alt="Phones showing bank account summary"
              loading="eager"
            />
          </div>
        </div>
      </section>
  )
}

export default Hero