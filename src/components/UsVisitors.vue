<template>
  <div class="content">
    <div v-if="language == 'english'">
      <div>
        <h2>Passport</h2>

        <div>
          <p>Everyone travelling internationally will need a valid passport to enter France. If you don’t have a passport, need to renew, or are unsure if your current passport is valid, check below.</p>
        </div>

        <h3>Is my passport valid?</h3>

        <div>
          <p>If you have a passport, check the expiration date. Your passport’s expiration date cannot be within 6 months of your expected return to your home county. This means if you intend to travel from August 1-14, 2020, then your passport must not expire until after February 14, 2020. If your passport’s expiration date is prior to February 14, 2020, you will be denied entry and not allowed to board your plane. To avoid this, renew your passport a few months before you plan to travel.</p>
        </div>

        <h3>How do I renew my passport?</h3>

        <div>
          <p>Renewing an adult passport is fairly simple and can be done from home. If you meet the listed requirements, you can <a href="https://travel.state.gov/content/travel/en/passports/apply-renew-passport/renew-by-mail.html">renew your passport by mail</a>. Otherwise, you need to <a href="https://travel.state.gov/content/travel/en/passports/apply-renew-passport/apply-in-person.html">renew your passport in person</a> at a <a href="https://iafdb.travel.state.gov/">passport acceptance facility</a>.</p>
        </div>

        <h3>How do I get a passport?</h3>

        <div>
          <p>Your <a href="https://travel.state.gov/content/travel/en/passports/apply-renew-passport/apply-in-person.html">first passport</a> can only be applied for in person. There are step-by-step instructions of the required forms, paperwork, and photos to bring as part of your application.</p>
        </div>

        <h3>Timeline</h3>

        <div>
          <p>It typically takes 4-6 weeks to renew or apply for a passport, keep this in mind and plan accordingly.</p>
        </div>

        <h2>Flight Tracking</h2>

        <div>
          <p>The best way to find flights is to use a flight tracking service, like Hopper, Skyscanner or Google Flights. Once you set up a tracked flight, you’ll receive an alert every time the airfare goes up or down.</p>

          <p>Track a variety of flights based on different dates, airports, and stops to give yourself a broad view of options.</p>

          <p>Note: Flights can only be booked within 331 days of departure. Until then, there is no way to track or view flights for those dates.</p>
        </div>

        <h3>Airports</h3>

        <div>
          <p>There a number of different ways to fly from the US to France.</p> 

          <p>The Philadelphia-area airports to consider are: Philadelphia (PHL), Newark (ERW), and New York (JFK).</p>

          <p>The only direct flights from the US to France are into Paris. The Paris-area airports to consider are: Charles de Gaulle (CDG) and Orly (ORY). Flying into Paris is not necessary, and you can fly into any major city in France. Choosing to fly into another French airport will put you closer to the actual wedding venue.</p>
        </div>

        <h4>Choosing an Airport</h4>

        <div>
          <p>JFK and ERW tend to offer cheaper direct flights for full-service and budget airlines compared to PHL. If you’re not already in the New York area, this will add travel time and transportation costs to reach the airport, but should still be considered for groups traveling together.</p>
        </div>

        <h4>Budget Airlines</h4>
        <div>
          <p>Flying on a budget airline can be great for saving money, but always check what’s included in your ticket and what additional costs there will be for checked baggage, carry ons, and food. Budget airlines aren’t as reliable as other major airlines, meaning they can often run late or cancel flights last minute. If you plan on keeping a tight schedule with your flights, budget airlines may not be the best option. If you have a looser schedule, then risk away!</p>
        </div>

        <h4>Group Discount</h4>
        <div>
          <p>A number of airlines will offer discounts on groups of 6 or more. If there are people who plan on taking the same flights, call your preferred airline to ask them about group accommodations and offers.</p>
        </div>

        <h2>Travel Tips!</h2>

        <h3>Essentials</h3>

        <div>
          <p>European outlets are not the same as the US. You’ll need to bring an outlet adapter to make sure items like your phone charger can be plugged in and used. Outlet adapters are NOT the same as converters, which allow you to plug in and use US products like hair dryers, straighteners, etc. If you are bringing these items with you, you MUST bring a converter to use it.</p>
        </div>

        <h3>Credit Cards and Bank Information</h3>

        <div>
          <p>Call your bank and credit card companies to see if they charge any fees for foreign transactions or ATM withdrawals. For instance, TD Bank only charges a $3 ATM fee for withdrawals abroad and Capital One doesn’t have any fees on foreign transactions.</p>

          <p>Some banks will even convert US dollars to Euros ahead of your trip. This is a great option if it’s free of charge, or you can wait until you arrive in Europe and can withdrawal money at an ATM.</p>
        </div>

        <h3>Weather</h3>

        <div>
          <p>Summers are hot in France, but we are fortunate to not deal with any humidity! Nights can get a little cooler, especially in the countryside. Keep in mind that air conditioning is not commonplace.</p>
        </div>
      </div>
    </div>
    <div v-if="language == 'french'">
      <div>
        <h2>

        </h2>
      </div>
      <div>
        <p>
          
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsVisitors',
  props: {
    language: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
