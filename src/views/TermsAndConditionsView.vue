<template>
  <div
    class="bg-white p-8 self-center max-w-full rounded-3xl flex flex-col overflow-y-auto"
  >
    <div class="overflow-y-auto max-h-96 text-justify pr-2">
      <h1>Terms and Conditions</h1>
      <h2>Acceptance of Terms</h2>
      <p>
        You accept and agree to be governed by these Terms and Conditions by
        accessing and using our renting web app (ItemShare). Please don't use
        the Platform if you disagree with these terms.
      </p>

      <h2>User Responsibility</h2>
      <p>
        The Platform provides a platform for people to interact and conduct
        rental business. The things that are listed on the Platform are not
        under our ownership or control.
      </p>

      <p>
        Users are completely responsible for their rental actions, which may
        include interacting with other users and negotiating and agreeing on
        rental terms.
      </p>
      <p>
        Things advertised on the Platform may not be available, in good
        condition, of sufficient quality, or compliance with the law. Users are
        in charge of determining if the products are appropriate and
        trustworthy, and they use them at their own risk.
      </p>

      <h2>Liability</h2>
      <p>
        We shall not be liable for any direct, indirect, incidental,
        consequential, or punitive damages arising out of or connected with the
        Platform, including but not limited to loss of data, loss of profit, or
        loss of business opportunities, to the extent permitted by applicable
        law.
      </p>

      <p>
        The users undertake to hold us harmless from any claims, demands, or
        losses resulting from disagreements with other users or other parties.
      </p>

      <h2>Privacy and Personal Information</h2>
      <p>
        We are dedicated to safeguarding our users' data and privacy. For
        thorough information on how we gather, utilize, and protect user data,
        please refer to our Privacy Policy.
      </p>
      <p>
        Although we will make a reasonable effort to protect user data, we
        cannot ensure the security of user data sent through the Platform. Users
        are aware of and agree to this risk.
      </p>

      <h2>Intellectual Property</h2>

      <p>
        The Platform and its contents (aside from user-generated material) are
        owned by their respective owners and are covered by intellectual
        property rights. Without express authorization, Users agree not to use,
        modify, distribute, or reproduce any aspect of the Platform.
      </p>
      <h2>Modifications and Termination</h2>
      <p>
        The Platform, together with these Terms and Conditions, is subject to
        change or termination at any moment with prior notice.
      </p>
      <p>
        Users are recommended to often review the Terms and Conditions. Any
        changes made are accepted by continuing to use the Platform.
      </p>
    </div>
    <div class="flex justify-end gap-2 mt-4">
      <!-- TODO: User input from RegisterView is gone upon returning leaving TermsAndConditionVIew -->
      <!-- Probably some way to mark as check upon accepting the terms and conditions? -->
      <RouterLink
        to="/register"
        class="py-3 px-5 text-white bg-green-800 rounded-lg"
      >
        ACCEPT
      </RouterLink>
      <RouterLink
        to="/register"
        class="py-3 px-5 text-white bg-red-800 rounded-lg"
      >
        DECLINE
      </RouterLink>
    </div>
  </div>
</template>
<style scoped>
h2 {
  font-weight: 600;
  margin-top: 1em;
}
p {
  margin-bottom: 0.5em;
}
</style>
