import tn from 'discourse/components/topic-navigation';

export default {
  name: 'always-mobile-timeline',
  initialize: function(){

    /* This is mostly the same code as in the current _performCheckSize()
       function, but "forced" to use the mobile-style indicator and pop-up
       timeline menu rather than the floating one. 
  
       This code will need to be updated any time the topic-navigation
       component in Discourse receives major changes.
    */
    tn.reopen({
      _performCheckSize() {
        if (!this.element || this.isDestroying || this.isDestroyed) { return; }

        let info = this.get('info');

        if (info.get('topicProgressExpanded')) {

          info.setProperties({
            renderTimeline: true,
            renderAdminMenuButton: true
          });

        } else {
          info.setProperties({
            renderTimeline: false,
            renderAdminMenuButton: true
          });
        }
      }
    });

  }
};
