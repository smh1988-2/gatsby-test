import React from "react";

function ValueProps() {
  return (
    <section class="section-container bg-neutral-accent">
      <div class="container">
        <h2 class="value-prop-header fs-600 fw-light text-accent">
          Why choose Easybank?
        </h2>
        <p class="text-primary fs-300">
          We leverage Open Banking to turn your bank account into your financial
          hub.
        </p>
        <p class="text-primary fs-300">
          Control your finances like never before.
        </p>

        <div class="col-grid-4">
          <div class="value-prop">
            <img
              src="images/icon-online.svg"
              class="value-prop-image"
              alt=""
            />
            <h4 class="fs-400 fw-light text-accent">Online Banking</h4>
            <p class="text-primary fs-300">
              Our modern web and mobile applications allow you to keep track of
              your finacnes wherever you are in the world
            </p>
          </div>

          <div class="value-prop">
            <img
              src="images/icon-budgeting.svg"
              class="value-prop-image"
              alt=""
            />
            <h4 class="fs-400 fw-light text-accent">Simple Budgeting</h4>
            <p class="text-primary fs-300">
              See exactly where your money goes each month. Receive
              notifications when vou re close to hitting your limits.
            </p>
          </div>

          <div class="value-prop">
            <img
              src="images/icon-onboarding.svg"
              class="value-prop-image"
              alt=""
            />
            <h4 class="fs-400 fw-light text-accent">Fast Onboarding</h4>
            <p class="text-primary fs-300">
              We don't do branches. Open your account in minutes online and
              start taking control of your finances right away
            </p>
          </div>

          <div class="value-prop">
            <img
              src="images/icon-api.svg"
              class="value-prop-image"
              alt=""
            />
            <h4 class="fs-400 fw-light text-accent">Open API</h4>
            <p class="text-primary fs-300">
              Manage your savings, investments, pension and much more from one
              account. Tracking your money has never been easier
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValueProps;
