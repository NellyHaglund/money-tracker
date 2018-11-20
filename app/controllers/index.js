import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        goToAddEntryForm() {
            this.transitionToRoute("add-entry-form");
        }
    }
});
