import Controller from '@ember/controller';
import { inject as service } from "@ember/service";
export default Controller.extend({
    viewportHandler: service('viewport-handler'),
});
