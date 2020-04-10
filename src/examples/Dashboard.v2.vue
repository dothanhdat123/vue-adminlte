<template>
  <div class="dashboard">
    <div>
      <b-form-group
        id="fieldset-1"
        description="Let us know your name."
        label="Enter your name"
        label-for="input-1"
        :invalid-feedback="invalidFeedback"
        :valid-feedback="validFeedback"
        :state="state"
      >
        <b-form-input id="input-1" v-model="name" :state="state" trim></b-form-input>
      </b-form-group>
    </div>
    <div>
        <b-tabs content-class="mt-3">
          <b-tab title="First" active><p>I'm the first tab</p></b-tab>
          <b-tab title="Second"><p>I'm the second tab</p></b-tab>
          <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
      </b-tabs>
    </div>
  </div>

</template>

<script>
import VAInfoBox from '../widgets/VAInfoBox.vue'
import VADirectChat from '../widgets/VADirectChat.vue'
import VAUserList from '../widgets/VAUserList.vue'

export default {
  name: 'DashboardV2',
  components: {
    'va-info-box': VAInfoBox,
    'va-direct-chat': VADirectChat,
    'va-user-list': VAUserList
  }
}
</script>
